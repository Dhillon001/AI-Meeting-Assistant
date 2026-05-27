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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <label
        htmlFor="transcript"
        className="mb-3 block text-sm font-medium text-slate-700"
      >
        Meeting transcript
      </label>
      <textarea
        id="transcript"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Paste your meeting transcript here..."
        rows={14}
        disabled={disabled || isLoading}
        className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:opacity-60"
      />
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-xs text-slate-500">
          {value.trim().length.toLocaleString()} characters
        </p>
        <button
          type="button"
          onClick={onAnalyze}
          disabled={disabled || isLoading || value.trim().length < 20}
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          {isLoading ? "Analyzing..." : "Analyze Transcript"}
        </button>
      </div>
    </div>
  );
}
