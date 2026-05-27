"use client";

import { useState } from "react";
import { AnalysisResults } from "@/components/AnalysisResults";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { TranscriptInput } from "@/components/TranscriptInput";
import type { AnalysisResult, AnalyzeApiResponse } from "@/types/analysis";

export function MeetingAnalyzer() {
  const [transcript, setTranscript] = useState("");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleAnalyze() {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ transcript }),
      });

      const data: AnalyzeApiResponse = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.success === false ? data.error : "Failed to analyze transcript."
        );
      }

      setResult(data.data);
    } catch (analyzeError) {
      const message =
        analyzeError instanceof Error
          ? analyzeError.message
          : "Something went wrong.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <TranscriptInput
        value={transcript}
        onChange={setTranscript}
        onAnalyze={handleAnalyze}
        isLoading={isLoading}
      />

      {isLoading && <LoadingSpinner />}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {result && <AnalysisResults result={result} />}
    </div>
  );
}
