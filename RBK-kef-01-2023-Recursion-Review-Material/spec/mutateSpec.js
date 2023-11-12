//arrayToObject tests
describe("arrayToObject", () => {
  it("transfrom an array to an object", () => {
    var expected = arrayToObjec([true, "hello world", 169, undefined]);
    var result = { 0: true, 1: "hello world", 2: 169, 3: undefined };
    expect(expected).deep.equal(result);
  });
  it("Give each element its index as a key", () => {
    let expected = [arrayToObjec(["first", "second"])].reduce(function (
      acc,
      elem,
      i
    ) {
      return acc && Number(Object.keys(elem)[0]) === i;
    },
    true);
    expect(expected).deep.equal(true);
  });
  it("should handle the case of nested arrays", () => {
    var expected = {
      0: "hello world",
      1: { 0: 12, 1: true, 2: { 0: undefined, 1: "12" } },
    };
    var result = arrayToObjec(["hello world", [12, true, [undefined, "12"]]]);
    expect(expected).deep.equal(result);
  });
});

//objectToArray tests

describe("objectToArray", () => {
  it("transform an object to an array", () => {
    var expected = objectToArray({ hello: 1, what: true });
    var result = [
      ["hello", 1],
      ["what", true],
    ];
    expect(expected).deep.equal(result);
  });
  it("Transform the type of stringified integers keys to number", () => {
    var expected = [[1, 11]];
    var result = objectToArray({ 1: 11 });
    expect(result).deep.equal(expected);
  });
  it("should handle the case of nested objects", () => {
    var expected = objectToArray({
      key: {
        nest1: {
          nest11: { val1: true, val2: "12" },
        },
      },
    });
    var result = [
      [
        "key",
        [
          [
            "nest1",
            [
              [
                "nest11",
                [
                  ["val1", true],
                  ["val2", "12"],
                ],
              ],
            ],
          ],
        ],
      ],
    ];
    expect(expected).deep.equal(result);
});
});

//mutate tests

describe("mutate", () => {
  it("Transform an object to an array", () => {
    expect(mutate({ 1: 11 })).deep.equal([[1, 11]]);
  });
  it("Transform the type of stringified integers keys to number", () => {
    var expected = [[1, 11]];
    var result = mutate({ 1: 11 });
    expect(result).deep.equal(expected);
  });
  it("Put each couple : key and value in a nested array", () => {
    var expected = [
      [1, 11],
      [2, 22],
    ];
    var result = mutate({ 1: 11, 2: 22 });
    expect(result).deep.equal(expected);
  });
  it("Transform an array to an object", () => {
    var result =
      typeof mutate(["first"]) === "object" &&
      !Array.isArray(mutate(["first"]));
    expect(result).to.equal(true);
  });
  it("Give each element its index as a key", () => {
    let expected = [mutate(["first", "second"])].reduce(function (
      acc,
      elem,
      i
    ) {
      return acc && Number(Object.keys(elem)[0]) === i;
    },
    true);
    expect(expected).deep.equal(true);
  });
  it("should handle the case of arrays with nested objects and vice versa", () => {
    var firstExpected = {
      0: "lorem epsum",
      1: [
        [12, 12],
        ["nest", [["val", false]]],
      ],
    };
    var firstResult = mutate(["lorem epsum", { 12: 12, nest: { val: false } }]);

    var secondExpected = [
      [
        "values",
        {
          0: 1,
          1: 2,
          2: 3,
          3: [["nest", true]],
        },
      ],
    ];
    var secondResult = mutate({ values: [1, 2, 3, { nest: true }] });
    expect(firstExpected).deep.equal(firstResult);
    expect(secondExpected).deep.equal(secondResult);
  });
});