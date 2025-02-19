import LinkedList from "../src/LinkedList";

describe("LinkedList", () => {
	let emptyLinkedList;
	let testLinkedList;
	let tailNode = { value: "parrot", next: null };
	let midNode = { value: "cat", next: tailNode };
	let headNode = { value: "dog", next: midNode };

	beforeEach(() => {
		tailNode = { value: "parrot", next: null };
		midNode = { value: "cat", next: tailNode };
		headNode = { value: "dog", next: midNode };

		emptyLinkedList = new LinkedList();
		testLinkedList = new LinkedList(headNode);
		testLinkedList._length = 3;
	});

	describe("initialisation", () => {
		it("should initialise an empty list", () => {
			expect(emptyLinkedList._head).toBe(null);
			expect(emptyLinkedList._length).toBe(0);
		});
	});
	describe("append()", () => {
		it("defines append()", () => {
			expect(typeof emptyLinkedList.append).toBe("function");
		});
		it("should append a node to an empty list", () => {
			emptyLinkedList.append("dog");

			expect(emptyLinkedList._head).not.toBeNull();
			expect(emptyLinkedList._head.value).toBe("dog");
		});
		it("should append a node to a non-empty list", () => {
			emptyLinkedList.append("dog");
			emptyLinkedList.append("cat");

			expect(emptyLinkedList._head.next).not.toBeNull();
			expect(emptyLinkedList._head.next.value).toBe("cat");
			expect(emptyLinkedList._head.next.next).toBeNull();
		});
		it("increments _length when appending a node", () => {
			const startingLength = emptyLinkedList._length;
			emptyLinkedList.append("dog");
			expect(emptyLinkedList._length).toBe(startingLength + 1);
		});
	});
	describe("prepend()", () => {
		it("defines prepend()", () => {
			expect(typeof emptyLinkedList.prepend).toBe("function");
		});
		it("should prepend a node to an empty list", () => {
			emptyLinkedList.prepend("dog");

			expect(emptyLinkedList._head).not.toBeNull();
			expect(emptyLinkedList._head.value).toBe("dog");
		});
		it("should prepend a node to a non-empty list", () => {
			emptyLinkedList.prepend("dog");
			emptyLinkedList.prepend("cat");

			expect(emptyLinkedList._head.value).toBe("cat");
			expect(emptyLinkedList._head.next).not.toBeNull();
			expect(emptyLinkedList._head.next.value).toBe("dog");
			expect(emptyLinkedList._head.next.next).toBeNull();
		});
		it("increments _length when appending a node", () => {
			const startingLength = emptyLinkedList._length;
			emptyLinkedList.prepend("dog");
			expect(emptyLinkedList._length).toBe(startingLength + 1);
		});
	});
	describe("head", () => {
		it("defines head getter", () => {
			expect(LinkedList.prototype.hasOwnProperty("head")).toBe(true);
		});
		it("returns null for empty lists", () => {
			expect(emptyLinkedList.head).toBeNull();
		});
		it("returns the first node for non-empty lists", () => {
			expect(testLinkedList.head).toBe(headNode.value);
		});
	});
	describe("size", () => {
		it("defines size getter", () => {
			expect(LinkedList.prototype.hasOwnProperty("size")).toBe(true);
		});
		it("returns 0 for an empty list", () => {
			expect(emptyLinkedList.size).toBe(0);
		});
		it("returns the number of items in a non-empty-list", () => {
			expect(testLinkedList.size).toBe(3);
		});
	});
	describe("tail()", () => {
		it("defines tail()", () => {
			expect(typeof emptyLinkedList.tail).toBe("function");
		});
		it("returns null for empty lists", () => {
			expect(emptyLinkedList.tail()).toBeNull();
		});
		it("returns the last node for non-empty lists", () => {
			expect(testLinkedList.tail()).toBe(tailNode.value);
		});
	});
	describe("at()", () => {
		it("defines at()", () => {
			expect(typeof emptyLinkedList.at).toBe("function");
		});
		it("returns null for empty lists", () => {
			expect(emptyLinkedList.at()).toBeNull();
		});
		it("returns the node at the given index for non-empty lists", () => {
			expect(testLinkedList.at(0)).toBe(headNode.value);
			expect(testLinkedList.at(1)).toBe(midNode.value);
			expect(testLinkedList.at(2)).toBe(tailNode.value);
		});
		it("throws 'out of bounds' error if index is greater than list length", () => {
			expect(() => {
				testLinkedList.at(4);
			}).toThrow(/.*out of bounds*/i);
		});
	});
	describe("pop()", () => {
		it("defines pop()", () => {
			expect(typeof emptyLinkedList.pop).toBe("function");
		});
		it("removes the last node from the list", () => {
			testLinkedList.pop();
			expect(testLinkedList.tail()).toBe(midNode.value);
		});
		it("decrements length when popping a node", () => {
			const startingLength = testLinkedList._length;
			testLinkedList.pop();
			expect(testLinkedList._length).toBe(startingLength - 1);
		});
		it("throws an error when attempting to pop from an empty list", () => {
			expect(() => {
				emptyLinkedList.pop();
			}).toThrow(/.*empty list.*/i);
		});
	});
	describe("contains()", () => {
		it("defines contains()", () => {
			expect(typeof emptyLinkedList.contains).toBe("function");
		});
		it("returns false for empty lists", () => {
			expect(emptyLinkedList.contains("dog")).toBe(false);
		});
		it("returns false if value is not in the list", () => {
			expect(testLinkedList.contains("hamster")).toBe(false);
		});
		it("returns true if value is in the list", () => {
			expect(testLinkedList.contains("dog")).toBe(true);
			expect(testLinkedList.contains("cat")).toBe(true);
			expect(testLinkedList.contains("parrot")).toBe(true);
		});
	});
	describe("find()", () => {
		it("defines find()", () => {
			expect(typeof emptyLinkedList.find).toBe("function");
		});
		it("returns null for empty lists", () => {
			expect(emptyLinkedList.find("dog")).toBe(null);
		});
		it("returns null if value is not found", () => {
			expect(testLinkedList.find("hamster")).toBe(null);
		});
		it("returns the index of found values", () => {
			expect(testLinkedList.find("dog")).toBe(0);
			expect(testLinkedList.find("cat")).toBe(1);
			expect(testLinkedList.find("parrot")).toBe(2);
		});
	});
	describe("toString()", () => {
		it("defines toString()", () => {
			expect(LinkedList.prototype.hasOwnProperty("toString")).toBe(true);
		});
		it("returns an empty string for empty lists", () => {
			expect(emptyLinkedList.toString()).toBe("");
		});
		it("returns nodes in the format '( value ) -> ( value ) -> null' for non-empty lists", () => {
			const expected = "( dog ) -> ( cat ) -> ( parrot ) -> null";
			expect(testLinkedList.toString()).toBe(expected);
		});
	});
	describe("insertAt", () => {
		it("defines insertAt()", () => {
			expect(typeof emptyLinkedList.insertAt).toBe("function");
		});
		it("inserts a node with the given value at the given index", () => {
			testLinkedList.insertAt("hamster", 1);
			expect(testLinkedList.find("hamster")).toBe(1);
			expect(testLinkedList._head.next.next.value).toBe("cat");
		});
		it("inserts a node with the given value at the last index", () => {
			testLinkedList.insertAt("hamster", 3);
			expect(testLinkedList.find("hamster")).toBe(3);
			expect(testLinkedList._head.next.next.next.next).toBeNull();
		});
		it("increments _length when inserting a node", () => {
			const startLength = testLinkedList._length;
			testLinkedList.insertAt("hamster", 1);
			expect(testLinkedList._length).toBe(startLength + 1);
		});
		it("throws 'out of bounds' error if index is greater than list length", () => {
			expect(() => {
				testLinkedList.insertAt("hamster", 4);
			}).toThrow(/.*out of bounds*/i);
		});
	});
	describe("removeAt()", () => {
		it("defines removeAt()", () => {
			expect(typeof emptyLinkedList.removeAt).toBe("function");
		});

		it("removes a node from the list at the given index", () => {
			testLinkedList.removeAt(1);

			expect(testLinkedList.contains("cat")).toBe(false);

			expect(testLinkedList.at(1)).toBe("parrot");
		});

		it("removes the first node of a list", () => {
			testLinkedList.removeAt(0);

			expect(testLinkedList._head.value).toBe("cat");
		});

		it("removes the last node of a list", () => {
			const lastNodeIndex = testLinkedList._length - 1;

			testLinkedList.removeAt(lastNodeIndex);

			expect(testLinkedList.tail()).toBe(midNode.value);
		});

		it("decrements length when removing node", () => {
			const startingLength = testLinkedList._length;

			testLinkedList.removeAt(1);

			expect(testLinkedList._length).toBe(startingLength - 1);
		});

		it("throws an error when attempting to pop from an empty list", () => {
			expect(() => {
				emptyLinkedList.removeAt(2);
			}).toThrow(/.*empty list.*/i);
		});

		it("throws 'out of bounds' error if index is greater than list length", () => {
			expect(() => {
				testLinkedList.removeAt(4);
			}).toThrow(/.*out of bounds*/i);
		});
	});
});
