// test.js

const calculator = require("../lab1/calculator");

describe("Calculator Tests", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("subtracts 5 - 2 to equal 3", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test("multiplies 4 * 3 to equal 12", () => {
    expect(calculator.multiply(4, 3)).toBe(12);
  });

  test("divides 10 / 2 to equal 5", () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test("division by zero throws an error", () => {
    expect(() => calculator.divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});
