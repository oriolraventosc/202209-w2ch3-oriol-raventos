import { calculator2 } from "./squareRoot.js";

describe("Given the function calculator1", () => {
  describe("When number1 equals 64 and numner2 equals undefined", () => {
    test("Then it should be 8", () => {
      const number1 = undefined;
      const number2 = 64;
      const finalOperationResult = 8;

      const result = calculator2(number1, number2);

      expect(result).toBe(finalOperationResult);
    });
  });
});
