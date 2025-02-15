import Node from "./Node";

class LinkedList {
	constructor(head = null) {
		this.head = head;
		this.length = 0;
	}

	append(value) {
		const node = new Node(value);

		if (!this.head) {
			this.head = node;
		} else {
			let current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.setNext(node);
		}

		this.length += 1;
	}

	prepend(value) {
		const node = new Node(value);

		if (this.head) {
			node.next = this.head;
		}

		this.head = node;
		this.length += 1;
	}
}

export default LinkedList;
