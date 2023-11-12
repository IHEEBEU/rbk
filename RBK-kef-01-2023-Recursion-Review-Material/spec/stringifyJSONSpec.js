// test cases are described in fixtures.js

describe("stringifyArray", () => {
  it("should return a string as a result", () => {
    var type = typeof stringifyArray([]);
    expect(type).to.equal("string");
  });
  it("shoud match the result of calling JSON.stringify", () => {
    var param = ["hello", true, undefined, 13, null];
    var expected = stringifyArray(param);
    var result = JSON.stringify(param);
    expect(expected).to.equal(result);
  });
});

describe("stringifyObject", () => {
  it("should return a string as a result", () => {
    var type = typeof stringifyObject({});
    expect(type).to.equal("string");
  });
  it("shoud match the result of calling JSON.stringify", () => {
    var param = { val1: { nest1: true, nest2: undefined }, val2: "12" };
    var expected = stringifyObject(param);
    var result = JSON.stringify(param);
    expect(expected).to.equal(result);
  });
});

describe("stringifyJSON", function () {
  it("should match the result of calling JSON.stringify", function () {
    stringifiableObjects.forEach(function (test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function (obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });
  });
});
