const sumArray = require("./main");

describe("sumArray()", () => {
  test("should exist", () => {
    expect(sumArray).toBeDefined();
  });

  test("should return a number", () => {
    const sum = sumArray([1, 2, 3]);
    expect(sum).toStrictEqual(expect.any(Number));
  });

  test("should return the largest sum of _contiguous_ elements, 6 for [1, 2, 3]", () => {
    expect(sumArray([1, 2, 3])).toStrictEqual(6);
  });

  test("should return the largest sum of _contiguous_ elements, 8 for [4, -1, 5]", () => {
    expect(sumArray([4, -1, 5])).toStrictEqual(8);
  });

  test("should return the largest sum of _contiguous_ elements, 11 for [10, -11, 11]", () => {
    expect(sumArray([10, -11, 11])).toStrictEqual(11);
  });

  test("should return the largest sum of _contiguous_ elements, -6 for [-7, -6, -9]", () => {
    expect(sumArray([-7, -6, -9])).toStrictEqual(-6);
  });

  test("should return the largest sum of _contiguous_ elements, 15 for [1, 2, 3, -6, 4, 5, 6]", () => {
    expect(sumArray([1, 2, 3, -6, 4, 5, 6])).toStrictEqual(15);
  });

  test("should return the largest sum of _contiguous_ elements, 16 for [1, 2, 3, -5, 4, 5, 6]", () => {
    expect(sumArray([1, 2, 3, -5, 4, 5, 6])).toStrictEqual(16);
  });

  test("should return the largest sum of _contiguous_ elements, 7 for [1, 2, 3, -4, 5]", () => {
    expect(sumArray([1, 2, 3, -4, 5])).toStrictEqual(7);
  });

  test("should return the largest sum of _contiguous_ elements, 8 for [1, 2, 3, -4, 5, -4, 5, -4]", () => {
    expect(sumArray([1, 2, 3, -4, 5, -4, 5, -4])).toStrictEqual(8);
  });

  test("should return the largest sum of _contiguous_ elements, 8 for [1, 2, 3, -4, 5, -4, 5, -4, -4]", () => {
    expect(sumArray([1, 2, 3, -4, 5, -4, 5, -4, -4])).toStrictEqual(8);
  });

  test("should return the largest sum of _contiguous_ elements, 8 for [1, 2, 3, -4, 5, -4, 5, -4, -4, -1]", () => {
    expect(sumArray([1, 2, 3, -4, 5, -4, 5, -4, -4, -1])).toStrictEqual(8);
  });

  test("should return the largest sum of _contiguous_ elements, 10 for [1, 2, 3, -4, 5, -4, 5, -4, -4, 10]", () => {
    expect(sumArray([1, 2, 3, -4, 5, -4, 5, -4, -4, 10])).toStrictEqual(10);
  });

  test("should return the largest sum of _contiguous_ elements, 5 for [-5, 2, 3]", () => {
    expect(sumArray([-5, 2, 3])).toStrictEqual(5);
  });

  test("should return the largest sum of _contiguous_ elements, 5 for [-5, -5, -5, 2, 3]", () => {
    expect(sumArray([-5, -5, -5, 2, 3])).toStrictEqual(5);
  });

  test("should return the largest sum of _contiguous_ elements, -1 for [-3, -2, -1, -2, -3]", () => {
    expect(sumArray([-3, -2, -1, -2, -3])).toStrictEqual(-1);
  });

  test("should return the largest sum of _contiguous_ elements, 1 for [99]", () => {
    expect(sumArray([99])).toStrictEqual(99);
  });
});
