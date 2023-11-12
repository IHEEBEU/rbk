const asyncMap = require("./main");

describe("function asyncMap", () => {
  test("asyncMap should be defined", () => {
    expect(asyncMap).toBeDefined();
  });

  test("should accept two parameters", () => {
    const numberOfArguments = asyncMap.length;
    expect(numberOfArguments).toBe(2);
  });

  test("should be a void function", () => {
    expect(asyncMap([], () => undefined)).toBeUndefined();
  });

  test("should pass the completed tasks to its callback", (done) => {
    const wait2For2 = (callback) => {
      setTimeout(() => {
        callback(2);
      }, 200);
    };

    const wait3For1 = (callback) => {
      setTimeout(() => {
        callback(1);
      }, 300);
    };

    asyncMap([wait2For2, wait3For1], function (results) {
      /* This should work regardless of order because of
       * the time it takes to execute these 2 functions
       */
      expect(results).toStrictEqual([2, 1]);
      done();
    });
  });

  test("should pass the completed tasks to its callback in the correct order", (done) => {
    const wait3For1 = (callback) => {
      setTimeout(() => {
        callback(1);
      }, 300);
    };

    const wait2For2 = (callback) => {
      setTimeout(() => {
        callback(2);
      }, 200);
    };

    asyncMap([wait3For1, wait2For2], (results) => {
      expect(results).toStrictEqual([1, 2]);
      done();
    });
  });

  test("should handle more than two async functions in the correct order", (done) => {
    const wait2For2 = (callback) => {
      setTimeout(() => {
        callback(2);
      }, 200);
    };

    const wait5For4 = (callback) => {
      setTimeout(() => {
        callback(4);
      }, 500);
    };

    const wait1For3 = (callback) => {
      setTimeout(() => {
        callback(3);
      }, 100);
    };

    const wait3For1 = (callback) => {
      setTimeout(() => {
        callback(1);
      }, 300);
    };

    const wait1For5 = (callback) => {
      setTimeout(() => {
        callback(5);
      }, 100);
    };

    asyncMap(
      [wait3For1, wait2For2, wait1For3, wait5For4, wait1For5],
      (results) => {
        expect(results).toStrictEqual([1, 2, 3, 4, 5]);
        done();
      }
    );
  });
});
