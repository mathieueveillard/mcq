export type RandomGenerator = () => number;

export interface Boundaries {
  minimum: number;
  maximum: number;
}

export const generateRandomIntegerWithinBoundaries =
  (generator: RandomGenerator) =>
  ({ minimum, maximum }: Boundaries): number => {
    return Math.round(minimum + (maximum - minimum) * generator());
  };

export default generateRandomIntegerWithinBoundaries;
