import { useState } from 'react'

const plugLink = 'https://xfloor.ai/xforge'

const faqItems = [
  ['Is this a team event?', 'No. It’s a solo program.'],
  ['Do I need my college permission?', 'No. You can join as an individual.'],
  ['How do I join?', 'Click PLUG NOW → Locate campus → Plug → Pay ₹500.'],
  ['What do I get after plugging?', '25k AI Credits + Token + App ID instantly.'],
  ['Can many students from one college join?', 'Yes. Any number of students can plug their own floor.'],
  ['Do I need to know AI/ML?', 'Not mandatory. If you can build a client app and follow docs, you can ship.'],
  ['Can my floor be private?', 'Yes. You can keep it private/public anytime.'],
  ['Is ₹500 refundable?', 'No. Plug fee is non-refundable.'],
  ['What are scholarships / partners?', 'Scholarships + partner council + finals details will be announced soon.'],
  ['Where do I get docs?', 'Inside xForge after you plug (and we’ll link them here too).'],
]

const sampleProjects = [
  {
    title: 'Campus Pulse Bot',
    desc: 'Telegram + web client that summarizes campus updates using floor memory and semantic search.',
    href: 'https://example.com/projects/campus-pulse-bot',
  },
  {
    title: 'LabMate Assistant',
    desc: 'AI helper for lab manuals, viva prep, and quick troubleshooting with prompt-tuned responses.',
    href: 'https://example.com/projects/labmate-assistant',
  },
  {
    title: 'HackTrack Copilot',
    desc: 'Build planner that tracks milestones, blockers, and release notes from project docs and commits.',
    href: 'https://example.com/projects/hacktrack-copilot',
  },
  {
    title: 'Placement Prep Studio',
    desc: 'Mock interview and DSA practice workspace with analytics, feedback loops, and custom policies.',
    href: 'https://example.com/projects/placement-prep-studio',
  },
]

const sectionTitle = 'text-2xl font-bold tracking-tight text-white sm:text-3xl'

const iconWrap =
  'grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-900/25'

