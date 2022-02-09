import { Boundaries, generateRandomIntegerWithinBoundaries, RandomGenerator } from ".";

describe("Test of generateRandomIntegerWithinBoundaries", function () {
  test("Should return the minimum boundary if the random generator returns 0", function () {
    // GIVEN
    const randomGenerator: RandomGenerator = jest.fn().mockReturnValueOnce(0);
    const boundaries: Boundaries = {
      minimum: 1,
      maximum: 10,
    };

    // WHEN
    const actual: number = generateRandomIntegerWithinBoundaries(randomGenerator)(boundaries);

    // THEN
    const expected: number = 1;
    expect(actual).toEqual(expected);
  });

  test("Should return the maximum boundary if the random generator returns 1", function () {
    // GIVEN
    const randomGenerator: RandomGenerator = jest.fn().mockReturnValueOnce(1);
    const boundaries: Boundaries = {
      minimum: 1,
      maximum: 10,
    };

    // WHEN
    const actual: number = generateRandomIntegerWithinBoundaries(randomGenerator)(boundaries);

    // THEN
    const expected: number = 10;
    expect(actual).toEqual(expected);
  });

  test("Should round the result to the nearest integer if the random generator returns 0.5", function () {
    // GIVEN
    const randomGenerator: RandomGenerator = jest.fn().mockReturnValueOnce(0.5);
    const boundaries: Boundaries = {
      minimum: 1,
      maximum: 10,
    };

    // WHEN
    const actual: number = generateRandomIntegerWithinBoundaries(randomGenerator)(boundaries);

    // THEN
    const expected: number = 6;
    expect(actual).toEqual(expected);
  });
});
