const mergeSort = require('./main');

describe('Function mergeSort', () => {
    test('should exist', () => {
        expect(mergeSort).toBeDefined();
    });

    test('should be a function', () => {
        expect(mergeSort).toStrictEqual(expect.any(Function));
    });

    test('should return an array', () => {
        expect(mergeSort([1])).toStrictEqual(expect.any(Array));
    });

    test('should return an array with a single number', () => {
        const input = [1];
        const actual = mergeSort(input);
        const expected = [1];
        expect(actual).toStrictEqual(expected);
    });

    test('should sort a short array of integers', () => {
        const input = [8, 7, 3, 6, 9, 2, 4, 5, 1];
        const actual = mergeSort(input);
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(actual).toStrictEqual(expected);
    });

    test('should not use Array.sort', () => {
        const spy = jest.spyOn(Array.prototype, 'sort');
        mergeSort([1]);
        expect(spy).toHaveBeenCalledTimes(0);
        spy.mockReset();

        // var _sort = Array.prototype.sort;
        // Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
        //     value: function () {
        //         should.fail(null, null, 'Array.sort called! That\'s cheating.', null);
        //     }
        // });
        // var result = mergeSort([8, 7, 3, 6, 9, 2, 4, 5, 1]);
        // Object.defineProperty(Array.prototype, 'sort', {enumerable: false,
        //     value: _sort
        // });
    });

    test('should sort an enormous array of random integers', () => {
        const input = [];
        let sorted;
        const n = 1000000;
        for (let i = 0; i < n; i++) {
            let number = Math.floor(Math.random() * n);
            input.push(number);
        }
        sorted = input.sort(function (a, b) { return a - b; }); // sort numerically, not lexicographically
        const result = mergeSort(input);

        // using .eql can cause an n-line error message to print, so we do it by hand
        for (let i = 0; i < n; i++) {
            expect(result[i]).toStrictEqual(sorted[i]);
        }
    });
});