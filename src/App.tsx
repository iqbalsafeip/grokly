import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';
import {
  GitHub,
  Settings,
  FilePlus,
  Mic,
  Activity,
  Loader,
  AlertTriangle,
  X,
  ChevronDown,
  ChevronUp,
  Check,
  Headphones,
  Info,
  DownloadCloud,
} from 'react-feather';
import * as Tooltip from '@radix-ui/react-tooltip';
import * as Dialog from '@radix-ui/react-dialog';
import * as Slider from '@radix-ui/react-slider';
import * as Select from '@radix-ui/react-select';
import { isDesktop, isMobile } from 'react-device-detect';

import Button from './design_system/Button';
import SyntaxHighlighter from './design_system/SyntaxHighlighter';
import Message from './design_system/Message';
import API from './lib/api';
import Config from './lib/config';
import Storage from './lib/storage';
import Voice from './lib/voice';
import useVoices from './hooks/useVoices';

interface CreateChatGPTMessageResponse {
  answer: string;
  messageId: string;
}

interface Message {
  type: 'prompt' | 'response';
  text: string;
}

interface VoiceMappings {
  [group: string]: SpeechSynthesisVoice[];
}

enum State {
  IDLE,
  LISTENING,
  PROCESSING,
}

const savedData = Storage.load();

