export interface MCQ {
  id: string;
  poolOfQuestions: Question[];
}

export type AtLeastTwoChoices = [Choice, Choice, ...Choice[]];

export interface Question {
  id: string;
  label: string;
  type: "SINGLE_CHOICE_QUESTION" | "MULTIPLE_CHOICES_QUESTION";
  choices: AtLeastTwoChoices;
}

export interface Choice {
  id: string;
  label: string;
  isValid: boolean;
}

// Creator
// Examinator
