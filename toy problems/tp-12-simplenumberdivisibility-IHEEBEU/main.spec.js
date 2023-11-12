const simpleNumberDivisibility = require('./main');

beforeAll(() => {
    test('simpleNumberDivisibility should be defined', () => {
        expect(simpleNumberDivisibility).toBeDefined();
    });
});

describe('function simpleNumberDivisibility',() => {
    test('should accept one parameters', () => {
        const numberOfArguments = simpleNumberDivisibility.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a Number', () => {
        expect(simpleNumberDivisibility(1)).toStrictEqual(expect.any(Number));
    });

    test('should return 1 for input 7560', () => {
        const input = 7560;
        const expected = 1;
        const actual = simpleNumberDivisibility(input);
        expect(actual).toBe(expected);
    });

    test('should return 0 for input 100', () => {
        const input = 100;
        const expected = 0;
        const actual = simpleNumberDivisibility(input);
        expect(actual).toBe(expected);
    });

    test('should return -1 for input 5', () => {
        const input = 5;
        const expected = -1;
        const actual = simpleNumberDivisibility(input);
        expect(actual).toBe(expected);
    });

    test('should return -1 for input 111', () => {
        const input = 111;
        const expected = -1;
        const actual = simpleNumberDivisibility(input);
        expect(actual).toBe(expected);
    });

    test('should return 3 for input 521', () => {
        const input = 521;
        const expected = 3;
        const actual = simpleNumberDivisibility(input);
        expect(actual).toBe(expected);
    });

    test('should return 4 for input 123451', () => {
        const input = 123451;
        const expected = 4;
        const actual = simpleNumberDivisibility(input);
        expect(actual).toBe(expected);
    });

    test('should return 3 for input -987654 (should work for negative numbers)', () => {
        const input = 123451;
        const expected = 4;
        const actual = simpleNumberDivisibility(input);
        expect(actual).toBe(expected);
    });

    test('should return -1 for input Zero', () => {
        const input = 0;
        const expected = -1;
        const actual = simpleNumberDivisibility(input);
        expect(actual).toBe(expected);
    });
});

