export const ANALYSIS_JSON_SCHEMA = {
  name: "meeting_analysis",
  strict: true,
  schema: {
    type: "object",
    properties: {
      summary: {
        type: "string",
        description: "A concise summary of the meeting discussion and key decisions.",
      },
      projects: {
        type: "array",
        items: { type: "string" },
        description: "Project names or initiatives discussed in the meeting.",
      },
      features_discussed: {
        type: "array",
        items: { type: "string" },
        description: "Product features, capabilities, or requirements discussed.",
      },
      tasks: {
        type: "array",
        items: {
          type: "object",
          properties: {
            task: { type: "string" },
            owner: { type: "string" },
            deadline: { type: "string" },
            project: { type: "string" },
          },
          required: ["task", "owner", "deadline", "project"],
          additionalProperties: false,
        },
        description: "Action items and TODOs extracted from the meeting.",
      },
    },
    required: ["summary", "projects", "features_discussed", "tasks"],
    additionalProperties: false,
  },
} as const;

export const SYSTEM_PROMPT = `You are an expert AI product management assistant. Your job is to analyze meeting transcripts and extract structured information that helps teams remember decisions, track features, and organize work by project.

Guidelines:
- Write a clear, concise summary focused on decisions and outcomes.
- Identify all projects or initiatives mentioned, even if informally named.
- List specific product features, capabilities, or requirements discussed.
- Extract action items as tasks with owners, deadlines, and related projects when mentioned.
- If owner, deadline, or project is not mentioned, use an empty string for that field.
- Do not invent information that is not supported by the transcript.
- Prefer actionable, specific task descriptions over vague notes.`;

export function buildUserPrompt(transcript: string): string {
  return `Analyze the following meeting transcript and return structured JSON.

Transcript:
"""
${transcript}
"""`;
}
