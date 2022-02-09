import { pickRandomValues } from ".";

describe("Test of pickRandomValues", function () {
  test("Pick one single value", function () {
    // GIVEN
    const possibleValues: string[] = ["a", "b", "c", "d", "e"];
    const randomGenerator = jest //
      .fn()
      .mockReturnValueOnce(3);

    // WHEN
    const actual = pickRandomValues(randomGenerator)({ possibleValues, quantity: 1 });

    // THEN
    const expected: string[] = ["d"];
    expect(actual).toEqual(expected);
  });

  test("Pick two values", function () {
    // GIVEN
    const possibleValues: string[] = ["a", "b", "c", "d", "e"];
    const randomGenerator = jest //
      .fn()
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(3);

    // WHEN
    const actual = pickRandomValues(randomGenerator)({ possibleValues, quantity: 2 });

    // THEN
    const expected: string[] = ["a", "e"];
    expect(actual).toEqual(expected);
  });

  test("[Control] Pick three values", function () {
    // GIVEN
    const possibleValues: string[] = ["a", "b", "c", "d", "e"];
    const randomGenerator = jest //
      .fn()
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(3)
      .mockReturnValueOnce(2);

    // WHEN
    const actual = pickRandomValues(randomGenerator)({ possibleValues, quantity: 3 });

    // THEN
    const expected: string[] = ["a", "e", "d"];
    expect(actual).toEqual(expected);
  });
});
