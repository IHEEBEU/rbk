const bind = require("./main");

describe("bind", () => {
  test("should exist", () => {
    expect(bind).toBeDefined();
  });

  test("should take at least 2 argument", () => {
    const numberOfArguments = bind.length;
    expect(numberOfArguments >= 2).toBe(true);
  });

  test("should return a Function", () => {
    expect(bind(() => {}, {})).toStrictEqual(expect.any(Function));
  });

  test('should return a function that returns bob for context {name: "bob"}', () => {
    const input = [
      function () {
        return this.name;
      },
      { name: "bob" },
    ];
    const bindedFunction = bind(input[0], input[1]);
    const actual = bindedFunction();
    const expected = "bob";
    expect(actual).toStrictEqual(expected);
  });

  test("should be able bind params to given function", () => {
    const input = [
      function (x) {
        return this.name + x;
      },
      { name: "bob" },
    ];
    const bindedFunction = bind(input[0], input[1]);
    const actual = bindedFunction(" is awesome");
    const expected = "bob is awesome";
    expect(actual).toStrictEqual(expected);
  });
});

describe("Function.prototype.bind", () => {
  test("should exist", () => {
    expect(Function.prototype.bind).toBeDefined();
  });

  test("should take at least 2 argument", () => {
    const numberOfArguments = Function.prototype.bind.length;
    expect(numberOfArguments >= 1).toBe(true);
  });

  test("should return a Function", () => {
    expect(Function.prototype.bind(() => {}, {})).toStrictEqual(
      expect.any(Function)
    );
  });

  test('should return a function that returns bob for context {name: "bob"}', () => {
    const fn = function () {
      return this.name;
    };
    const input = { name: "bob" };
    const bindedFunction = fn.bind(input);
    const actual = bindedFunction();
    const expected = "bob";
    expect(actual).toStrictEqual(expected);
  });

  test("should be able bind params to given function", () => {
    const fn = function (x) {
      return this.name + x;
    };
    const input = { name: "bob" };
    const bindedFunction = fn.bind(input);
    const actual = bindedFunction(" is awesome");
    const expected = "bob is awesome";
    expect(actual).toStrictEqual(expected);
  });
});
