/**
 * Extend the Number prototype with a new method called `toEnglish`.
 * It should return the number as a string using English words.
 * Examples:
 *   (7).toEnglish(); // > "seven"
 *   (575).toEnglish(); // > "five hundred seventy-five"
 *   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
 *
 * Extra credit: Make your function support decimals.
 * Example:
 *   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
 *
 */
const numbersToWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};
const numbersToPlace = {
  10: "ten",
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
  1000000000000: "trillion",
  1000000000000000: "quadrillion",
  1000000000000000000: "quintillion",
};

/**
 * @function toEnglish
 * @return {String}
 */
Number.prototype.toEnglish = function () {
  
  
  const number = this.valueOf();
  const strn = number.toString();
  let main = "";
  
  if (numbersToWords[strn]) {

    return numbersToWords[strn];
  } else if (strn.length === 2) {
    
    const tensPlace = numbersToWords[strn[0] + "0"];
    const onesPlace = numbersToWords[strn[1]]
    main = tensPlace + "-" + onesPlace
  } else if (strn.length === 3) {
    
    const hundredsPlace = numbersToWords[strn[0]];
    const tensAndOnes = parseInt(strn.slice(1)).toEnglish();
    main = hundredsPlace + " hundred" + (tensAndOnes ? " and " + tensAndOnes : "");
  }
  
  return main
}



