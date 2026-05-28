interface TranscriptInputProps {
  value: string;
  onChange: (value: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
  disabled?: boolean;
}

export function TranscriptInput({
  value,
  onChange,
  onAnalyze,
  isLoading,
  disabled = false,
}: TranscriptInputProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/20 backdrop-blur-xl">
      <label
        htmlFor="transcript"
        className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-300"
      >
        <svg
          className="h-4 w-4 text-indigo-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Meeting transcript
      </label>
      <textarea
        id="transcript"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Paste your meeting transcript here..."
        rows={14}
        disabled={disabled || isLoading}
        className="w-full resize-y rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm leading-6 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-indigo-400/50 focus:ring-2 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
      />
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          {value.trim().length.toLocaleString()} characters
        </p>
        <button
          type="button"
          onClick={onAnalyze}
          disabled={disabled || isLoading || value.trim().length < 20}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:from-indigo-400 hover:to-violet-500 hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:from-slate-600 disabled:to-slate-700 disabled:shadow-none"
        >
          {isLoading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Analyzing...
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Analyze Transcript
            </>
          )}
        </button>
      </div>
    </div>
  );
}
