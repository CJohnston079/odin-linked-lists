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
		});
		it("increments _length when appending a node", () => {
			testLinkedList.append("dog");
			testLinkedList.append("cat");

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
		});
		it("increments _length when appending a node", () => {
			testLinkedList.prepend("dog");
			testLinkedList.prepend("cat");

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
	describe("tail()", () => {
		it("defines tail()", () => {
			expect(typeof testLinkedList.tail).toBe("function");
		});
		it("returns null for empty lists", () => {
			expect(testLinkedList.tail()).toBeNull();
		});
		it("returns the last node for non-empty lists", () => {
			const secondNode = { value: "cat", next: null };
			const firstNode = { value: "dog", next: secondNode };

			testLinkedList.append(firstNode.value);
			testLinkedList.append(secondNode.value);

			expect(testLinkedList.tail()).toEqual(secondNode);
		});
	});
	describe("at()", () => {
		it("defines at()", () => {
			expect(typeof testLinkedList.at).toBe("function");
		});
		it("returns null for empty lists", () => {
			expect(testLinkedList.at()).toBeNull();
		});
		it("returns the node at the given index for non-empty lists", () => {
			const thirdNode = { value: "parrot", next: null };
			const secondNode = { value: "cat", next: thirdNode };
			const firstNode = { value: "dog", next: secondNode };

			testLinkedList.append(firstNode.value);
			testLinkedList.append(secondNode.value);
			testLinkedList.append(thirdNode.value);

			expect(testLinkedList.at(0)).toEqual(firstNode);
			expect(testLinkedList.at(1)).toEqual(secondNode);
			expect(testLinkedList.at(2)).toEqual(thirdNode);
		});
		it("throws 'out of bounds' error if index is greater than list length", () => {
			testLinkedList.append("dog");
			expect(() => {
				testLinkedList.at(1);
			}).toThrow(/.*out of bounds*/i);
		});
	});
	describe("pop()", () => {
		it("defines pop()", () => {
			expect(typeof testLinkedList.pop).toBe("function");
		});
		it("removes the last node from the list", () => {
			const thirdNode = { value: "parrot", next: null };
			const secondNode = { value: "cat", next: thirdNode };
			const firstNode = { value: "dog", next: secondNode };

			testLinkedList.append(firstNode.value);
			testLinkedList.append(secondNode.value);
			testLinkedList.append(thirdNode.value);

			testLinkedList.pop();

			expect(testLinkedList.tail()).toEqual({ value: secondNode.value, next: null });
		});
		it("decrements length when popping a node", () => {
			const thirdNode = { value: "parrot", next: null };
			const secondNode = { value: "cat", next: thirdNode };
			const firstNode = { value: "dog", next: secondNode };

			testLinkedList.append(firstNode.value);
			testLinkedList.append(secondNode.value);
			testLinkedList.append(thirdNode.value);

			expect(testLinkedList._length).toBe(3);

			testLinkedList.pop();

			expect(testLinkedList._length).toBe(2);
		});
		it("throws an error when attempting to pop from an empty list", () => {
			expect(() => {
				testLinkedList.pop();
			}).toThrow(/.*empty list.*/i);
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
