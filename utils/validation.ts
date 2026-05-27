const MIN_TRANSCRIPT_LENGTH = 20;
const MAX_TRANSCRIPT_LENGTH = 100_000;

export function validateTranscript(transcript: unknown): {
  valid: boolean;
  error?: string;
  value?: string;
} {
  if (typeof transcript !== "string") {
    return { valid: false, error: "Transcript must be a string." };
  }

  const trimmed = transcript.trim();

  if (trimmed.length < MIN_TRANSCRIPT_LENGTH) {
    return {
      valid: false,
      error: `Transcript must be at least ${MIN_TRANSCRIPT_LENGTH} characters.`,
    };
  }

  if (trimmed.length > MAX_TRANSCRIPT_LENGTH) {
    return {
      valid: false,
      error: `Transcript must be under ${MAX_TRANSCRIPT_LENGTH} characters.`,
    };
  }

  return { valid: true, value: trimmed };
}
