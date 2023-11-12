const waterVolume = require('./main');

describe('waterVolume', () => {
    test('should exist', () => {
        expect(waterVolume).toBeDefined();
    });

    test('should return a number', () => {
        const sum = waterVolume([1, 2, 3]);
        expect(sum).toStrictEqual(expect.any(Number));
    });

    test('should return 3 for [3,0,3]', () => {
        const input = [3,0,3];
        const expected = 3;
        const actual = waterVolume(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 4 for [4,0,3,1]', () => {
        const input = [4,0,3,1];
        const expected = 4;
        const actual = waterVolume(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 0 for []', () => {
        const input = [];
        const expected = 0;
        const actual = waterVolume(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 3 for [3,3]', () => {
        const input = [3,3];
        const expected = 3;
        const actual = waterVolume(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 4 for [1, 3, 4]', () => {
        const input = [1, 3, 4];
        const expected = 4;
        const actual = waterVolume(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 14 for [2, 1, 3, 4, 6, 5]', () => {
        const input = [2, 1, 3, 4, 6, 5];
        const expected = 14;
        const actual = waterVolume(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 6 for [3,0,0,3]', () => {
        const input = [3,0,0,3];
        const expected = 6;
        const actual = waterVolume(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 6 for [0,3,0,0,3]', () => {
        const input = [0,3,0,0,3];
        const expected = 6;
        const actual = waterVolume(input);
        expect(actual).toStrictEqual(expected);
    });

    test('should return 6 for [0,3,3,0,0,6,7,1,0,0,10,0,9,0]', () => {
        const input = [3,3,0,0,6,7,1,0,0,10,0,9,0];
        const expected = 27;
        const actual = waterVolume(input);
        expect(actual).toStrictEqual(expected);
    });
});
