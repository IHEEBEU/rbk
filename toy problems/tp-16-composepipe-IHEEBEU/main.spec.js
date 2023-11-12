const {compose, pipe} = require('./main');


describe('function compose', () => {

    test('compose should be defined', () => {
        expect(compose).toBeDefined();
    });

    test('pipe should be defined', () => {
        expect(pipe).toBeDefined();
    });

    test('should accept zero parameters', () => {
        const numberOfArguments = compose.length;
        expect(numberOfArguments).toBe(0);
    });

    test('should return an Function', () => {
        expect(compose()).toStrictEqual(expect.any(Function));
    });

    test('should be able to compose 2 functions', () => {
        const greet = function(name) { return 'hi: ' + name; };
        const exclaim = function(statement) { return statement.toUpperCase() + '!'; };
        const welcome = compose(greet, exclaim);

        expect(welcome).toStrictEqual(expect.any(Function));
        expect(welcome('phillip')).toStrictEqual('hi: PHILLIP!');
        expect(welcome('kia')).toStrictEqual('hi: KIA!');
    });

    test('should be able to compose multiple functions', () => {
        const first = function(array) { return array[0]; };
        const shift = function(array) { return array.slice(1); };
        const fifth = compose(first, shift, shift, shift, shift);
        expect(fifth).toStrictEqual(expect.any(Function));
        expect(fifth([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual(5);
    });


    test('should handle multiple composes', () => {
        const first = function(array) { return array[0]; };
        const shift = function(array) { return array.slice(1); };
        const fifth = compose(first, shift, shift, compose(shift, shift));
        expect(fifth).toStrictEqual(expect.any(Function));
        expect(fifth([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual(5);
    });
});

describe('function pipe', () => {
    test('should accept zero parameters', () => {
        const numberOfArguments = pipe.length;
        expect(numberOfArguments).toBe(0);
    });

    test('should return an Function', () => {
        expect(pipe()).toStrictEqual(expect.any(Function));
    });

    test('should pass the input through a function', () => {
        const add2 = function(value) { return value + 2; };
        expect(pipe(add2)(21)).toBe(23);
    });

    test('should pass the input through 2 functions', () => {
        const add2 = function(value) { return value + 2; };
        const multiplyBy3 = function(number) { return number * 3; };
        expect(pipe(add2, multiplyBy3)(5)).toBe(21);
    });

    test('should pass the input through multiple functions', () => {
        const add2 = function(value) { return value + 2; };
        const multiplyBy3 = function(number) { return number * 3; };
        expect(pipe(add2, multiplyBy3, add2, multiplyBy3)(7)).toBe(87);
    });

    test('should be able to handle multiple pipes', () => {
        const add2 = function(value) { return value + 2; };
        const multiplyBy3 = function(number) { return number * 3; };
        expect(pipe(pipe(add2, multiplyBy3), multiplyBy3)(7)).toBe(81);
    });
});