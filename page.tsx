import { MeetingAnalyzer } from "@/components/MeetingAnalyzer";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-12 text-center sm:text-left">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-indigo-300 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          AI Product Assistant
        </div>
        <h1 className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          AI Meeting Assistant
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:mx-0">
          Paste a meeting transcript to extract summaries, projects, features,
          and action items. Your second brain for meeting decisions and TODOs.
        </p>
      </header>

      <MeetingAnalyzer />
    </main>
  );
}
