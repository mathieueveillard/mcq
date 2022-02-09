import { v4 as uuid } from "uuid";
import { MCQ } from "../mcq-creator";
import generateRandomIntegerWithinBoundaries from "./generateRandomIntegerWithinBoundaries";
import pickRandomValues, { PickRandomValuesInput } from "./pickRandomValues";

export interface Respondent {
  id: string;
}

export interface Quiz {
  id: string;
  mcqId: string;
  subsetOfQuestionsIds: string[];
}

export interface Answer {
  id: string;
  respondentId: string;
  quizId: string;
  questionId: string;
  choiceIds: string[];
}

export interface Dependencies {
  createId(): string;
  randomGenerator: ({ possibleValues, quantity }: PickRandomValuesInput<string>) => string[];
}

interface Input {
  mcq: MCQ;
  numberOfQuestions: number;
}

export const generateQuiz =
  ({ createId, randomGenerator }: Dependencies) =>
  ({ mcq, numberOfQuestions }: Input): Quiz => {
    const id = createId();

    const mcqId = mcq.id;

    const questionIds = mcq.poolOfQuestions.map((question) => question.id);

    const subsetOfQuestionsIds = randomGenerator({
      possibleValues: questionIds,
      quantity: numberOfQuestions,
    }).map((index) => questionIds[index]);

    return {
      id,
      mcqId,
      subsetOfQuestionsIds,
    };
  };

// For use in production:
const createId = uuid;
const randomGenerator = pickRandomValues(generateRandomIntegerWithinBoundaries(Math.random));
const dependencies: Dependencies = {
  createId,
  randomGenerator,
};
const productionReadyGenerateQuiz = generateQuiz(dependencies);
export default productionReadyGenerateQuiz;
