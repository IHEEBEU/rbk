const treeMaker = require("./main");

describe("treeMaker", () => {
  test("should exist", () => {
    expect(treeMaker).toBeDefined();
  });

  test("should be implemented in the prototypal style", () => {
    //Are you using Object.create()..?
    const tree = treeMaker();

    expect(treeMaker.methods.addChild).toStrictEqual(expect.any(Function));
    expect(treeMaker.methods.contains).toStrictEqual(expect.any(Function));

    expect(tree.addChild).toStrictEqual(expect.any(Function));
    expect(tree.contains).toStrictEqual(expect.any(Function));
  });

  test("should add children to the tree", () => {
    const tree = treeMaker();
    tree.addChild(5);
    expect(tree.children[0].value).toBe(5);
  });

  test("should return true for a value that the tree contains", () => {
    const tree = treeMaker();
    tree.addChild(5);
    expect(tree.contains(5)).toBe(true);
  });

  test("should return false for a value that was not added", () => {
    const tree = treeMaker();
    tree.addChild(5);
    expect(tree.contains(6)).toBe(false);
  });

  test("should be able to add children to a tree's child", () => {
    //Each child should itself be an instance of a tree.
    const tree = treeMaker();
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).toBe(6);
  });

  test("should correctly detect nested children", () => {
    const tree = treeMaker();
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);

    expect(tree.contains(7)).toBe(true);
    expect(tree.contains(8)).toBe(true);
  });
});
