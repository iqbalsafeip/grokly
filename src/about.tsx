import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          About <span className="text-pink-600">GROKLY</span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg">
          GROKLY is an AI voice platform that makes conversations with artificial intelligence feel natural,
          emotional, and alive. Speak, listen, and discover — all from your browser.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a
            href="#how-to-use"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-full text-sm font-medium shadow-md transition"
          >
            Try the demo (coming soon)
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="https://x.com/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 px-5 py-3 rounded-full text-sm font-medium"
          >
            Follow on X
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.86 1.1A4.5 4.5 0 0 0 16.5 0c-2.5 0-4.5 2.2-4.5 4.9 0 .38.04.75.12 1.1A12.82 12.82 0 0 1 1.64.88 4.8 4.8 0 0 0 3 6.3 4.44 4.44 0 0 1 .9 5.8v.06C.9 8.1 2.5 10 4.72 10.5a4.6 4.6 0 0 1-2.03.08 4.51 4.51 0 0 0 4.2 3.13A9.05 9.05 0 0 1 0 19.54a12.7 12.7 0 0 0 6.92 2.05c8.3 0 12.84-6.8 12.84-12.7v-.58A9.2 9.2 0 0 0 23 3z" fill="currentColor" />
            </svg>
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
            AI should not only understand words — it should understand tone, context, and emotion.
            GROKLY gives AI a voice that feels human.
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
                <svg className="w-6 h-6 text-pink-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 1v11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="8" y="4" width="8" height="10" rx="4" stroke="currentColor" strokeWidth="2" />
                  <path d="M19 11v2a7 7 0 0 1-14 0v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Voice-first Experience</h4>
              <p className="text-gray-600">Talk and listen to AI in real time using our powerful voice engine.</p>
            </article>

            <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-pink-50 mb-4">
                {/* Brain Icon */}
                <svg className="w-6 h-6 text-pink-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M9 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 3v18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 9h18M3 15h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Contextual Intelligence</h4>
              <p className="text-gray-600">GROKLY adapts tone, style, and emotion for more natural conversations.</p>
            </article>

            <article className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-pink-50 mb-4">
                {/* Sparkles Icon */}
                <svg className="w-6 h-6 text-pink-600" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 8l1.5 1.5L23 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Emotion-aware Design</h4>
              <p className="text-gray-600">GROKLY sounds alive — expressive, responsive, and human-like.</p>
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

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 bg-gradient-to-br from-white to-gray-50 border rounded-lg">
              <ol className="space-y-4 list-decimal list-inside text-gray-700">
                <li><strong>Open the GROKLY app</strong> in your browser (no install).</li>
                <li><strong>Allow microphone access</strong> when prompted.</li>
                <li><strong>Say a wake phrase</strong> (e.g., “Hello GROKLY”) or press the mic button.</li>
                <li><strong>Ask or chat naturally</strong> — GROKLY will respond in voice and text.</li>
                <li><strong>Switch to text</strong> anytime and continue the conversation.</li>
              </ol>
              <p className="mt-6 text-sm text-gray-500">Tip: For best results, use a quiet environment and a decent microphone.</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold mb-3">Voice Controls</h4>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Mic Button:</strong> Hold to speak or tap to toggle continuous listening.</li>
                <li><strong>Voice Mode:</strong> Choose between expressive, neutral, or concise voice styles.</li>
                <li><strong>History:</strong> View past conversations and export transcripts.</li>
              </ul>

              <div className="mt-6">
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-medium shadow">
                  Start Conversation
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Roadmap */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold mb-4">Team</h3>
            <p className="text-gray-700 mb-6">
              GROKLY is built by a small, multidisciplinary team of engineers, UX designers, and research-oriented product builders focused on human-centric AI experiences.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Founder & CEO:</strong> Jane Doe — product & strategy</li>
              <li><strong>Lead ML Engineer:</strong> John Smith — model integrations</li>
              <li><strong>Design Lead:</strong> Alex Kim — UX & voice design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Roadmap</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">Q4 2025 — Prototype</p>
                <p className="text-sm">Public demo, core voice flow, basic LLM integration.</p>
              </div>
              <div>
                <p className="font-semibold">Q1 2026 — Multi-language</p>
                <p className="text-sm">Add multi-lingual STT and TTS support.</p>
              </div>
              <div>
                <p className="font-semibold">Q2 2026 — Emotion Engine</p>
                <p className="text-sm">Tune voices for emotional expressiveness and persona customization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 border-t">
        <p>© {new Date().getFullYear()} GROKLY — Where Chat Meets Voice.</p>
        <p className="mt-2">Privacy • Terms • Contact</p>
      </footer>
    </main>
  );
}
