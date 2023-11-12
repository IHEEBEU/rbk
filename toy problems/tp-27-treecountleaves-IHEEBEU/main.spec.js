const Tree = require("./main");

describe("countLeaves", () => {
  test("Tree should be defined", () => {
    expect(Tree).toBeDefined();
  });

  test("should exist on the Tree prototype", () => {
    expect(Tree.prototype.countLeaves).toBeDefined();
  });

  test("countLeaves should be a function", () => {
    expect(Tree.prototype.countLeaves).toStrictEqual(expect.any(Function));
  });

  test("countLeaves should return a Number", () => {
    const root = new Tree("root");
    expect(root.countLeaves()).toStrictEqual(expect.any(Number));
  });

  test("should return 1 if the tree root has no children", () => {
    // make a one-node tree
    const root = new Tree();
    // an empty root node is technically a leaf
    expect(root.countLeaves()).toBe(1);
  });

  test("should return 2 if the root has two children", () => {
    const root = new Tree();
    // add two children
    root.addChild(new Tree());
    root.addChild(new Tree());
    // both children are now leaves
    expect(root.countLeaves()).toBe(2);
  });

  test("should still return 2 if one branch has one leaf", () => {
    const root = new Tree();
    // add a leaf
    root.addChild(new Tree());
    // add a branch
    const branch = new Tree();
    root.addChild(branch);
    // add a leaf to the branch
    branch.addChild(new Tree());

    // still only two leaves
    expect(root.countLeaves()).toBe(2);
  });

  test("should return 4 if both branches have two leaves", () => {
    const root = new Tree();
    // add a branch
    const branch1 = new Tree();
    root.addChild(branch1);
    // add two leaves to the branch
    branch1.addChild(new Tree());
    branch1.addChild(new Tree());
    // add another branch
    const branch2 = new Tree();
    root.addChild(branch2);
    // add two leaves to the branch
    branch2.addChild(new Tree());
    branch2.addChild(new Tree());

    // if you're counting, that's four leaves
    expect(root.countLeaves()).toBe(4);
  });

  test("should count leaves on a big tree (should return 8)", () => {
    // keep a list of nodes by depth to compare
    const root = new Tree();
    // branches
    const branch1 = new Tree();
    const branch2 = new Tree();
    root.addChild(branch1);
    root.addChild(branch2);
    // branches
    const branch3 = new Tree();
    const branch4 = new Tree();
    branch1.addChild(branch2);
    branch1.addChild(branch3);
    // branches
    const branch5 = new Tree();
    const branch6 = new Tree();
    branch3.addChild(branch5);
    branch3.addChild(branch6);

    // leaves
    branch2.addChild(new Tree());
    branch2.addChild(new Tree());
    branch4.addChild(new Tree());
    branch4.addChild(new Tree());
    branch5.addChild(new Tree());
    branch5.addChild(new Tree());
    branch6.addChild(new Tree());
    branch6.addChild(new Tree());

    // so that's eight leaves
    expect(root.countLeaves()).toBe(8);
  });
});
