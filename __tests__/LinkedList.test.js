import LinkedList from "../src/LinkedList";

describe("LinkedList", () => {
	let testLinkedList;

	beforeEach(() => {
		testLinkedList = new LinkedList();
	});

	it("should initialise an empty list", () => {
		const emptyLinkdList = new LinkedList();
		expect(emptyLinkdList.head).toBe(null);
		expect(emptyLinkdList.length).toBe(0);
	});
	it("should initialise with 'length' as 0", () => {});
	describe("append()", () => {
		it("defines append()", () => {
			expect(typeof testLinkedList.append).toBe("function");
		});
		it("should append a node to an empty list", () => {
			testLinkedList.append("dog");

			expect(testLinkedList.head).not.toBeNull();
			expect(testLinkedList.head.value).toBe("dog");
		});

		it("should append a node to a non-empty list", () => {
			testLinkedList.append("dog");
			testLinkedList.append("cat");

			expect(testLinkedList.head.next).not.toBeNull();
			expect(testLinkedList.head.next.value).toBe("cat");
			expect(testLinkedList.head.next.next).toBeNull();
			expect(testLinkedList.length).toBe(2);
		});
	});
	describe("prepend()", () => {
		it("defines prepend()", () => {
			expect(typeof testLinkedList.prepend).toBe("function");
		});
		it("should prepend a node to an empty list", () => {
			testLinkedList.prepend("dog");

			expect(testLinkedList.head).not.toBeNull();
			expect(testLinkedList.head.value).toBe("dog");
		});

		it("should prepend a node to a non-empty list", () => {
			testLinkedList.prepend("dog");
			testLinkedList.prepend("cat");

			expect(testLinkedList.head.value).toBe("cat");
			expect(testLinkedList.head.next).not.toBeNull();
			expect(testLinkedList.head.next.value).toBe("dog");
			expect(testLinkedList.head.next.next).toBeNull();
			expect(testLinkedList.length).toBe(2);
		});
	});
	describe.skip("size()", () => {
		it("defines size()", () => {
			expect(typeof testLinkedList.size).toBe("function");
		});
	});
	describe.skip("head()", () => {
		it("defines head()", () => {
			expect(typeof testLinkedList.head).toBe("function");
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
