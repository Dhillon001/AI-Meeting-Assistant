import { MeetingAnalyzer } from "@/components/MeetingAnalyzer";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          AI Product Assistant
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          AI Meeting Assistant
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Paste a meeting transcript to extract summaries, projects, features,
          and action items. Your second brain for meeting decisions and TODOs.
        </p>
      </header>

      <MeetingAnalyzer />
    </main>
  );
}
