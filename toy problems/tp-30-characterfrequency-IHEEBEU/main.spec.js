const characterFrequency = require("./main");

describe("characterFrequency", () => {
  test("should exist", () => {
    expect(characterFrequency).toBeDefined();
  });

  test("should return an array of arrays, with each sub-array contains two elements (String and Number)", () => {
    const actual = characterFrequency("fun");
    expect(actual).toStrictEqual(expect.any(Array));
    for (let i = 0; i < actual.length; i++) {
      expect(actual[i]).toStrictEqual(expect.any(Array));
      expect(actual[i][0]).toStrictEqual(expect.any(String));
      expect(actual[i][1]).toStrictEqual(expect.any(Number));
    }
  });

  test("should return one key-value pair for each unique letter in the string", () => {
    // 'aaabbc' contains only 3 unqiue characters
    const actual = characterFrequency("aaabbc");
    expect(actual).toHaveLength(3);
  });

  test("should sort by descending order in frequency", () => {
    const result = characterFrequency("mississippi");
    expect(result[0][1]).toBe(4);
    expect(result[1][1]).toBe(4);
    expect(result[2][1]).toBe(2);
    expect(result[3][1]).toBe(1);
  });

  test("should sort by ascending order of letters", () => {
    const result = characterFrequency("yzbzy");
    expect(result[0][0]).toBe("y");
    expect(result[1][0]).toBe("z");
    expect(result[2][0]).toBe("b");
  });

  test("should sort priorities sorting by frequence over sorting by letter", () => {
    let result;

    // same number of p's and o's, sort ascending by character
    result = characterFrequency("popopo");
    expect(result[0][0]).toBe("o");
    expect(result[1][0]).toBe("p");

    // more p's and than o's, sort by frequency
    result = characterFrequency("popopop");
    expect(result[0][0]).toBe("p");
    expect(result[1][0]).toBe("o");
  });

  test("should handle the empty string degenerate case", () => {
    const result = characterFrequency("");
    expect(result).toStrictEqual([]);
  });

  test("should give the expected result for `supercalifragilisticexpialidocious`", function () {
    const result = characterFrequency("supercalifragilisticexpialidocious");
    const expected = [
      ["i", 7],
      ["a", 3],
      ["c", 3],
      ["l", 3],
      ["s", 3],
      ["e", 2],
      ["o", 2],
      ["p", 2],
      ["r", 2],
      ["u", 2],
      ["d", 1],
      ["f", 1],
      ["g", 1],
      ["t", 1],
      ["x", 1],
    ];
    expect(result).toStrictEqual(expected);
  });
});
