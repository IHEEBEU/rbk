const fractionConverter = require("./main");

describe("function fractionConverter", () => {
  test("fractionConverter should be defined", () => {
    expect(fractionConverter).toBeDefined();
  });

  test("should accept one parameters", () => {
    const numberOfArguments = fractionConverter.length;
    expect(numberOfArguments).toBe(1);
  });

  test("should return a String", () => {
    expect(fractionConverter(0.5)).toStrictEqual(expect.any(String));
  });

  test('should return "1/2", for input 0.5', () => {
    const input = 0.5;
    const actual = fractionConverter(input);
    const expected = "1/2";
    expect(actual).toStrictEqual(expected);
  });

  test('should return "3/1", for input 3.0', () => {
    const input = 3.0;
    const actual = fractionConverter(input);
    const expected = "3/1";
    expect(actual).toStrictEqual(expected);
  });

  test('should return "5/2", for input 2.5', () => {
    const input = 2.5;
    const actual = fractionConverter(input);
    const expected = "5/2";
    expect(actual).toStrictEqual(expected);
  });

  test('should return "1/1", for input 1', () => {
    const input = 1;
    const actual = fractionConverter(input);
    const expected = "1/1";
    expect(actual).toStrictEqual(expected);
  });

  test('should return "50/1", for input 50', () => {
    const input = 50;
    const actual = fractionConverter(input);
    const expected = "50/1";
    expect(actual).toStrictEqual(expected);
  });

  test('should return "0/1", for input 0', () => {
    const input = 0;
    const actual = fractionConverter(input);
    const expected = "0/1";
    expect(actual).toStrictEqual(expected);
  });

  test('should return "-10/1", for input -10', () => {
    const input = -10;
    const actual = fractionConverter(input);
    const expected = "-10/1";
    expect(actual).toStrictEqual(expected);
  });

  test('should return "0/1", for input -0', () => {
    const input = -0;
    const actual = fractionConverter(input);
    const expected = "0/1";
    expect(actual).toStrictEqual(expected);
  });
});
