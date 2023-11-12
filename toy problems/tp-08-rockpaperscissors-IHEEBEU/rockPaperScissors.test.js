const rockPaperScissors = require("./rockPaperScissors");

beforeAll(() => {
  test("rockPaperScissors should be defined", () => {
    expect(rockPaperScissors).toBeDefined();
  });

  test("rockPaperScissors should be a function", () => {
    expect(rockPaperScissors).toBeFunction();
  });

  test("should accept one parameters", () => {
    const numberOfArguments = rockPaperScissors.length;
    expect(numberOfArguments).toBe(1);
  });

  test("should return an array of strings", () => {
    const actual = rockPaperScissors();
    expect(actual).toStrictEqual(expect.any(Array));
    expect(actual[0]).toStrictEqual(expect.any(String));
  });
});

describe("function rockPaperScissors", () => {
  test("should contain every throw", () => {
    const expected = [
      "RRR",
      "RRP",
      "RRS",
      "RPR",
      "RPP",
      "RPS",
      "RSR",
      "RSP",
      "RSS",
      "PRR",
      "PRP",
      "PRS",
      "PPR",
      "PPP",
      "PPS",
      "PSR",
      "PSP",
      "PSS",
      "SRR",
      "SRP",
      "SRS",
      "SPR",
      "SPP",
      "SPS",
      "SSR",
      "SSP",
      "SSS",
    ];
    const actual = rockPaperScissors();
    expect(actual).toStrictEqual(expected);
  });
  describe("function rockPaperScissors EXTRA CREDIT", () => {
    test("should return results for input 2", () => {
      const expected = ["RR", "RP", "RS", "PR", "PP", "PS", "SR", "SP", "SS"];
      const actual = rockPaperScissors(2);
      expect(actual).toStrictEqual(expected);
    });

    test("should return results for 1", function () {
      const expected = ["R", "P", "S"];
      const actual = rockPaperScissors(1);
      expect(actual).toStrictEqual(expected);
    });

    test("should return results for 5", function () {
      const expected = expectedOutputForRockPaperScissorsOf5();
      const actual = rockPaperScissors(5);
      expect(actual).toStrictEqual(expected);
    });
  });
});

