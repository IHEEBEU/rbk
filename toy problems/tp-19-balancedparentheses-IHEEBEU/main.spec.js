const isBalanced = require('./main');

describe('function isBalanced', () => {
    
    test('isBalanced should be defined', () => {
        expect(isBalanced).toBeDefined();
    });

    test('should accept one parameters', () => {
        const numberOfArguments = isBalanced.length;
        expect(numberOfArguments).toBe(1);
    });

    test('should return a Boolean', () => {
        expect(isBalanced('')).toStrictEqual(expect.any(Boolean));
    });

    test('should return true, for input "(x + y) - (4)"', () => {
        const input = "(x + y) - (4)";
        const actual = isBalanced(input);
        const expected = true;
        expect(actual).toStrictEqual(expected);
    });

    test('should return true, for input "(((10 ) ()) ((?)(:)))"', () => {
        const input = "(((10 ) ()) ((?)(:)))";
        const actual = isBalanced(input);
        const expected = true;
        expect(actual).toStrictEqual(expected);
    });

    test('should return false, for input "(50)("', () => {
        const input = "(50)(";
        const actual = isBalanced(input);
        const expected = false;
        expect(actual).toStrictEqual(expected);
    });

    test('should return true, for input ""', () => {
        const input = "";
        const actual = isBalanced(input);
        const expected = true;
        expect(actual).toStrictEqual(expected);
    });

    test('should return false, for input "))(("', () => {
        const input = "))((";
        const actual = isBalanced(input);
        const expected = false;
        expect(actual).toStrictEqual(expected);
    });

    test('should return false, for input "))()(("', () => {
        const input = "))()((";
        const actual = isBalanced(input);
        const expected = false;
        expect(actual).toStrictEqual(expected);
    });

    test('should return false, for input "(()))(())(()(()())"', () => {
        const input = "(()))(())(()(()())";
        const actual = isBalanced(input);
        const expected = false;
        expect(actual).toStrictEqual(expected);
    });
});