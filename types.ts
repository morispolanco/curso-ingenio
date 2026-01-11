
export enum SessionStatus {
  LOCKED = 'LOCKED',
  UNLOCKED = 'UNLOCKED',
  COMPLETED = 'COMPLETED'
}

export interface ClassicalReading {
  title: string;
  author: string;
  excerpt: string;
}

export interface IllustrativeCase {
  title: string;
  description: string;
}

export interface Exercise {
  id: string;
  type: 'open' | 'arbitrage' | 'translation' | 'devil';
  prompt: string;
  userAnswer?: string;
  aiFeedback?: string;
}

export interface Session {
  id: number;
  title: string;
  objective: string;
  concepts: string[];
  status: SessionStatus;
  content: string;
  cases: IllustrativeCase[];
  classicalReading: ClassicalReading;
  exercises: Exercise[];
  closingQuote: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  source: string;
  connection: string;
}

export interface UserProgress {
  currentSessionId: number;
  completedSessions: number[];
  exerciseAnswers: Record<string, string>;
}
