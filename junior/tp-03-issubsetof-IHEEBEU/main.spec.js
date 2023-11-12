require("./main");

beforeAll(() => {
  test("isSubsetOf should be defined", () => {
    expect(Array.prototype.isSubsetOf).toBeDefined();
  });
});

describe("Array function isSubsetOf", () => {
  test("should accept one parameters", () => {
    const numberOfArguments = Array.prototype.isSubsetOf.length;
    expect(numberOfArguments).toBe(1);
  });

  test("should return a boolean", () => {
    expect(Array.prototype.isSubsetOf.call([], [])).toStrictEqual(
      expect.any(Boolean)
    );
  });

  test("should return true, for inputs [], []", () => {
    const input1 = [];
    const input2 = [];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });

  test("should return true, for inputs [1,2], [1,2,3]", () => {
    const input1 = [1, 2];
    const input2 = [1, 2, 3];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });

  test('should return true, for inputs ["",""], ["","","",""]', () => {
    const input1 = ["", ""];
    const input2 = ["", "", "", ""];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });

  test('should return true, for inputs ["commit",""push"], ["commit",""rebase","push","blame"]', () => {
    const input1 = ["commit", "push"];
    const input2 = ["commit", "rebase", "push", "blame"];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });

  test('should return false, for inputs ["reset","merge","add","commit"], ["merge","reset","reset"]', () => {
    const input1 = ["reset", "merge", "add", "commit"];
    const input2 = ["merge", "reset", "reset"];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test('should return true, for inputs ["merge","force","reset"], ["reset", "merge", "add", "commit"]', () => {
    const input1 = ["merge", "force", "reset"];
    const input2 = ["reset", "merge", "add", "commit"];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("should return false, for inputs [3], [1,2,4,8,9]", () => {
    const input1 = [3];
    const input2 = [1, 2, 4, 8, 9];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("should return false, for inputs [3,6], [1,2,4,8,9,3]", () => {
    const input1 = [3, 6];
    const input2 = [1, 2, 4, 8, 9, 3];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("should return false, for inputs [3,7,9], [1,2,3,4,8,9]", () => {
    const input1 = [3, 7, 9];
    const input2 = [1, 2, 3, 4, 8, 9];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("should return true if all of the elements in the first array are in the second", () => {
    const input1 = ["cat", "dog", "cow"];
    const input2 = ["dog", "cow", "fox", "cat"];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });

  test("should return false if not all of the elements in the first array are in the second", () => {
    const input1 = ["cat", "dog", "cow"];
    const input2 = ["dog", "cow", "fox"];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = false;
    expect(actual).toStrictEqual(expected);
  });

  test("should disregard duplicates", () => {
    let actual = Array.prototype.isSubsetOf.call(
      ["cat", "cat", "dog"],
      ["cat", "dog"]
    );
    expect(actual).toStrictEqual(true);

    actual = Array.prototype.isSubsetOf.call(["cat", "cat", "dog"], ["cat"]);
    expect(actual).toStrictEqual(false);
  });

  test("should disregard order", () => {
    const input1 = ["cat", "dog"];
    const input2 = ["dog", "cat"];
    const actual = Array.prototype.isSubsetOf.call(input1, input2);
    const expected = true;
    expect(actual).toStrictEqual(expected);
  });

  test("should handle mixed arrays", () => {
    let actual = Array.prototype.isSubsetOf.call(
      [1, "cat", 3],
      [4, 3, "cat", 1]
    );
    let expected = true;
    expect(actual).toStrictEqual(expected);

    actual = Array.prototype.isSubsetOf.call([1, "cat", 3], [4, "cat", 1]);
    expected = false;
    expect(actual).toStrictEqual(expected);
  });
});
