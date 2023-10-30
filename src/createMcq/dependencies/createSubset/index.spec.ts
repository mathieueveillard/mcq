import fc from "fast-check";
import { createSubset } from ".";

test("It should create a subset of the size provided as parameter", () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  fc.assert(
    fc.property(fc.nat({ max: 10 }), (size) => {
      const subset = createSubset(size)(array);
      return subset.length === size;
    }),
  );
});

test("It should throw an error if one attempts to create a subset that is bigger than the original pool", () => {
  // GIVEN
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const size = 15;

  // WHEN
  // THEN
  expect(() => createSubset(size)(array)).toThrowError(
    "One can't create a subset that is bigger than the original pool",
  );
});
