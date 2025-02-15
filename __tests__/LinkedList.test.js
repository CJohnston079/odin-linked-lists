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
	});
	describe("prepend()", () => {
		it("defines prepend()", () => {
			expect(typeof testLinkedList.prepend).toBe("function");
		});
	});
	describe("size()", () => {
		it("defines size()", () => {
			expect(typeof testLinkedList.size).toBe("function");
		});
	});
	describe("head()", () => {
		it("defines head()", () => {
			expect(typeof testLinkedList.head).toBe("function");
		});
	});
	describe("tail()", () => {
		it("defines tail()", () => {
			expect(typeof testLinkedList.tail).toBe("function");
		});
	});
	describe("at()", () => {
		it("defines at()", () => {
			expect(typeof testLinkedList.at).toBe("function");
		});
	});
	describe("pop()", () => {
		it("defines pop()", () => {
			expect(typeof testLinkedList.pop).toBe("function");
		});
	});
	describe("contains()", () => {
		it("defines contains()", () => {
			expect(typeof testLinkedList.contains).toBe("function");
		});
	});
	describe("find()", () => {
		it("defines find()", () => {
			expect(typeof testLinkedList.find).toBe("function");
		});
	});
	describe("toString()", () => {
		it("defines toString()", () => {
			expect(typeof testLinkedList.toString).toBe("function");
		});
	});
});