function GlowCard({ children, className = '' }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-xl shadow-cyan-900/10 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 ${className}`}
    >
      {children}
    </div>
  )
}

function SvgIcon({ type }) {
  if (type === 'credits') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="M9 9h5a2 2 0 1 1 0 4H10a2 2 0 1 0 0 4h5" />
      </svg>
    )
  }
  if (type === 'token') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V8a5 5 0 1 1 10 0v3" />
      </svg>
    )
  }
  if (type === 'tune') {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 6h10" />
        <circle cx="16" cy="6" r="2" />
        <path d="M20 12H8" />
        <circle cx="6" cy="12" r="2" />
        <path d="M4 18h12" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 12h16" />
      <path d="m12 4 8 8-8 8" />
    </svg>
  )
}

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="animated-mesh absolute left-1/2 top-[-220px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-500/25 via-blue-500/10 to-indigo-600/20 blur-[120px]" />
        <div className="animated-mesh absolute bottom-[-130px] right-[-100px] h-[430px] w-[430px] rounded-full bg-gradient-to-r from-fuchsia-500/20 via-cyan-500/10 to-indigo-600/20 blur-[120px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <p className="text-sm font-semibold text-white sm:text-base">xForge 2026 • Season 1</p>
          <div className="flex items-center gap-3">
            <a href="#video" className="hidden text-sm text-slate-300 transition hover:text-cyan-300 sm:inline">
              How it works (30 sec)
            </a>
            <a href={plugLink} className="glow-pulse rounded-xl bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:scale-[1.03] hover:bg-cyan-300">
              PLUG NOW
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-10 sm:gap-20 sm:px-6 sm:py-14">
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-cyan-950/60 p-6 sm:p-10">
          <div className="float-soft absolute -right-16 -top-16 h-52 w-52 rounded-full border border-cyan-400/30" />
          <div className="float-soft-delay absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-2xl" />
          <div className="absolute right-10 top-8 hidden rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200 sm:block">
            BUILD • TUNE • SHIP
          </div>

          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" /> Live buildathon
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">Plug. Code. Tune. Ship.</h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                A solo 6-week buildathon for engineering students (Karnataka-wide). Plug your AI workspace, build a client app/bot, tune the AI behaviour, and ship a real demo.
              </p>
              <div className="space-y-2">
                <a href={plugLink} className="shine-overlay relative inline-flex rounded-2xl bg-cyan-400 px-8 py-4 text-base font-black text-slate-950 transition hover:translate-y-[-1px] hover:bg-cyan-300">
                  PLUG NOW
                </a>
                <p className="text-sm text-slate-300">₹500 Plug Pass → 25k AI Credits + App ID + Bearer Token</p>
                <a href="#video" className="inline-block text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
                  See the 30-sec plug flow
                </a>
              </div>
            </div>

            <GlowCard className="relative">
              <div className="absolute right-4 top-4 rounded-lg border border-cyan-300/40 bg-cyan-300/10 px-2 py-1 text-xs text-cyan-200">Builder Console</div>
              <div className="space-y-3 pt-6">
                {[
                  ['credits', '25,000 AI Credits loaded', 'Sandbox and production testing runway'],
                  ['token', 'App ID + Bearer Token issued', 'Client integration ready'],
                  ['tune', 'AI tuning controls unlocked', 'Prompt, policy, and model controls'],
                ].map(([type, title, sub], idx) => (
                  <div
                    key={title}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-slate-800/60 p-3 transition hover:border-cyan-400/40"
                    style={{ animation: `floatY ${4.6 + idx}s ease-in-out infinite` }}
                  >
                    <span className={iconWrap}>
                      <SvgIcon type={type} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="text-xs text-slate-300">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </section>

        <section id="video" className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className={sectionTitle}>Join in minutes (no registration form)</h2>
            <span className="hidden text-xs uppercase tracking-[0.2em] text-slate-400 sm:block">30 sec flow</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['01', 'Open xForge Chat', 'Launch your xForge flow instantly.'],
                ['02', 'Tap 📍 Locate Campus (or Search)', 'Pick your campus from discovery.'],
                ['03', 'Tap PLUG → pay ₹500 via UPI → done ✅', 'You are now officially plugged in.'],
              ].map(([n, title, sub]) => (
                <GlowCard key={n}>
                  <p className="text-xs font-bold tracking-widest text-cyan-300">STEP {n}</p>
                  <h3 className="mt-2 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{sub}</p>
                </GlowCard>
              ))}
            </div>
            <GlowCard className="animated-mesh relative min-h-52 bg-gradient-to-br from-slate-900/80 via-indigo-900/50 to-cyan-900/40">
              <p className="text-xs uppercase tracking-widest text-cyan-200">Video Placeholder</p>
              <p className="mt-2 text-sm text-slate-300">Drop a 30-second onboarding capture here.</p>
              <div className="mt-6 flex items-center justify-center">
                <button className="glow-pulse grid h-16 w-16 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/15 text-cyan-100">
                  ▶
                </button>
              </div>
              <p className="mt-4 text-center text-xs text-slate-400">No registration form • instant plug flow</p>
            </GlowCard>
          </div>
          <p className="text-sm text-slate-300">After plug, you instantly get: <span className="font-semibold text-white">25k AI Credits + Token + App ID</span> (copy buttons inside).</p>
        </section>

        <section className="space-y-6">
          <h2 className={sectionTitle}>What you get instantly (₹500 Plug Pass)</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ['credits', '25,000 AI Credits to build + test'],
              ['token', 'App ID + Bearer Token (ready for your client integration)'],
              ['arrow', 'SDK + API Docs (clear and detailed)'],
              ['tune', 'AI tuning tools (prompts, policies, parameters, model controls)'],
              ['arrow', 'Eligible for Top 100 showcase + finals day + scholarships (details announced soon)'],
            ].map(([icon, item]) => (
              <GlowCard key={item} className="py-4">
                <div className="flex items-start gap-3">
                  <span className={iconWrap}>
                    <SvgIcon type={icon} />
                  </span>
                  <p className="text-sm text-slate-100 sm:text-base">{item}</p>
                </div>
              </GlowCard>
            ))}
          </div>
          <p className="text-xs text-slate-400">Solo program. Plug is non-refundable. Unplug = out of the program.</p>
        </section>

        <section className="space-y-6">
          <h2 className={sectionTitle}>Sample projects built by students</h2>
          <div className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {sampleProjects.map((project, idx) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group min-w-[260px] snap-start lg:min-w-0"
                style={{ animation: `floatY ${6 + idx * 0.7}s ease-in-out infinite` }}
              >
                <GlowCard className="h-full">
                  <div className="mb-4 grid h-36 place-items-center rounded-xl border border-white/15 bg-gradient-to-br from-slate-800 to-slate-900 text-xs uppercase tracking-[0.2em] text-slate-400">
                    Image Placeholder
                  </div>
                  <h3 className="text-lg font-semibold text-white transition group-hover:text-cyan-300">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{project.desc}</p>
                </GlowCard>
              </a>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={sectionTitle}>Buildathon Workflow</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <GlowCard className="animated-mesh bg-gradient-to-br from-slate-900/70 to-blue-950/40">
              <div className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">Plug + Code</div>
              <h3 className="text-xl font-bold text-white">Build Client</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>Ingest content</li>
                <li>Query your floor memory using SDK</li>
                <li>Show results in your own UI</li>
              </ul>
            </GlowCard>
            <GlowCard className="animated-mesh bg-gradient-to-br from-slate-900/70 to-fuchsia-950/35">
              <div className="mb-3 inline-flex rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 px-3 py-1 text-xs font-medium text-fuchsia-200">Tune + Ship</div>
              <h3 className="text-xl font-bold text-white">Orchestrate Floor</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">
                <li>Choose model(s)</li>
                <li>Set behaviour (system prompt, policies)</li>
                <li>Tune parameters</li>
                <li>Add content and grow engagement (followers/likes/trending)</li>
              </ul>
            </GlowCard>
          </div>
        </section>

        <section className="rounded-2xl border border-cyan-800/40 bg-cyan-950/20 p-6">
          <h2 className={sectionTitle}>How this is different from hackathons</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <GlowCard className="bg-slate-900/40">
              <p className="text-xs uppercase tracking-widest text-slate-400">Hackathon</p>
              <p className="mt-2 text-white">24–48 hrs sprint → demo</p>
            </GlowCard>
            <GlowCard className="border-cyan-400/30 bg-cyan-900/20">
              <p className="text-xs uppercase tracking-widest text-cyan-200">xForge</p>
              <p className="mt-2 text-white">6 weeks → ship + improve + show proof</p>
            </GlowCard>
          </div>
          <p className="mt-4 text-slate-200">Hackathons are great. xForge is for builders who want a resume-ready shipped project.</p>
        </section>

        <section className="space-y-6">
          <h2 className={sectionTitle}>Compete solo. Win across the federation.</h2>
          <GlowCard>
            <div className="space-y-4 text-slate-200">
              <p>This is a solo program — you build on your own floor, at your own pace.</p>
              <p>But you’re not competing “inside your college”.</p>
              <p>
                You’re competing with the best builders across a federation of 200+ engineering colleges — like a Karnataka-wide virtual league.
              </p>
              <p className="font-semibold text-white">What that means for you:</p>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                'Fair solo competition (your work, your proof)',
                'Federation-wide leaderboard (see where you stand)',
                'Real recognition beyond your campus',
                'Top 100 showcase + finals day + scholarships (details announced soon)',
              ].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-slate-800/60 px-4 py-3 text-sm text-slate-100">
                  ✅ {item}
                </div>
              ))}
            </div>
          </GlowCard>
        </section>

        <section className="space-y-6">
          <h2 className={sectionTitle}>What you submit (easy checklist)</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Your plugged floor link',
              'GitHub repo (your client/app/bot)',
              '2–3 min demo video',
              'Short tuning note: what you changed + what improved',
            ].map((item) => (
              <GlowCard key={item} className="py-4">
                <p className="text-sm text-slate-100 sm:text-base">✅ {item}</p>
              </GlowCard>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className={sectionTitle}>FAQ</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {faqItems.map(([q, a], index) => {
              const isOpen = openFaq === index
              return (
                <div key={q} className="rounded-xl border border-white/10 bg-slate-900/40 px-4">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-3 py-4 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">{q}</span>
                    <span className="text-2xl leading-none text-cyan-300 transition">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && <p className="pb-4 text-sm text-slate-300">{a}</p>}
                </div>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/90">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Ready to put your campus on the AI map?</h2>
            <p className="mt-1 text-sm text-slate-300">₹500 Plug Pass → 25k credits + token + app id</p>
          </div>
          <a href={plugLink} className="shine-overlay relative inline-flex rounded-2xl bg-cyan-400 px-7 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300">
            PLUG NOW
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