function App() {
  const {
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    transcript,
    listening,
    finalTranscript,
  } = useSpeechRecognition();

  const initialMessages: Message[] = [
    { type: 'response', text: 'Try speaking to the microphone.' },
  ];
  const defaultSettingsRef = useRef({
    host: 'http://localhost',
    port: 8000,
    voiceURI: '',
    voiceSpeed: 1,
  });
  const [state, setState] = useState(State.IDLE);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [settings, setSettings] = useState({
    host: (savedData?.host as string) ?? defaultSettingsRef.current.host,
    port: (savedData?.port as number) ?? defaultSettingsRef.current.port,
    voiceURI:
      (savedData?.voiceURI as string) ?? defaultSettingsRef.current.voiceURI,
    voiceSpeed:
      (savedData?.voiceSpeed as number) ??
      defaultSettingsRef.current.voiceSpeed,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(
    Config.IS_LOCAL_SETUP_REQUIRED,
  );
  const { voices, defaultVoice } = useVoices();
  const abortRef = useRef<AbortController | null>(null);
  const conversationRef = useRef({ currentMessageId: '' });
  const bottomDivRef = useRef<HTMLDivElement>(null);

  const availableVoices = useMemo(() => {
    const englishTypes = new Map();
    englishTypes.set('en-AU', 'English (Australia)');
    englishTypes.set('en-CA', 'English (Canada)');
    englishTypes.set('en-GB', 'English (United Kingdom)');
    englishTypes.set('en-IE', 'English (Ireland)');
    englishTypes.set('en-IN', 'English (India)');
    englishTypes.set('en-NZ', 'English (New Zealand)');
    englishTypes.set('en-US', 'English (United State)');

    const localEnglishVoices = voices.filter(
      (voice) => voice.localService && voice.lang.startsWith('en-'),
    );

    const result: VoiceMappings = {};
    for (let voice of localEnglishVoices) {
      const label = englishTypes.get(voice.lang);
      if (typeof label !== 'string') continue;
      if (!result[label]) result[label] = [];
      result[label].push(voice);
    }
    return result;
  }, [voices]);

  const selectedVoice = useMemo(() => {
    return voices.find((voice) => voice.voiceURI === settings.voiceURI);
  }, [voices, settings.voiceURI]);

  const recognizeSpeech = () => {
    if (state === State.IDLE) {
      Voice.enableAutoplay();
      Voice.startListening();
    } else if (state === State.LISTENING) {
      Voice.stopListening();
    }
  };

  const speak = useCallback(
    (text: string) => {
      Voice.speak(text, { voice: selectedVoice, rate: settings.voiceSpeed });
    },
    [selectedVoice, settings.voiceSpeed],
  );

  const resetConversation = () => {
    setState(State.IDLE);
    setMessages(initialMessages);
    conversationRef.current = { currentMessageId: '' };
    Voice.idle();
    abortRef.current?.abort();
  };

  const handleModalOpenChange = (isOpen: boolean) => {
    setIsModalVisible(isOpen);
    Storage.save(settings);
  };

  const resetSetting = (setting: keyof typeof settings) => {
    setSettings({
      ...settings,
      [setting]: defaultSettingsRef.current[setting],
    });
  };

  useEffect(() => {
    setState((oldState) => {
      if (listening) return State.LISTENING;
      if (
        (oldState === State.LISTENING && transcript) ||
        oldState === State.PROCESSING
      ) {
        return State.PROCESSING;
      }
      return State.IDLE;
    });
  }, [listening, transcript, finalTranscript]);

  useEffect(() => {
    if (state === State.LISTENING) {
      bottomDivRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state]);

  useEffect(() => {
    bottomDivRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length]);

  useEffect(() => {
    if (!defaultVoice) return;

    defaultSettingsRef.current.voiceURI = defaultVoice.voiceURI;
    setSettings((oldSettings) => {
      if (oldSettings.voiceURI) return oldSettings;
      return { ...oldSettings, voiceURI: defaultVoice.voiceURI };
    });
  }, [defaultVoice]);

  useEffect(() => {
    if (state !== State.PROCESSING || !finalTranscript) return;

    setMessages((oldMessages) => [
      ...oldMessages,
      { type: 'prompt', text: finalTranscript },
    ]);

    const host = Config.IS_LOCAL_SETUP_REQUIRED
      ? `${settings.host}:${settings.port}`
      : Config.API_HOST;

    const { response, abortController } = API.sendMessage(host, {
      text: finalTranscript,
      parentMessageId: conversationRef.current.currentMessageId || undefined,
    });

    abortRef.current = abortController;

    response
      .then((res) => res.json())
      .then((res: CreateChatGPTMessageResponse) => {
        conversationRef.current.currentMessageId = res.messageId;
        setMessages((oldMessages) => [
          ...oldMessages,
          { type: 'response', text: res.answer },
        ]);
        speak(res.answer);
      })
      .catch((err: unknown) => {
        console.warn(err);
        if (abortController.signal.aborted) return;

        let response: string;
        if (err instanceof TypeError && Config.IS_LOCAL_SETUP_REQUIRED) {
          response =
            'Local server needs to be set up first. Click on the Settings button to see how.';
          setIsTooltipVisible(true);
        } else {
          response = '$GROKLY, the voice of AI is coming soon. Stay tuned on X.';
        }

        setMessages((oldMessages) => [
          ...oldMessages,
          { type: 'response', text: response },
        ]);
        speak(response);
      })
      .finally(() => {
        setState(State.IDLE);
      });
  }, [state, finalTranscript, settings, speak]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <div>
        This browser doesn't support speech recognition. Please use Chrome.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-9 bg-gradient-to-br from-[#a1c4fd] to-[#c2e9fb] text-dark flex flex-col h-screen gap-y-4 lg:px-28 lg:py-12 lg:relative">
      {/* HEADER */}
      <header className="flex flex-col items-center lg:flex-row lg:justify-between lg:mb-4">

        <img src='/logo.png' width={"120"} height={"120"} />
        <h1 className="font-title text-3xl text-center w-64 lg:w-auto">
          GROKLY TALK
          <div className="inline-block w-4 h-7 ml-2 align-middle bg-dark/40 animate-blink" />
        </h1>

        <div className="mt-4 flex justify-center items-center gap-2 lg:px-2">
          {/* Twitter */}
          <a
            href="https://x.com/groklytalk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
          </a>

          {/* Dexscreener */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition"
          >
            <img src="/icons/dexscreener.svg" alt="Dexscreener" className="w-5 h-5" />
          </a>

          
          <a
            href="/GROKLY_Whitepaper.pdf"
            target='_blank'
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition"
          >
            <DownloadCloud size={18} />
            <span>Whitepaper</span>
          </a>
          <a
            href="https://about.grokly.fun/"
            target='_blank'
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition"
          >
            <Info size={18} />
            <span>About</span>
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex-1 flex flex-col gap-y-4 overflow-y-auto lg:mr-80 lg:gap-y-8">
        {messages.map(({ type, text }, index) => {
          const isActive =
            (state === State.IDLE &&
              ((type === 'prompt' && index === messages.length - 2) ||
                (type === 'response' && index === messages.length - 1))) ||
            (state === State.PROCESSING &&
              type === 'prompt' &&
              index === messages.length - 1);
          return (
            <Message
              key={text}
              type={type}
              text={text}
              isActive={isActive}
              onClick={speak}
            />
          );
        })}
        {state === State.LISTENING && (
          <Message type="prompt" text={transcript} isActive />
        )}
        <div ref={bottomDivRef} />
      </main>

      {/* BUTTONS + SETTINGS */}
      <div>
        <div className="lg:absolute lg:right-28 lg:bottom-12 lg:w-72">
          {!isMicrophoneAvailable && (
            <div className="flex gap-x-3 mb-6 text-danger">
              <div className="shrink-0">
                <AlertTriangle strokeWidth={1} />
              </div>
              <div>
                Please allow microphone permission for this app to work properly.
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center items-center gap-x-8 lg:flex-col lg:gap-y-8 lg:absolute lg:top-1/2 lg:right-28 lg:-translate-y-1/2">
          {/* <Button aria-label="Settings" onClick={() => setIsModalVisible(true)}>
            <Settings strokeWidth={1} />
          </Button> */}

          <button
            type="button"
            className={`w-16 h-16 ${state === State.IDLE
                ? 'bg-dark'
                : state === State.LISTENING
                  ? 'bg-accent1'
                  : state === State.PROCESSING
                    ? 'bg-accent2'
                    : ''
              } text-light flex justify-center items-center rounded-full transition-all hover:opacity-80 focus:opacity-80`}
            onClick={recognizeSpeech}
            disabled={state === State.PROCESSING}
          >
            {state === State.IDLE ? (
              <Mic strokeWidth={1} size={32} />
            ) : state === State.LISTENING ? (
              <div className="animate-blink">
                <Activity strokeWidth={1} size={32} />
              </div>
            ) : state === State.PROCESSING ? (
              <div className="animate-spin-2">
                <Loader strokeWidth={1} size={32} />
              </div>
            ) : null}
          </button>
          {/* 
          <Button aria-label="New conversation" onClick={resetConversation}>
            <FilePlus strokeWidth={1} />
          </Button> */}
        </div>
      </div>

      {/* Settings Modal */}
      {/* (Modal tetap seperti versi asli kamu) */}
    </div>
  );
}

export default App;
