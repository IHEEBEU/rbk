const allAnagrams = require("./main");

const containWord = (fn, word) => {
  const functionString = fn.toString().replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, "");
  return numberOfIncludes(functionString, word);
};

/**
 *
 * @param {String} string
 * @param {String} word
 */

function numberOfIncludes(string, word) {
  let counter = 0;
  const comparisonLength = word.length;
  for (let i = 0; i < string.length; i++) {
    if (string.slice(i, comparisonLength + i) === word) {
      counter++;
    }
  }
  return counter;
}

describe("function allAnagrams", () => {
  test("allAnagrams should be defined", () => {
    expect(allAnagrams).toBeDefined();
  });

  test("should accept one parameters", () => {
    const numberOfArguments = allAnagrams.length;
    expect(numberOfArguments).toBe(1);
  });

  test("should return a Array of Strings", () => {
    expect(allAnagrams("")).toStrictEqual(expect.any(Array));
    let actual = allAnagrams("");
    for (let i = 0; i < actual.length; i++) {
      expect(actual[i]).toStrictEqual(expect.any(String));
    }
  });

  test("should return an array with a single character", () => {
    const input = "a";
    const actual = allAnagrams(input);
    const expected = ["a"];
    expect(actual).toStrictEqual(expected);
  });

  test("should return an array of anagrams that contains `lives` for input `elvis`", () => {
    const input = "elvis";
    const actual = allAnagrams(input);
    const found = actual.indexOf("lives") !== -1;
    const expected = true;
    expect(found).toStrictEqual(expected);
  });

  test("should return an array of anagrams that contains `badcredit` for input `debitcard`", () => {
    const input = "debitcard";
    const actual = allAnagrams(input);
    const found = actual.indexOf("badcredit") !== -1;
    const expected = true;
    expect(found).toStrictEqual(expected);
  });

  test("should return all anagrams for 'ab'", () => {
    const input = "ab";
    const actual = allAnagrams(input);
    let found = false;
    const expected = ["ab", "ba"];
    for (let i = 0; i < expected.length; i++) {
      found = actual.indexOf(expected[i]) !== -1;
      expect(found).toBe(true);
    }
  });

  test("should return all anagrams for 'abc'", () => {
    const expected = ["abc", "acb", "bac", "bca", "cab", "cba"];
    const actual = allAnagrams("abc");
    expect(actual.sort()).toStrictEqual(expected);
    let found = false;
    let item;
    for (let i = 0; i < expected.length; i++) {
      item = expected[i];
      found = actual.indexOf(item) !== -1;
      expect(found).toBe(true);
    }
  });

  test("should return all anagrams for 'apps'", () => {
    const expected = [
      "apps",
      "apsp",
      "aspp",
      "paps",
      "pasp",
      "ppas",
      "ppsa",
      "psap",
      "pspa",
      "sapp",
      "spap",
      "sppa",
    ];
    const actual = allAnagrams("apps");
    let found = false;
    let item;
    for (let i = 0; i < expected.length; i++) {
      item = expected[i];
      found = actual.indexOf(item) !== -1;
      // we should have found the current expected anagram item in your
      // `result` array but we did not!
      expect(found).toBe(true);
    }
  });

  test("should return all __unique__ anagrams for 'apps'", () => {
    // if you've gotten this far, you're doing awesome. this last test
    // is to check if you're returning an anagram array without duplicates
    const expected = [
      "apps",
      "apsp",
      "aspp",
      "paps",
      "pasp",
      "ppas",
      "ppsa",
      "psap",
      "pspa",
      "sapp",
      "spap",
      "sppa",
    ];
    const result = allAnagrams("apps");
    expect(result.length).toBe(expected.length);
  });

  test("should not use underscore's `uniq`", () => {
    // this just checks your code for any usage of `_.uniq`
    // NOTE: this test _might_ still fail even if you technically don't use
    // `_.uniq` (ie., if you hae commented out code that still references
    // `_.uniq` in your solution.)

    const usesUniq = containWord(allAnagrams, "_.uniq");
    expect(usesUniq).toBe(0);
  });
});
