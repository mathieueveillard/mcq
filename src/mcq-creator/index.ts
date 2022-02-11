export interface MCQ {
  id: string;
  poolOfQuestions: Question[];
}

export type AtLeastTwoChoices = [Choice, Choice, ...Choice[]];

export interface Question {
  id: string;
  label: string;
  type: "SINGLE_ANSWER_QUESTION" | "MULTIPLE_ANSWERS_QUESTION";
  choices: AtLeastTwoChoices;
}

export interface Choice {
  id: string;
  label: string;
  isValid: boolean;
}

// Creator
// Examinator
