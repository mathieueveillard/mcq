import { Dependencies } from "../../domain/createMcq";

export const createSubset: Dependencies["createSubset"] =
  (size) =>
  <T>(array: T[]) => {
    if (size > array.length) {
      throw Error("One can't create a subset that is bigger than the original pool");
    }

    const shuffledArray: T[] = [...array].sort((a: unknown, b: unknown) => 0.5 - Math.random());

    return shuffledArray.slice(0, size);
  };
