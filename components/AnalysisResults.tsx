import type { AnalysisResult } from "@/types/analysis";
import { Card } from "@/components/Card";

interface AnalysisResultsProps {
  result: AnalysisResult;
}

function EmptyListMessage({ message }: { message: string }) {
  return <p className="text-sm text-slate-500">{message}</p>;
}

function TagList({ items }: { items: string[] }) {
  if (items.length === 0) {
    return <EmptyListMessage message="Nothing identified in this category." />;
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
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
      <Card title="Meeting Summary">
        <p className="text-sm leading-7 text-slate-700">{result.summary}</p>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Projects Discussed">
          <TagList items={result.projects} />
        </Card>

        <Card title="Features Discussed">
          <TagList items={result.features_discussed} />
        </Card>
      </div>

      <Card title="Action Items / TODOs">
        {result.tasks.length === 0 ? (
          <EmptyListMessage message="No action items were found in this transcript." />
        ) : (
          <div className="space-y-3">
            {result.tasks.map((task, index) => (
              <div
                key={`${task.task}-${index}`}
                className="rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <p className="font-medium text-slate-900">{task.task}</p>
                <dl className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-3">
                  <div>
                    <dt className="font-medium text-slate-500">Owner</dt>
                    <dd>{task.owner || "Unassigned"}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-500">Deadline</dt>
                    <dd>{task.deadline || "Not specified"}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-slate-500">Project</dt>
                    <dd>{task.project || "General"}</dd>
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
