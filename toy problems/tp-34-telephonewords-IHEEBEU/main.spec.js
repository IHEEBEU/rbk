const telephoneWords = require("./main");

describe("telephoneWords", () => {
  test("should exist", () => {
    expect(telephoneWords).toBeDefined();
  });

  test("should return an array", () => {
    const result = telephoneWords("1234");
    expect(result).toStrictEqual(expect.any(Array));
  });

  test("should return one permutation for 0001", () => {
    const result = telephoneWords("0001");
    expect(result).toHaveLength(1);
    expect(result.includes("0001")).toBe(true);
  });

  test("should return three permutations for 0002", () => {
    const answer = ["000A", "000B", "000C"];
    const result = telephoneWords("0002");
    expect(result).toHaveLength(answer.length);
    for (let i = 0; i < answer.length; i++) {
      expect(result.includes(answer[i])).toBe(true);
    }
  });

  test("should return nine permutations for 1123", () => {
    const answer = [
      "11AD",
      "11BD",
      "11CD",
      "11AE",
      "11BE",
      "11CE",
      "11AF",
      "11BF",
      "11CF",
    ];
    const result = telephoneWords("1123");
    expect(result).toHaveLength(answer.length);
    for (let i = 0; i < answer.length; i++) {
      expect(result.includes(answer[i])).toBe(true);
    }
  });
  test("should return 27 permutations for 1234", () => {
    const answer = [
      "1ADG",
      "1ADH",
      "1ADI",
      "1AEG",
      "1AEH",
      "1AEI",
      "1AFG",
      "1AFH",
      "1AFI",
      "1BDG",
      "1BDH",
      "1BDI",
      "1BEG",
      "1BEH",
      "1BEI",
      "1BFG",
      "1BFH",
      "1BFI",
      "1CDG",
      "1CDH",
      "1CDI",
      "1CEG",
      "1CEH",
      "1CEI",
      "1CFG",
      "1CFH",
      "1CFI",
    ];
    const result = telephoneWords("1234");
    expect(result).toHaveLength(answer.length);
    for (let i = 0; i < answer.length; i++) {
      expect(result.includes(answer[i])).toBe(true);
    }
  });
  test("should return 144 permutations for 5987", () => {
    // don't forget, some keys have 4 letters!
    // independently verified by http://www.ps.missouri.edu/rickspage/ConvertPhoneNumber.html
    const answer = [
      "JWTP",
      "JWTQ",
      "JWTR",
      "JWTS",
      "JWUP",
      "JWUQ",
      "JWUR",
      "JWUS",
      "JWVP",
      "JWVQ",
      "JWVR",
      "JWVS",
      "JXTP",
      "JXTQ",
      "JXTR",
      "JXTS",
      "JXUP",
      "JXUQ",
      "JXUR",
      "JXUS",
      "JXVP",
      "JXVQ",
      "JXVR",
      "JXVS",
      "JYTP",
      "JYTQ",
      "JYTR",
      "JYTS",
      "JYUP",
      "JYUQ",
      "JYUR",
      "JYUS",
      "JYVP",
      "JYVQ",
      "JYVR",
      "JYVS",
      "JZTP",
      "JZTQ",
      "JZTR",
      "JZTS",
      "JZUP",
      "JZUQ",
      "JZUR",
      "JZUS",
      "JZVP",
      "JZVQ",
      "JZVR",
      "JZVS",
      "KWTP",
      "KWTQ",
      "KWTR",
      "KWTS",
      "KWUP",
      "KWUQ",
      "KWUR",
      "KWUS",
      "KWVP",
      "KWVQ",
      "KWVR",
      "KWVS",
      "KXTP",
      "KXTQ",
      "KXTR",
      "KXTS",
      "KXUP",
      "KXUQ",
      "KXUR",
      "KXUS",
      "KXVP",
      "KXVQ",
      "KXVR",
      "KXVS",
      "KYTP",
      "KYTQ",
      "KYTR",
      "KYTS",
      "KYUP",
      "KYUQ",
      "KYUR",
      "KYUS",
      "KYVP",
      "KYVQ",
      "KYVR",
      "KYVS",
      "KZTP",
      "KZTQ",
      "KZTR",
      "KZTS",
      "KZUP",
      "KZUQ",
      "KZUR",
      "KZUS",
      "KZVP",
      "KZVQ",
      "KZVR",
      "KZVS",
      "LWTP",
      "LWTQ",
      "LWTR",
      "LWTS",
      "LWUP",
      "LWUQ",
      "LWUR",
      "LWUS",
      "LWVP",
      "LWVQ",
      "LWVR",
      "LWVS",
      "LXTP",
      "LXTQ",
      "LXTR",
      "LXTS",
      "LXUP",
      "LXUQ",
      "LXUR",
      "LXUS",
      "LXVP",
      "LXVQ",
      "LXVR",
      "LXVS",
      "LYTP",
      "LYTQ",
      "LYTR",
      "LYTS",
      "LYUP",
      "LYUQ",
      "LYUR",
      "LYUS",
      "LYVP",
      "LYVQ",
      "LYVR",
      "LYVS",
      "LZTP",
      "LZTQ",
      "LZTR",
      "LZTS",
      "LZUP",
      "LZUQ",
      "LZUR",
      "LZUS",
      "LZVP",
      "LZVQ",
      "LZVR",
      "LZVS",
    ];
    const result = telephoneWords("5987");
    expect(result).toHaveLength(answer.length);
    for (let i = 0; i < answer.length; i++) {
      expect(result.includes(answer[i])).toBe(true);
    }
  });
});
