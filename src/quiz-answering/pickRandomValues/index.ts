import { Boundaries } from "../generateRandomIntegerWithinBoundaries";

type RandomGenerator = (boundaries: Boundaries) => number;

export interface PickRandomValuesInput<T> {
  possibleValues: T[];
  quantity: number;
}

export const pickRandomValues =
  (generator: RandomGenerator) =>
  <T>({ possibleValues, quantity }: PickRandomValuesInput<T>): T[] => {
    const randomIndex = generator({ minimum: 0, maximum: possibleValues.length - 1 });

    if (quantity === 1) {
      return [possibleValues[randomIndex]];
    }

    const nextPossibleValues = [...possibleValues];
    nextPossibleValues.splice(randomIndex, 1);
    const nextQuantity = quantity - 1;
    return [
      possibleValues[randomIndex],
      ...pickRandomValues(generator)({ possibleValues: nextPossibleValues, quantity: nextQuantity }),
    ];
  };

export default pickRandomValues;
