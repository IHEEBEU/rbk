const spiralTraversal = require('./main');

describe('spiralTraversal', () => {
    test('spiralTraversal should exist', () => {
        expect(spiralTraversal).toBeDefined();
    });

    test("should accept one parameters", () => {
        const numberOfArguments = spiralTraversal.length;
        expect(numberOfArguments).toBe(1);
    });

    test("should return an array of Numbers", () => {
        const actual = spiralTraversal([[1]]);
        expect(actual).toStrictEqual(expect.any(Array));
        for (let i = 0; i < actual.length; i++) {
            expect(actual[i]).toStrictEqual(expect.any(Number));
        }
    });

    test('should spirally traverse a square matrix', () => {
        const input = [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]
        ];
        const actual = spiralTraversal(input);
        const expected = [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];
        expect(actual).toStrictEqual(expected);
    });

    test('should spirally traverse an tall matrix', () => {
          const input = [
            [ 1, 2, 3],
            [ 4, 5, 6],
            [ 7, 8, 9],
            [ 10, 11, 12],
            [ 13, 14, 15],
            [ 16, 17, 18],
            [ 19, 20, 21],
            [ 22, 23, 24]
        ];
        const actual = spiralTraversal(input);
        const expected = [1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20];
        expect(actual).toStrictEqual(expected);
    });

    test('should spirally traverse an wide matrix', () => {
        const input = [
            [ 1, 2, 3, 4, 5, 6, 7],
            [ 6, 7, 8, 9, 10, 11, 12],
            [ 13, 14, 15, 16, 17, 18, 19]
        ];
        const actual = spiralTraversal(input);
        const expected = [1, 2, 3, 4, 5, 6, 7, 12, 19, 18, 17, 16, 15, 14, 13, 6, 7, 8, 9, 10, 11];
        expect(actual).toStrictEqual(expected);
    });

    test('should spirally traverse an n by 1 matrix', () => {
        const input = [
            [ 1, 2, 3, 4, 5, 6, 7]
        ];
        const actual = spiralTraversal(input);
        const expected = [1, 2, 3, 4, 5, 6, 7];
        expect(actual).toStrictEqual(expected);
    });

    test('should spirally traverse a 1 by n matrix', () => {
        const input = [
            [ 1 ],
            [ 2 ],
            [ 3 ],
            [ 4 ]
        ];
        const actual = spiralTraversal(input);
        const expected = [1, 2, 3, 4];
        expect(actual).toStrictEqual(expected);
    });

});
