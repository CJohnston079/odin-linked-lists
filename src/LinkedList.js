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

	tail() {
		if (!this._head) {
			return null;
		}

		let current = this._head;

		while (current.next) {
			current = current.next;
		}

		return current;
	}

	at(index) {
		if (!this._head) {
			return null;
		}

		if (index >= this._length) {
			throw new Error(
				`Index is out of bounds. Index (${index}) should be less than or equal to length (${this._length}).`
			);
		}

		let current = this._head;

		for (let i = 0; i < this._length; i += 1) {
			if (i === index) {
				return current;
			}

			current = current.next;
		}
	}

	pop() {
		if (!this._head) {
			throw new Error(`Cannot pop from an empty list.`);
		}

		let current = this._head;

		while (current.next.next) {
			current = current.next;
		}

		current.next = null;
		this._length -= 1;

		return;
	}
}

export default LinkedList;
