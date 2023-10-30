import { createId } from "./dependencies/createId";
import { createSubset } from "./dependencies/createSubset";
import { Dependencies, createMcq } from "./domain/createMcq";

const dependencies = {
  createId,
  createSubset,
  // fetchAllQuestions
  // saveMcq
} as Dependencies;

const readyToUseCreateMcq = createMcq(dependencies);
