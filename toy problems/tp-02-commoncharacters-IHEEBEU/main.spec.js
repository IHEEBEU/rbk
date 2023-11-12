const commonCharacters = require("./main");

expect.extend({
  toBeEmptyStringOrNull(received) {
    if (received === "" || received === null) {
      return {
        message: () => `expected ${received} to be null or empty string`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be null or empty string`,
        pass: false,
      };
    }
  },
});

beforeAll(() => {
  test("commonCharacters should be defined", () => {
    expect(commonCharacters).toBeDefined();
  });
});

describe("function commonCharacters", () => {
  test("should accept two parameters", () => {
    const numberOfArguments = commonCharacters.length;
    expect(numberOfArguments).toBe(2);
  });

  test("should return a String", () => {
    expect(commonCharacters("ASD", "ASW")).toStrictEqual(expect.any(String));
  });

  test('should return "aeiou", for inputs "acexivou", "aegihobu"', () => {
    const input1 = "acexivou";
    const input2 = "aegihobu";
    const actual = commonCharacters(input1, input2);
    const expected = "aeiou";
    expect(actual).toStrictEqual(expected);
  });

  test('should return QWE, for inputs "QWEASDZXC", "QWERTYqwe"', () => {
    const input1 = "QWEASDZXC";
    const input2 = "QWERTYqwe";
    const expected = "QWE";
    const actual = commonCharacters(input1, input2);
    expect(actual).toStrictEqual(expected);
  });

  test('should return @q1#$, for inputs "@q1#$we@@!a*&%$zxcd@", "qwea+_)(0998@q1#$"', () => {
    const input1 = "@q1#$we@@!a*&%$zxcd@";
    const input2 = "qwea+_)(0998@q1#$";
    const expected = "@q1#$wea";
    const actual = commonCharacters(input1, input2);
    expect(actual).toStrictEqual(expected);
  });

  test('should return "" or null, for inputs "", ""', () => {
    const input1 = "";
    const input2 = "";
    const actual = commonCharacters(input1, input2);
    expect(actual).toBeEmptyStringOrNull();
  });

  test('should return "" or null, for inputs "qweasd", "zxcvbn"', () => {
    const input1 = "qweasd";
    const input2 = "zxcvbn";
    const actual = commonCharacters(input1, input2);
    expect(actual).toBeEmptyStringOrNull();
  });

  test('should return "" or null, for inputs "QWE", "qwe"', () => {
    const input1 = "QWE";
    const input2 = "qwe";
    const actual = commonCharacters(input1, input2);
    expect(actual).toBeEmptyStringOrNull();
  });

  test('should return q, for inputs "@qweazxcd@", "v234@!#q"', () => {
    const input1 = "@qweazxcd@";
    const input2 = "v234@!#q";
    const expected = "@q";
    const actual = commonCharacters(input1, input2);
    expect(actual).toStrictEqual(expected);
  });
});
