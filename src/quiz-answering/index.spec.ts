import { Dependencies, generateQuiz, Quiz } from ".";
import { AtLeastTwoChoices, MCQ } from "../mcq-creator";

describe("Test of generateQuiz", function () {
  test("It should pick questions according to the result of the random generator", function () {
    // GIVEN
    const mcq: MCQ = {
      id: "mcqId",
      poolOfQuestions: [
        {
          id: "questionId0",
          label: "Question",
          type: "SINGLE_CHOICE_QUESTION",
          choices: [] as unknown as AtLeastTwoChoices,
        },
        {
          id: "questionId1",
          label: "Question",
          type: "SINGLE_CHOICE_QUESTION",
          choices: [] as unknown as AtLeastTwoChoices,
        },
        {
          id: "questionId2",
          label: "Question",
          type: "SINGLE_CHOICE_QUESTION",
          choices: [] as unknown as AtLeastTwoChoices,
        },
        {
          id: "questionId3",
          label: "Question",
          type: "SINGLE_CHOICE_QUESTION",
          choices: [] as unknown as AtLeastTwoChoices,
        },
        {
          id: "questionId4",
          label: "Question",
          type: "SINGLE_CHOICE_QUESTION",
          choices: [] as unknown as AtLeastTwoChoices,
        },
        {
          id: "questionId5",
          label: "Question",
          type: "SINGLE_CHOICE_QUESTION",
          choices: [] as unknown as AtLeastTwoChoices,
        },
        {
          id: "questionId6",
          label: "Question",
          type: "SINGLE_CHOICE_QUESTION",
          choices: [] as unknown as AtLeastTwoChoices,
        },
        {
          id: "questionId7",
          label: "Question",
          type: "SINGLE_CHOICE_QUESTION",
          choices: [] as unknown as AtLeastTwoChoices,
        },
        {
          id: "questionId8",
          label: "Question",
          type: "SINGLE_CHOICE_QUESTION",
          choices: [] as unknown as AtLeastTwoChoices,
        },
        {
          id: "questionId9",
          label: "Question",
          type: "SINGLE_CHOICE_QUESTION",
          choices: [] as unknown as AtLeastTwoChoices,
        },
      ],
    };
    const createId = jest.fn().mockReturnValueOnce("quizId");
    const randomGenerator = jest.fn().mockReturnValueOnce([0, 2, 1, 5, 4]);
    const dependencies: Dependencies = {
      createId,
      randomGenerator,
    };

    // WHEN
    const quiz = generateQuiz(dependencies)({ mcq, numberOfQuestions: 5 });

    // THEN
    const expected: Quiz = {
      id: "quizId",
      mcqId: "mcqId",
      subsetOfQuestionsIds: [
        "questionId0", //
        "questionId2",
        "questionId1",
        "questionId5",
        "questionId4",
      ],
    };
    expect(quiz).toEqual(expected);
  });
});
