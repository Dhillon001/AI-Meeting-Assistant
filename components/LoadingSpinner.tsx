interface LoadingSpinnerProps {
  label?: string;
}

export function LoadingSpinner({
  label = "Analyzing transcript...",
}: LoadingSpinnerProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-4 text-indigo-700">
      <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-indigo-300 border-t-indigo-600" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
