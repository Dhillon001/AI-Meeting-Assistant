import type { AnalysisResult } from "@/types/analysis";
import { Card } from "@/components/Card";

interface AnalysisResultsProps {
  result: AnalysisResult;
}

function EmptyListMessage({ message }: { message: string }) {
  return <p className="text-sm text-slate-500">{message}</p>;
}

function TagList({ items, variant = "default" }: { items: string[]; variant?: "default" | "feature" }) {
  if (items.length === 0) {
    return <EmptyListMessage message="Nothing identified in this category." />;
  }

  const tagClass =
    variant === "feature"
      ? "border-violet-500/30 bg-violet-500/15 text-violet-200"
      : "border-indigo-500/30 bg-indigo-500/15 text-indigo-200";

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full border px-3 py-1 text-sm ${tagClass}`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function AnalysisResults({ result }: AnalysisResultsProps) {
  return (
    <div className="space-y-6">
      <p className="text-center text-xs font-medium uppercase tracking-widest text-emerald-400/90">
        Analysis complete
      </p>

      <Card
        title="Meeting Summary"
        icon={
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        }
      >
        <p className="text-sm leading-7 text-slate-300">{result.summary}</p>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card
          title="Projects Discussed"
          icon={
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          }
        >
          <TagList items={result.projects} />
        </Card>

        <Card
          title="Features Discussed"
          icon={
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          }
        >
          <TagList items={result.features_discussed} variant="feature" />
        </Card>
      </div>

      <Card
        title="Action Items / TODOs"
        icon={
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
        }
      >
        {result.tasks.length === 0 ? (
          <EmptyListMessage message="No action items were found in this transcript." />
        ) : (
          <div className="space-y-3">
            {result.tasks.map((task, index) => (
              <div
                key={`${task.task}-${index}`}
                className="rounded-xl border border-white/5 bg-black/20 p-4 transition hover:border-indigo-500/20 hover:bg-black/30"
              >
                <p className="font-medium text-white">{task.task}</p>
                <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-3">
                  <div className="rounded-lg bg-white/5 px-3 py-2">
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Owner</dt>
                    <dd className="mt-0.5 text-slate-200">{task.owner || "Unassigned"}</dd>
                  </div>
                  <div className="rounded-lg bg-white/5 px-3 py-2">
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Deadline</dt>
                    <dd className="mt-0.5 text-slate-200">{task.deadline || "Not specified"}</dd>
                  </div>
                  <div className="rounded-lg bg-white/5 px-3 py-2">
                    <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Project</dt>
                    <dd className="mt-0.5 text-slate-200">{task.project || "General"}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
