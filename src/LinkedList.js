import Node from "./Node";

class LinkedList {
	constructor(head = null) {
		this._head = head;
		this._length = 0;
	}

	get head() {
		return this._head;
	}

	get size() {
		return this._length;
	}

	append(value) {
		const node = new Node(value);

		if (!this._head) {
			this._head = node;
		} else {
			let current = this._head;

			while (current.next) {
				current = current.next;
			}

			current.setNext(node);
		}

		this._length += 1;
	}

	prepend(value) {
		const node = new Node(value);

		if (this._head) {
			node.next = this._head;
		}

		this._head = node;
		this._length += 1;
	}
}

export default LinkedList;
