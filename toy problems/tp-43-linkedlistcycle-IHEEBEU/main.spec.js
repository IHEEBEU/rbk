const { Node, hasCycle } = require("./main");

describe("hasCycle", () => {
  test("should be exist", () => {
    expect(hasCycle).toBeDefined();
  });

  test("should take at least one argument", () => {
    const numberOfArguments = hasCycle.length;
    expect(numberOfArguments > 0).toBe(true);
  });

  test("should return a boolean", () => {
    const result = hasCycle(Node("A"));
    expect(result).toStrictEqual(expect.any(Boolean));
  });

  test("should return false for a linked list with only 1 node that ponits to null", () => {
    // aka, A -> null
    const nodeA = Node("A");
    expect(hasCycle(nodeA)).toBe(false);
  });

  test("should return true for a linked list with only 1 node that points to itself", () => {
    // aka, A -> A -> A -> etc...
    const nodeA = Node("A");
    nodeA.next = nodeA;
    expect(hasCycle(nodeA)).toBe(true);
  });

  test("should return false for a non-cyclical linked list of size 2", () => {
    // aka, A -> B -> null
    const nodeA = Node("A");
    const nodeB = (nodeA.next = Node("B"));
    expect(hasCycle(nodeA)).toBe(false);
  });

  test("should return true for a cyclical linked list of size 2", () => {
    // aka, A -> B -> A -> B -> etc...
    const nodeA = Node("A");
    const nodeB = (nodeA.next = Node("B"));
    nodeB.next = nodeA;
    expect(hasCycle(nodeA)).toBe(true);
  });

  test("should return false for a non-cyclical linked list of size 3", () => {
    // aka, A -> B -> C -> null
    const nodeA = Node("A");
    const nodeB = (nodeA.next = Node("B"));
    const nodeC = (nodeB.next = Node("C"));
    expect(hasCycle(nodeA)).toBe(false);
  });

  test("should return true for a cyclical linked list of size 3", () => {
    // aka, A -> B -> C -> A -> B -> etc...
    const nodeA = Node("A");
    const nodeB = (nodeA.next = Node("B"));
    const nodeC = (nodeB.next = Node("C"));
    nodeC.next = nodeA;
    expect(hasCycle(nodeA)).toBe(true);
  });

  test("should return false for a medium sized non-cyclical linked list", () => {
    // aka, start -> tail0 -> tail1 -> ... -> tail8 -> null
    const startNode = Node("start");
    let currentNode = startNode;
    for (let i = 0; i < 9; i++) {
      currentNode.next = Node("tail" + i);
      currentNode = currentNode.next;
    }
    expect(hasCycle(startNode)).toBe(false);
  });

  test("should return true for a medium sized cyclical linked list", () => {
    // aka, start -> tail0 -> tail1 -> ... -> tail8 -> start
    const startNode = Node("start");
    let currentNode = startNode;
    for (let i = 0; i < 9; i++) {
      currentNode.next = Node("tail" + i);
      currentNode = currentNode.next;
    }
    // have the tail of the linked list point to the start
    currentNode.next = startNode;
    expect(hasCycle(startNode)).toBe(true);
  });

  test("should return false for a large sized non-cyclical linked list", () => {
    // aka, start -> tail0 -> tail1 -> ... -> tail99998 -> tail99999 -> null
    const startNode = Node("start");
    let currentNode = startNode;
    // one. million nodes!! wahahahaha
    for (let i = 0; i < 999999; i++) {
      currentNode.next = Node("tail" + i);
      currentNode = currentNode.next;
    }

    expect(hasCycle(startNode)).toBe(false);
  });

  test("should return true for a large sized cyclical linked list", () => {
    // aka, start -> tail0 -> tail1 -> ... -> tail99998 -> tail99999 -> start
    const startNode = Node("start");
    let currentNode = startNode;
    // one. million nodes!! wahahahaha
    for (let i = 0; i < 999999; i++) {
      currentNode.next = Node("tail" + i);
      currentNode = currentNode.next;
    }
    // have the tail of the linked list point to the start
    currentNode.next = startNode;

    expect(hasCycle(startNode)).toBe(true);
  });
});
