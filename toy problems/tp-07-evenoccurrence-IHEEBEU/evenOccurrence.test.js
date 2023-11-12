const evenOccurrence = require("./evenOccurrence");

beforeAll(() => {
  test("evenOccurrence should be defined", () => {
    expect(evenOccurrence).toBeDefined();
  });
});

describe("function evenOccurrence", () => {
  test("should accept one parameters", () => {
    const numberOfArguments = evenOccurrence.length;
    expect(numberOfArguments).toBe(1);
  });

  test("should return a Number", () => {
    expect(evenOccurrence([1, 2, 3, 4, 4, 4, 3])).toStrictEqual(
      expect.any(Number)
    );
  });

  test("should return a String", () => {
    expect(evenOccurrence(["A", "A", "V", "V"])).toStrictEqual(
      expect.any(String)
    );
  });

  test("should return 2 for input [2,2,1,3]", () => {
    const expected = 2;
    const actual = evenOccurrence([2, 2, 1, 3]);
    expect(actual).toStrictEqual(expected);
  });

  test("should return null for input [1,2,3,4,5,-1,-2,-3,-4,-5]", () => {
    const expected = null;
    const actual = evenOccurrence([1, 2, 3, 4, 5, -1, -2, -3, -4, -5]);
    expect(actual).toStrictEqual(expected);
  });

  test("should return the first even occurrence of an array of numbers", () => {
    const expected = 2;
    const actual = evenOccurrence([1, 3, 3, 3, 2, 4, 4, 2, 5]);
    expect(actual).toStrictEqual(expected);
  });

  test("should return the first even occurrence of an array of negative numbers", () => {
    const expected = -2;
    const actual = evenOccurrence([-1, -3, -3, -3, -2, -4, -4, -2, -5]);
    expect(actual).toStrictEqual(expected);
  });

  test("should return the first even occurrence of an array of numbers with zeros", () => {
    const expected = 0;
    const actual = evenOccurrence([-1, -3, -3, -3, 0, -4, -4, 0, -5]);
    expect(actual).toStrictEqual(expected);
  });

  test("should return the first even occurrence of an array with strings", () => {
    const expected = "cat";
    const actual = evenOccurrence(["cat", "dog", "dig", "cat"]);
    expect(actual).toStrictEqual(expected);
  });

  test("should return the first even occurrence of a mixed array", () => {
    const expected = "meow";
    const actual = evenOccurrence(["meow", 1, 1, "meow"]);
    expect(actual).toStrictEqual(expected);
  });

  test("should return the first even occurrence in an array with multiple even occurrences", () => {
    const expected = "doublerainbow";
    const actual = evenOccurrence([
      "doublerainbow",
      "grumpycat",
      "grumpycat",
      "doublerainbow",
    ]);
    expect(actual).toStrictEqual(expected);
  });

  test("should return `null` when no items occur an even number of times", () => {
    const expected = null;
    const actual = evenOccurrence([
      "rob",
      "victor",
      "fred",
      "jess",
      "rob",
      "rob",
    ]);
    expect(actual).toStrictEqual(expected);
  });
});