function expectedOutputForRockPaperScissorsOf5() {
  return [
    "RRRRR",
    "RRRRP",
    "RRRRS",
    "RRRPR",
    "RRRPP",
    "RRRPS",
    "RRRSR",
    "RRRSP",
    "RRRSS",
    "RRPRR",
    "RRPRP",
    "RRPRS",
    "RRPPR",
    "RRPPP",
    "RRPPS",
    "RRPSR",
    "RRPSP",
    "RRPSS",
    "RRSRR",
    "RRSRP",
    "RRSRS",
    "RRSPR",
    "RRSPP",
    "RRSPS",
    "RRSSR",
    "RRSSP",
    "RRSSS",
    "RPRRR",
    "RPRRP",
    "RPRRS",
    "RPRPR",
    "RPRPP",
    "RPRPS",
    "RPRSR",
    "RPRSP",
    "RPRSS",
    "RPPRR",
    "RPPRP",
    "RPPRS",
    "RPPPR",
    "RPPPP",
    "RPPPS",
    "RPPSR",
    "RPPSP",
    "RPPSS",
    "RPSRR",
    "RPSRP",
    "RPSRS",
    "RPSPR",
    "RPSPP",
    "RPSPS",
    "RPSSR",
    "RPSSP",
    "RPSSS",
    "RSRRR",
    "RSRRP",
    "RSRRS",
    "RSRPR",
    "RSRPP",
    "RSRPS",
    "RSRSR",
    "RSRSP",
    "RSRSS",
    "RSPRR",
    "RSPRP",
    "RSPRS",
    "RSPPR",
    "RSPPP",
    "RSPPS",
    "RSPSR",
    "RSPSP",
    "RSPSS",
    "RSSRR",
    "RSSRP",
    "RSSRS",
    "RSSPR",
    "RSSPP",
    "RSSPS",
    "RSSSR",
    "RSSSP",
    "RSSSS",
    "PRRRR",
    "PRRRP",
    "PRRRS",
    "PRRPR",
    "PRRPP",
    "PRRPS",
    "PRRSR",
    "PRRSP",
    "PRRSS",
    "PRPRR",
    "PRPRP",
    "PRPRS",
    "PRPPR",
    "PRPPP",
    "PRPPS",
    "PRPSR",
    "PRPSP",
    "PRPSS",
    "PRSRR",
    "PRSRP",
    "PRSRS",
    "PRSPR",
    "PRSPP",
    "PRSPS",
    "PRSSR",
    "PRSSP",
    "PRSSS",
    "PPRRR",
    "PPRRP",
    "PPRRS",
    "PPRPR",
    "PPRPP",
    "PPRPS",
    "PPRSR",
    "PPRSP",
    "PPRSS",
    "PPPRR",
    "PPPRP",
    "PPPRS",
    "PPPPR",
    "PPPPP",
    "PPPPS",
    "PPPSR",
    "PPPSP",
    "PPPSS",
    "PPSRR",
    "PPSRP",
    "PPSRS",
    "PPSPR",
    "PPSPP",
    "PPSPS",
    "PPSSR",
    "PPSSP",
    "PPSSS",
    "PSRRR",
    "PSRRP",
    "PSRRS",
    "PSRPR",
    "PSRPP",
    "PSRPS",
    "PSRSR",
    "PSRSP",
    "PSRSS",
    "PSPRR",
    "PSPRP",
    "PSPRS",
    "PSPPR",
    "PSPPP",
    "PSPPS",
    "PSPSR",
    "PSPSP",
    "PSPSS",
    "PSSRR",
    "PSSRP",
    "PSSRS",
    "PSSPR",
    "PSSPP",
    "PSSPS",
    "PSSSR",
    "PSSSP",
    "PSSSS",
    "SRRRR",
    "SRRRP",
    "SRRRS",
    "SRRPR",
    "SRRPP",
    "SRRPS",
    "SRRSR",
    "SRRSP",
    "SRRSS",
    "SRPRR",
    "SRPRP",
    "SRPRS",
    "SRPPR",
    "SRPPP",
    "SRPPS",
    "SRPSR",
    "SRPSP",
    "SRPSS",
    "SRSRR",
    "SRSRP",
    "SRSRS",
    "SRSPR",
    "SRSPP",
    "SRSPS",
    "SRSSR",
    "SRSSP",
    "SRSSS",
    "SPRRR",
    "SPRRP",
    "SPRRS",
    "SPRPR",
    "SPRPP",
    "SPRPS",
    "SPRSR",
    "SPRSP",
    "SPRSS",
    "SPPRR",
    "SPPRP",
    "SPPRS",
    "SPPPR",
    "SPPPP",
    "SPPPS",
    "SPPSR",
    "SPPSP",
    "SPPSS",
    "SPSRR",
    "SPSRP",
    "SPSRS",
    "SPSPR",
    "SPSPP",
    "SPSPS",
    "SPSSR",
    "SPSSP",
    "SPSSS",
    "SSRRR",
    "SSRRP",
    "SSRRS",
    "SSRPR",
    "SSRPP",
    "SSRPS",
    "SSRSR",
    "SSRSP",
    "SSRSS",
    "SSPRR",
    "SSPRP",
    "SSPRS",
    "SSPPR",
    "SSPPP",
    "SSPPS",
    "SSPSR",
    "SSPSP",
    "SSPSS",
    "SSSRR",
    "SSSRP",
    "SSSRS",
    "SSSPR",
    "SSSPP",
    "SSSPS",
    "SSSSR",
    "SSSSP",
    "SSSSS",
  ];
}