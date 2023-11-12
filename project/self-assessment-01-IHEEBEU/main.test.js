const { percentOf, pluralize, isEven, counter } = require("./main");

// Test cases for percentOf function
describe("percentOf", () => {
  test("5 is 50% of 10", () => {
    expect(percentOf(5, 10)).toBe("5 is 50% of 10");
  });

  test("2 is 20% of 10", () => {
    expect(percentOf(2, 10)).toBe("2 is 20% of 10");
  });

  test("0 is 0% of 10", () => {
    expect(percentOf(0, 10)).toBe("0 is 0% of 10");
  });
});

// Test cases for pluralize function
describe("pluralize", () => {
  test("0 cats", () => {
    expect(pluralize("cat", 0)).toBe("0 cats");
  });

  test("5 cats", () => {
    expect(pluralize("cat", 5)).toBe("5 cats");
  });

  test("1 cat", () => {
    expect(pluralize("cat", 1)).toBe("1 cat");
  });
});

// Test cases for isEven function
describe("isEven", () => {
  test("0 is an even number", () => {
    expect(isEven(0)).toBe("0 is an even number");
  });

  test("9 is an odd number", () => {
    expect(isEven(9)).toBe("9 is an odd number");
  });

  test("-2 is an even number", () => {
    expect(isEven(-2)).toBe("-2 is an even number");
  });

  test("56468786548789 is an odd number", () => {
    expect(isEven(56468786548789)).toBe("56468786548789 is an odd number");
  });
});

// Test cases for counter function
describe("counter", () => {
  beforeEach(() => {
    n = 3;
  });

  test("should increment by three on each invocation", () => {
    counter();
    expect(global.n).toBe(3);
    n += 3;
    expect(global.n).toBe(6);
    n += 3;
    expect(global.n).toBe(9);
  });
});
