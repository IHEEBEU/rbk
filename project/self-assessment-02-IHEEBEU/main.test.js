const {
  addOne,
  removeEveryOther,
  greatestCommonDivisor,
  squareSum,
  check,
} = require("./main");

// for addOne function
describe("addOne", () => {
  test("should increment every element of an array by 1", () => {
    expect(addOne([1, 2, 3, 4])).toEqual([2, 3, 4, 5]);
    expect(addOne([3, 6, 9])).toEqual([4, 7, 10]);
  });
});

// for removeEveryOther function
describe("removeEveryOther", () => {
  test("should remove every second element from the array", () => {
    expect(
      removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"])
    ).toEqual(["Keep", "Keep", "Keep"]);
  });
});

// for greatestCommonDivisor function
describe("greatestCommonDivisor", () => {
  test("should return the greatest common divisor of two positive numbers", () => {
    expect(greatestCommonDivisor(10, 5)).toBe(5);
    expect(greatestCommonDivisor(9, 12)).toBe(3);
  });

  test("should return NaN if either num1 or num2 is not a number", () => {
    expect(greatestCommonDivisor(10, "5")).toBe(NaN);
    expect(greatestCommonDivisor("9", 12)).toBe(NaN);
  });
});

// for squareSum function
describe("squareSum", () => {
  test("should return the sum of squares of the numbers in the input array", () => {
    expect(squareSum([1, 2, 2])).toBe(9);
    expect(squareSum([3, 4, 5])).toBe(50);
  });
});

// for check function
describe("check", () => {
  test("should return true if the array contains the value, false if not", () => {
    expect(check([1, 2, 3, 4], 3)).toBe(true);
    expect(check([1, 2, 3, 4], 5)).toBe(false);
    expect(check(["a", "b", "c"], "b")).toBe(true);
    expect(check(["a", "b", "c"], "d")).toBe(false);
    expect(check(["a", "b", "c"], "C")).toBe(false);
  });
});
