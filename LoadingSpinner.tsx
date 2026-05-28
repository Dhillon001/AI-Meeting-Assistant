interface LoadingSpinnerProps {
  label?: string;
}

export function LoadingSpinner({
  label = "Analyzing transcript with AI...",
}: LoadingSpinnerProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 px-6 py-4 backdrop-blur-sm">
      <span className="relative flex h-5 w-5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-40" />
        <span className="relative inline-block h-5 w-5 animate-spin rounded-full border-2 border-indigo-400/30 border-t-indigo-400" />
      </span>
      <span className="text-sm font-medium text-indigo-200">{label}</span>
    </div>
  );
}
