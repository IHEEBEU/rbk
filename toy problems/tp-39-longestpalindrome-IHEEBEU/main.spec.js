const longestPalindrome = require('./main');

describe('longestPalindrome',  () => {
    test('should exist',  () => {
        expect(longestPalindrome).toBeDefined();
    });

    test('should return a string',  () => {
        expect(longestPalindrome('abc')).toStrictEqual(expect.any(String));
    });

    test('should return the longest palindrome for single word strings', () => {
        // aibohphobia: An irrational fear of palindromes
        expect(longestPalindrome('aibohphobia')).toStrictEqual('aibohphobia');
    });

    test('should return the longest palindrome in a string of text', () => {
        expect(longestPalindrome('My dad is a racecar athlete')).toStrictEqual('a racecar a');
    });

    test('should return the longest palindrome among several in a string', () => {
        expect(longestPalindrome('aaaa level eye redivider hannah')).toStrictEqual(' redivider ');
    });

    test('should handle the edge-case of an empty string as input', () => {
        expect(longestPalindrome('')).toStrictEqual('');
    });

    test('should return the longest palindrome even if it has an even length', () => {
        expect(longestPalindrome('There was a tattarrattat on the racecar. It made a funny noise, gfedcbabcdefg')).toStrictEqual(' tattarrattat ');
        });

    test('should return the longest single word palindrome even if it has an even length', () => {
        expect(longestPalindrome('ddccbbaabbccdd')).toStrictEqual('ddccbbaabbccdd');
    });
});