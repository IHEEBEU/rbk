const bubbleSort = require("./main");

beforeAll(() => {
  test("bubbleSort should be defined", () => {
    expect(bubbleSort).toBeDefined();
  });
});

describe("function bubbleSort", () => {
  test("should accept one parameters", () => {
    const numberOfArguments = bubbleSort.length;
    expect(numberOfArguments).toBe(1);
  });

  test("should return an Array", () => {
    expect(bubbleSort([1, 2])).toStrictEqual(expect.any(Array));
  });

  test("should return [1,2,3,4], for input [2,4,1,3]", () => {
    const input = [2, 4, 1, 3];
    const actual = bubbleSort(input);
    const expected = [1, 2, 3, 4];
    expect(actual).toStrictEqual(expected);
  });

  test("should return [1,2,3,4], for input [4,3,2,1]", () => {
    const input = [4, 3, 2, 1];
    const actual = bubbleSort(input);
    const expected = [1, 2, 3, 4];
    expect(actual).toStrictEqual(expected);
  });

  test("should return [1,2], for input [2,1]", () => {
    const input = [2, 1];
    const actual = bubbleSort(input);
    const expected = [1, 2];
    expect(actual).toStrictEqual(expected);
  });

  test("should return [0,1], for input [1,0]", () => {
    const input = [1, 0];
    const actual = bubbleSort(input);
    const expected = [0, 1];
    expect(actual).toStrictEqual(expected);
  });

  test("should return [-10,-7,-3,-2,-1,-1,0], for input [-3,-1,-2,-1,0,-10,-7]", () => {
    const input = [-3, -1, -2, -1, 0, -10, -7];
    const actual = bubbleSort(input);
    const expected = [-10, -7, -3, -2, -1, -1, 0];
    expect(actual).toStrictEqual(expected);
  });

  test("should return [-109, -42, -15, -10, -7, -3, -2, -1, -1, 0, 1, 1, 8, 9, 100, 101], for input [-10,-7,-3, 1,100,-42,9,1,-2,-1,-1,0,101,-15,8,-109]", () => {
    const input = [
      -10, -7, -3, 1, 100, -42, 9, 1, -2, -1, -1, 0, 101, -15, 8, -109,
    ];
    const actual = bubbleSort(input);
    const expected = [
      -109, -42, -15, -10, -7, -3, -2, -1, -1, 0, 1, 1, 8, 9, 100, 101,
    ];
    expect(actual).toStrictEqual(expected);
  });

  test("Should sort arrays with decimal numbers", () => {
    const input = [24.7, 24.3, 23, 9, 3, 3, 100, 25, 100];
    const expected = [3, 3, 9, 23, 24.3, 24.7, 25, 100, 100];
    expect(bubbleSort(input)).toStrictEqual(expected);
  });

  test("Should handle presorted arrays", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
