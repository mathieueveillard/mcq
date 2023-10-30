type Id = string;

export type MCQ = {
  id: Id;
  questionIds: Id[];
};

export type Question = {
  id: Id;
  label: string;
};

/*
  type Choice = {
    id: Id;
    questionId: Id;
    label: string;
    isCorrectAnswer: boolean;
  };
*/

export type Dependencies = {
  createId: () => Id;
  fetchAllQuestions: () => Promise<Question[]>;
  createSubset: (size: number) => <T>(array: T[]) => T[];
  saveMcq: (mcq: MCQ) => Promise<void>;
};

export const createMcq =
  ({ createId, fetchAllQuestions, createSubset, saveMcq }: Dependencies) =>
  async (numberOfQuestions: number): Promise<MCQ> => {
    const id = createId();

    const allQuestions = await fetchAllQuestions();

    const subsetOfQuestions = createSubset(numberOfQuestions)(allQuestions);

    const questionIds = subsetOfQuestions.map(({ id }) => id);

    const mcq: MCQ = {
      id,
      questionIds,
    };

    await saveMcq(mcq);

    return mcq;
  };
