import OpenAI from "openai";
import type { AnalysisResult } from "@/types/analysis";
import {
  ANALYSIS_JSON_SCHEMA,
  SYSTEM_PROMPT,
  buildUserPrompt,
} from "@/prompts/analyze-transcript";

function getOpenAIClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured.");
  }

  return new OpenAI({ apiKey });
}

export async function analyzeTranscript(
  transcript: string
): Promise<AnalysisResult> {
  const client = getOpenAIClient();

  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: buildUserPrompt(transcript) },
    ],
    response_format: {
      type: "json_schema",
      json_schema: ANALYSIS_JSON_SCHEMA,
    },
  });

  const content = response.choices[0]?.message?.content;

  if (!content) {
    throw new Error("OpenAI returned an empty response.");
  }

  return JSON.parse(content) as AnalysisResult;
}
