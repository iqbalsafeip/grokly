import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          About <span className="text-pink-600">$GROKLY</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
          GROKLY is an AI voice platform that makes conversations with artificial intelligence
          feel natural, emotional, and alive. Speak, listen, and experience the future of AI.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center flex-wrap gap-4">
          <a
            href="#how-to-use"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md transition"
          >
            How To Use
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="https://pump.fun"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md transition"
          >
            💰 Buy $GROKLY
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 px-6 py-3 rounded-full text-sm font-medium"
          >
            Stay tuned on X
          </a>
        </div>
      </header>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center py-12">
        <div>
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To bridge the gap between human communication and artificial intelligence by enabling
            seamless, voice-first interaction that’s accessible to everyone.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We believe AI shouldn’t just understand words — it should understand tone, context,
            and emotion. GROKLY gives AI a voice that feels human.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-center text-3xl font-bold mb-8">What Makes GROKLY Unique</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-pink-50 mb-4">
                {/* Mic Icon */}
                <svg className="w-6 h-6 text-pink-600" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 1v11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="8"
                    y="4"
                    width="8"
                    height="10"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M19 11v2a7 7 0 0 1-14 0v-2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Voice-first Experience</h4>
              <p className="text-gray-600">
                Talk and listen to AI in real time using our powerful voice engine.
              </p>
            </article>

            <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-pink-50 mb-4">
                <svg className="w-6 h-6 text-pink-600" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18V6M15 18V6M12 3v18M3 9h18M3 15h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Contextual Intelligence</h4>
              <p className="text-gray-600">
                GROKLY adapts tone, style, and emotion for more natural conversations.
              </p>
            </article>

            <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-pink-50 mb-4">
                <svg className="w-6 h-6 text-pink-600" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 8l1.5 1.5L23 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Emotion-aware Design</h4>
              <p className="text-gray-600">
                GROKLY sounds alive — expressive, responsive, and human-like.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section id="how-to-use" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-6">How to Use GROKLY</h3>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
            Getting started is fast — open the app in your browser, allow microphone access, and start talking.
          </p>

          <div className="p-6 bg-gradient-to-br from-white to-gray-50 border rounded-lg shadow-sm">
            <ol className="space-y-4 list-decimal list-inside text-gray-700">
              <li>Open the GROKLY app in your browser.</li>
              <li>Allow microphone access when prompted.</li>
              <li>Say “Hello GROKLY” to start your conversation.</li>
              <li>Listen as GROKLY responds in real time with natural AI voice.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Team & Roadmap */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
          {/* Team */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Team</h3>
            <p className="text-gray-700 mb-6">
              GROKLY is built by a small, multidisciplinary team of engineers, designers, and AI
              researchers focused on making technology feel more human.
            </p>
            
          </div>

          {/* Roadmap */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Roadmap</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">Q1 2025 — Prototype Launch</p>
                <p className="text-sm">Public demo, voice engine integration, and initial LLM version.</p>
              </div>
              <div>
                <p className="font-semibold">Q2 2025 — Token Launch on Pump.fun</p>
                <p className="text-sm">
                  Official launch of our community coin <strong>$GROKLY</strong> on{" "}
                  <a
                    href="https://pump.fun"
                    target="_blank"
                    rel="noreferrer"
                    className="text-pink-600 hover:underline"
                  >
                    Pump.fun
                  </a>{" "}
                  — empowering the community to join the ecosystem early.
                </p>
              </div>
              <div>
                <p className="font-semibold">Q4 2026 — Multi-language Support</p>
                <p className="text-sm">Add multilingual voice and text recognition features.</p>
              </div>
              <div>
                <p className="font-semibold">Q5 2026 — Emotion Engine</p>
                <p className="text-sm">Advanced emotional tone modeling for human-like AI voice.</p>
              </div>
            </div>

            {/* Buy Button in Roadmap */}
            <div className="mt-8">
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
              >
                💰 Buy $GROKLY on Pump.fun
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 border-t">
        <p>© {new Date().getFullYear()} GROKLY — Where Chat Meets Voice.</p>
        <p className="mt-2">Stay tuned for $GROKLY launch on Pump.fun 🚀</p>
      </footer>
    </main>
  );
}
