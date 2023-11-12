const {
  Tv,
  makeCounter,
  fullName,
  longestName,
  countVowels,
} = require("./main");

test("Tv class test cases", () => {
  const myTv = new Tv();
  expect(myTv.channelNumber).toBe(0);
  expect(myTv.watch()).toBe("you are now watching channel #0");
  expect(myTv.changeChannel(5)).toBe("switched to channel #5");
  expect(myTv.channelNumber).toBe(5);
  expect(myTv.watch()).toBe("you are now watching channel #5");
});
test("makeCounter test cases", () => {
  const counter = makeCounter(0, 1);
  expect(counter()).toBe(0);
  expect(counter()).toBe(1);
  expect(counter()).toBe(2);
  expect(counter()).toBe(3);

  const countBy2 = makeCounter(4, 2);
  expect(countBy2()).toBe(4);
  expect(countBy2()).toBe(6);
  expect(countBy2()).toBe(8);
  expect(countBy2()).toBe(10);
});

test("fullName function should return the full name of the sloth at the given index", () => {
  const bucketOfSloths = [
    { name: { first: "Furry", middle: "Danger", last: "Assassin" }, age: 2 },
    { name: { first: "Silly", middle: "Trees", last: "Climber" }, age: 3 },
  ];
  expect(fullName(bucketOfSloths, 0)).toBe("Furry Danger Assassin");
});

test("fullName function should return 'Invalid index' if the index is out of range", () => {
  const bucketOfSloths = [
    { name: { first: "Furry", middle: "Danger", last: "Assassin" }, age: 2 },
    { name: { first: "Silly", middle: "Trees", last: "Climber" }, age: 3 },
  ];
  expect(fullName(bucketOfSloths, 5)).toBe("Invalid index");
});

test("longestName function should return the sloth with the longest name", () => {
  const bucketOfSloths = [
    { name: { first: "Furry", middle: "Danger", last: "Assassin" }, age: 2 },
    { name: { first: "Silly", middle: "Trees", last: "Climber" }, age: 3 },
  ];
  expect(longestName(bucketOfSloths)).toEqual({
    name: { first: "Furry", middle: "Danger", last: "Assassin" },
    age: 2,
  });
});

test("longestName function should return 'Invalid input' if the input is not an array", () => {
  const bucketOfSloths = "not an array";
  expect(longestName(bucketOfSloths)).toBe("Invalid input");
});

test("countVowels function should return the number of vowels in the string", () => {
  expect(countVowels("four score and seven years")).toBe(9);
});

test("countVowels function should return 0 if there are no vowels in the string", () => {
  expect(countVowels("rbk")).toBe(0);
});

test("countVowels function should return 'Invalid input' if the input is not a string", () => {
  expect(countVowels(123)).toBe("Invalid input");
});
