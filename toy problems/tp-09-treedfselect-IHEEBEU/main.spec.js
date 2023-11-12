const Tree = require("./main");

beforeAll(() => {
  test("Tree should be defined", () => {
    expect(Tree).toBeDefined();
  });
});

describe("DFSelect", () => {
  test("should exist on the Tree prototype", () => {
    expect(Tree.prototype.DFSelect).toBeDefined();
  });

  test("should be a function", () => {
    expect(Tree.prototype.DFSelect).toStrictEqual(expect.any(Function));
  });

  test("should return an array", () => {
    const root = new Tree("root");
    const input = () => {
      return true;
    };
    expect(root.DFSelect(input)).toStrictEqual(expect.any(Array));
  });

  test("should return all nodes in the tree if the filter returns true (depth 1)", () => {
    const root = new Tree(1);
    root.addChild(2);
    root.addChild(3);
    const expected = [1, 2, 3];
    const input = () => {
      return true;
    };
    expect(root.DFSelect(input)).toStrictEqual(expected);
  });

  test("should return all nodes in the tree if the filter returns true (depth 2)", () => {
    // depth: 0
    const root = new Tree(1);

    // depth: 1
    root.addChild(2);
    root.addChild(3);

    // depth: 2
    root.children[0].addChild(4);
    root.children[0].addChild(5);
    root.children[1].addChild(6);
    root.children[1].addChild(7);

    const expected = [1, 2, 4, 5, 3, 6, 7];

    const input = () => {
      return true;
    };
    expect(root.DFSelect(input)).toStrictEqual(expected);
  });

  test("should return all nodes in the tree if filter always returns true", () => {
    // this filter function should always return all of the nodes
    const all = function () {
      return true;
    };
    // keep a list of all nodes to compare
    // depth: 0
    const root = new Tree(1);
    // depth: 1
    root.addChild(2);
    root.addChild(3);
    // depth: 2
    root.children[0].addChild(4);
    root.children[0].addChild(5);
    root.children[1].addChild(6);
    root.children[1].addChild(7);
    // depth: 3 (sparse)
    root.children[0].children[0].addChild(8);
    root.children[1].children[1].addChild(9);
    const expected = [1, 2, 4, 8, 5, 3, 6, 7, 9];
    // we should expect back all the nodes we added
    const result = root.DFSelect(all);
    expect(result).toStrictEqual(expected);
  });

  test("should return all nodes passing the filter", () => {
    // this filter function should return all true nodes
    const trueFilter = function (value, depth) {
      return value === true;
    };
    // this filter function should return all false nodes
    const falseFilter = function (value, depth) {
      return value === false;
    };
    // keep a list of true and false nodes to compare
    const trueNodes = [];
    const falseNodes = [];
    let result = null;
    // depth: 0
    const root = new Tree(false);
    falseNodes.push(false);
    // depth: 1
    trueNodes.push(true);
    root.addChild(true);
    falseNodes.push(false);
    root.addChild(false);
    // depth: 2
    trueNodes.push(true);
    root.children[0].addChild(true);
    trueNodes.push(true);
    root.children[1].addChild(true);
    falseNodes.push(false);
    root.children[0].addChild(false);
    falseNodes.push(false);
    root.children[1].addChild(false);
    // depth: 3 (sparse)
    trueNodes.push(true);
    root.children[0].children[0].addChild(true);
    trueNodes.push(true);
    root.children[1].children[0].addChild(true);
    falseNodes.push(false);
    root.children[0].children[1].addChild(false);
    falseNodes.push(false);
    root.children[1].children[1].addChild(false);

    result = root.DFSelect(trueFilter);
    // we expect back all the `trueNodes` using the `trueFilter`
    expect(result).toStrictEqual(trueNodes);

    result = root.DFSelect(falseFilter);
    // we expect back all the `falseNodes` using the `falseFilter`
    expect(result).toStrictEqual(falseNodes);
  });

  test("should allow filtering by depth", () => {
    // this filter constructor produces a filter for the specified depth
    const depthFilter = (filterDepth) => {
      return function (node, nodeDepth) {
        return filterDepth === nodeDepth;
      };
    };
    // keep a list of nodes by depth to compare
    const nodeDepths = [];
    const root = new Tree(0);
    // depth: 0
    nodeDepths.push([0]);
    // depth: 1
    root.addChild(1);
    root.addChild(2);
    nodeDepths.push([1, 2]);
    // depth: 2
    root.children[0].addChild(3);
    root.children[0].addChild(4);
    root.children[1].addChild(5);
    root.children[1].addChild(6);
    nodeDepths.push([3, 4, 5, 6]);
    // depth: 3 (sparse)
    root.children[0].children[0].addChild(7);
    root.children[0].children[0].addChild(8);
    root.children[1].children[0].addChild(9);
    root.children[1].children[0].addChild(10);
    nodeDepths.push([7, 8, 9, 10]);

    expect(root.DFSelect(depthFilter(0))).toStrictEqual(nodeDepths[0]);
    expect(root.DFSelect(depthFilter(1))).toStrictEqual(nodeDepths[1]);
    expect(root.DFSelect(depthFilter(2))).toStrictEqual(nodeDepths[2]);
    expect(root.DFSelect(depthFilter(3))).toStrictEqual(nodeDepths[3]);
  });
});
