export interface Task {
  task: string;
  owner: string;
  deadline: string;
  project: string;
}

export interface AnalysisResult {
  summary: string;
  projects: string[];
  features_discussed: string[];
  tasks: Task[];
}

export interface AnalyzeRequest {
  transcript: string;
}

export interface AnalyzeResponse {
  success: true;
  data: AnalysisResult;
}

export interface AnalyzeErrorResponse {
  success: false;
  error: string;
}

export type AnalyzeApiResponse = AnalyzeResponse | AnalyzeErrorResponse;
