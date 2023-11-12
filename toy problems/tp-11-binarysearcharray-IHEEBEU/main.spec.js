const binarySearchArray = require('./main');

beforeAll(() => {
    test('binarySearchArray should be defined', () => {
        expect(binarySearchArray).toBeDefined();
    });
});

describe('function binarySearchArray', () => {
    test('should accept two parameters', () => {
        const numberOfArguments = binarySearchArray.length;
        expect(numberOfArguments).toBe(2);
    });

    test('should return an Array', () => {
        expect(binarySearchArray([1,2],1)).toStrictEqual(expect.any(Number));
    });

    test('should not use native indexOf method', () => {
        // Don't use indexOf! You're supposed to be writing binary search.
        // Spying on Array.prototype.indexOf
        const spy = jest.spyOn(Array.prototype, 'indexOf');
        binarySearchArray([1, 2, 3], 2);
        // We expect indexOf to be called zero times
        expect(spy).toBeCalledTimes(0);
        spy.mockRestore();
    });

    test('should not use native slice method', () => {
        // What's the time complexity of slice?
        // What should the time complexity of binarySearch be?
        // hint: they aren't the same!
        // Spying on Array.prototype.slice

        const spy = jest.spyOn(Array.prototype, 'slice');
        binarySearchArray([1, 2, 3], 2);

        // We expect indexOf to be called zero times
        expect(spy).toBeCalledTimes(0);
        spy.mockRestore();
    });

    test('should return 0 for 5 in [5]', () => {
        const input = [[5], 5];
        const expected = 0;
        const actual = binarySearchArray(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return null for 4 in [5]', () => {
        const input = [[5], 4];
        const expected = null;
        const actual = binarySearchArray(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 0 for 1 in [1, 2, 3, 4, 5]', () => {
        const input = [[1,2,3,4,5], 1];
        const expected = 0;
        const actual = binarySearchArray(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 1 for 2 in [1, 2, 3, 4, 5]', () => {
        const input = [[1,2,3,4,5], 2];
        const expected = 1;
        const actual = binarySearchArray(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 2 for 3 in [1, 2, 3, 4, 5]', () => {
        const input = [[1,2,3,4,5], 3];
        const expected = 2;
        const actual = binarySearchArray(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 3 for 4 in [1, 2, 3, 4, 5]', () => {
        const input = [[1,2,3,4,5], 4];
        const expected = 3;
        const actual = binarySearchArray(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 4 for 5 in [1, 2, 3, 4, 5]', () => {
        const input = [[1,2,3,4,5], 5];
        const expected = 4;
        const actual = binarySearchArray(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 3 for 4 in [1, 2, 3, 4, 5, 6]', () => {
        const input = [[1,2,3,4,5,6], 4];
        const expected = 3;
        const actual = binarySearchArray(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 3 for 45 in [11, 22, 33, 45, 53, 62]', () => {
        const input = [[11, 22, 33, 45, 53, 62], 45];
        const expected = 3;
        const actual = binarySearchArray(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });

    test('should return null for 55 in [11, 22, 33, 45, 53, 62]', () => {
        const input = [[11, 22, 33, 45, 53, 62], 55];
        const expected = null;
        const actual = binarySearchArray(input[0], input[1]);
        expect(actual).toStrictEqual(expected);
    });


});