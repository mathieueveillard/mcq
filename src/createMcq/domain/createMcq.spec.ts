import { Dependencies, MCQ, createMcq } from "./createMcq";

test("It should create an MCQ by randomly choosing a given number of questions within all the possible questions", async () => {
  // GIVEN
  const dependencies: Dependencies = {
    createId: jest.fn().mockReturnValueOnce("aF6SwG"),
    fetchAllQuestions: jest.fn().mockResolvedValueOnce([
      { id: "zePMJB", label: "Quelle est la couleur du cheval blanc d'Henry IV ?" }, //
      { id: "0LI9e2", label: "Quelle est la couleur du cheval blanc d'Henry IV ?" },
      { id: "P9fNJF", label: "Quelle est la couleur du cheval blanc d'Henry IV ?" },
      { id: "4Beno9", label: "Quelle est la couleur du cheval blanc d'Henry IV ?" },
      { id: "uDrs3Z", label: "Quelle est la couleur du cheval blanc d'Henry IV ?" },
      { id: "Gcs6qc", label: "Quelle est la couleur du cheval blanc d'Henry IV ?" },
      { id: "pIfHsi", label: "Quelle est la couleur du cheval blanc d'Henry IV ?" },
      { id: "sI4uEX", label: "Quelle est la couleur du cheval blanc d'Henry IV ?" },
      { id: "0Ml0uJ", label: "Quelle est la couleur du cheval blanc d'Henry IV ?" },
      { id: "WbFn52", label: "Quelle est la couleur du cheval blanc d'Henry IV ?" },
    ]),
    createSubset: () =>
      jest.fn().mockImplementationOnce((array: string[]) => [
        array[4], //
        array[0],
        array[1],
        array[7],
        array[6],
      ]),
    saveMcq: jest.fn(),
  };

  const numberOfQuestions = 5;

  // WHEN
  const actual = await createMcq(dependencies)(numberOfQuestions);

  // THEN
  const expected: MCQ = {
    id: "aF6SwG",
    questionIds: [
      "uDrs3Z", //
      "zePMJB",
      "0LI9e2",
      "sI4uEX",
      "pIfHsi",
    ],
  };
  expect(actual).toEqual(expected);
  expect(dependencies.saveMcq).toHaveBeenCalledWith(expected);
});
