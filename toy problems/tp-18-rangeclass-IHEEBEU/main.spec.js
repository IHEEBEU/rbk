const Range = require("./main");

beforeAll(() => {
  test("Range should be defined", () => {
    expect(Range).toBeDefined();
  });
});

describe("constructor Range", () => {
  test("should accept 3 parameters", () => {
    const numberOfArguments = Range.length;
    expect(numberOfArguments).toBe(3);
  });

  test("should return a Range instance", () => {
    expect(new Range(1, 2, 3)).toStrictEqual(expect.any(Range));
  });

  test("should have size, each and includes functions in its prototype", () => {
    expect(Range.prototype.each).toStrictEqual(expect.any(Function));
    expect(Range.prototype.size).toStrictEqual(expect.any(Function));
    expect(Range.prototype.includes).toStrictEqual(expect.any(Function));
  });

  test("should not use an array", () => {
    const stringRange = Range.toString();
    expect(stringRange.search(/(\[]|Array)/)).toBe(-1);
  });

  test("should have `size()` method that returns number of elements", () => {
    const justOne = new Range(1);
    expect(justOne.size).toStrictEqual(expect.any(Function));
    expect(justOne.size()).toBe(1);

    const oneToTen = new Range(1, 10);
    expect(oneToTen.size()).toBe(10);

    const evenDigits = new Range(2, 8, 2);
    expect(evenDigits.size()).toBe(4);

    const threes = new Range(3, 100, 3);
    expect(threes.size()).toBe(33);
  });

  describe("function each", () => {
    test("should iterate with a callback", () => {
      const justOne = new Range(1);
      expect(justOne.size).toStrictEqual(expect.any(Function));

      const evenDigits = new Range(2, 8, 2);
      const elements = [];
      evenDigits.each(function (val) {
        elements.push(val);
      });
      expect(elements).toStrictEqual([2, 4, 6, 8]);

      // Let's try this problem, summing up the numbers from 1 to 100:
      // http://mathcentral.uregina.ca/QQ/database/QQ.02.06/jo1.html
      const oneToOneHundred = new Range(1, 100);
      let sum = 0;
      oneToOneHundred.each(function (val) {
        sum += val;
      });
      expect(sum).toBe(5050);
    });
  });

  describe("function includes", () => {
    test("should tell us if a number is in the series", () => {
      const justOne = new Range(1);
      expect(justOne.includes(1)).toBe(true);
      expect(justOne.includes(50)).toBe(false);

      const threes = new Range(3, 100, 3);
      expect(threes.includes(3)).toBe(true);
      expect(threes.includes(4)).toBe(false);
      expect(threes.includes(33)).toBe(true);
      expect(threes.includes(99)).toBe(true);
    });
  });

  test("should be able to count backwards", () => {
    const countdown = new Range(10, 0, -1);
    const elements = [];
    countdown.each((val) => {
      elements.push(val);
    });
    const expected = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    expect(elements).toStrictEqual(expected);
  });

  test("should be able to count backwards implicitly", () => {
    const countdown = new Range(10, 0);
    const elements = [];
    countdown.each((val) => {
      elements.push(val);
    });
    const expected = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    expect(elements).toStrictEqual(expected);
  });

  test("should be able to count down by 2", () => {
    const countdown = new Range(10, 0, -2);
    const elements = [];
    countdown.each((val) => {
      elements.push(val);
    });
    const expected = [10, 8, 6, 4, 2, 0];
    expect(elements).toStrictEqual(expected);
  });
});
