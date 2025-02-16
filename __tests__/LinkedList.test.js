import LinkedList from "../src/LinkedList";

describe("LinkedList", () => {
	let testLinkedList;

	beforeEach(() => {
		testLinkedList = new LinkedList();
	});

	describe("initialisation", () => {
		it("should initialise an empty list", () => {
			expect(testLinkedList._head).toBe(null);
			expect(testLinkedList._length).toBe(0);
		});
	});
	describe("append()", () => {
		it("defines append()", () => {
			expect(typeof testLinkedList.append).toBe("function");
		});
		it("should append a node to an empty list", () => {
			testLinkedList.append("dog");

			expect(testLinkedList._head).not.toBeNull();
			expect(testLinkedList._head.value).toBe("dog");
		});

		it("should append a node to a non-empty list", () => {
			testLinkedList.append("dog");
			testLinkedList.append("cat");

			expect(testLinkedList._head.next).not.toBeNull();
			expect(testLinkedList._head.next.value).toBe("cat");
			expect(testLinkedList._head.next.next).toBeNull();
			expect(testLinkedList._length).toBe(2);
		});
	});
	describe("prepend()", () => {
		it("defines prepend()", () => {
			expect(typeof testLinkedList.prepend).toBe("function");
		});
		it("should prepend a node to an empty list", () => {
			testLinkedList.prepend("dog");

			expect(testLinkedList._head).not.toBeNull();
			expect(testLinkedList._head.value).toBe("dog");
		});

		it("should prepend a node to a non-empty list", () => {
			testLinkedList.prepend("dog");
			testLinkedList.prepend("cat");

			expect(testLinkedList._head.value).toBe("cat");
			expect(testLinkedList._head.next).not.toBeNull();
			expect(testLinkedList._head.next.value).toBe("dog");
			expect(testLinkedList._head.next.next).toBeNull();
			expect(testLinkedList._length).toBe(2);
		});
	});
	describe("head", () => {
		it("defines head getter", () => {
			expect(LinkedList.prototype.hasOwnProperty("head")).toBe(true);
		});
		it("returns null for empty lists", () => {
			expect(testLinkedList.head).toBeNull();
		});
		it("returns the first node for non-empty lists", () => {
			const secondNode = { value: "cat", next: null };
			const firstNode = { value: "dog", next: secondNode };

			testLinkedList.append(firstNode.value);
			testLinkedList.append(secondNode.value);

			expect(testLinkedList.head).toEqual(firstNode);
		});
	});
	describe("size", () => {
		it("defines size getter", () => {
			expect(LinkedList.prototype.hasOwnProperty("size")).toBe(true);
		});
		it("returns 0 for an empty list", () => {
			expect(testLinkedList.size).toBe(0);
		});
		it("returns the number of items in a non-empty-list", () => {
			testLinkedList.append("dog");
			testLinkedList.append("cat");

			expect(testLinkedList.size).toBe(2);
		});
	});
	describe.skip("tail()", () => {
		it("defines tail()", () => {
			expect(typeof testLinkedList.tail).toBe("function");
		});
	});
	describe.skip("at()", () => {
		it("defines at()", () => {
			expect(typeof testLinkedList.at).toBe("function");
		});
	});
	describe.skip("pop()", () => {
		it("defines pop()", () => {
			expect(typeof testLinkedList.pop).toBe("function");
		});
	});
	describe.skip("contains()", () => {
		it("defines contains()", () => {
			expect(typeof testLinkedList.contains).toBe("function");
		});
	});
	describe.skip("find()", () => {
		it("defines find()", () => {
			expect(typeof testLinkedList.find).toBe("function");
		});
	});
	describe.skip("toString()", () => {
		it("defines toString()", () => {
			expect(typeof testLinkedList.toString).toBe("function");
		});
	});
});
