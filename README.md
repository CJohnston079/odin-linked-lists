# The Odin Project | Linked Lists

This is a practice implementation of the linked list data structure in JavaScript.

## About

### Project aims

The project brief can be found here: [Project: Linked Lists | The Odin Project](https://www.theodinproject.com/lessons/javascript-linked-lists). Below is a brief summary of the project aims:

1. Implement a `Node` class/factory to manage individual data points.
2. Implement a `LinkedList` class/factory to manage a sequence of nodes.
3. Provide utility methods in `LinkedList`, including common operations such as appending and prepending nodes, accessing nodes by index, searching the list by index or value, and printing a string representation of the list for easy visualisation.

## Setup

After cloning the repository, install the project dependencies by running:

```Bash
npm install
```

### Testing

Tests are written in Jest, with Babel configured to allow the use of ES6 modules. To run the testing suite, use:

```Bash
npm test
```

Alternatively, you can watch for changes to the tests or modules using:

```Bash
npm run watch
```

## `Node` class

Returns a new `Node`. `Node`s are used as the individual elements of a `LinkedList`.

### `Node.value`

- `value` is the data which is stored in `Node`.
- `value` is initialised as `null` by default.

### `Node.next`

- `next` is the pointer to the next `Node` in the `LinkedList`.
- `next` is initialised as `null` by default.

### `Node.setNext()`

- `setnext()` updates the value of `next` for a `Node`.
- It throws an error if it is given anything other than a `Node` instance.

## `LinkedList` class

Returns a new `LinkedList`, which is a chain of `Node`s.

### `LinkedList._head`

- The first `Node` of the `LinkedList`.
- `_head` is instantiated as `null`.
- The `value` of `_head` can be read using the getter `head()`.

### `LinkedList._length`

- The number of `Nodes` in the `LinkedList`.
- `_length` is instantiated as 0.
- It can be read using the getter `size()`.

### `LinkedList.append(value)`

- Adds a new `Node` to the end (tail) of the list.

### `LinkedList.prepend(value)`

- Adds a new `Node` to the beginning (head) of the list.

### `LinkedList.tail()`

- Returns the `value` of the tail `Node` in the list.

### `LinkedList.at(index)`

- Returns the value of the `Node` at `index`.
- Returns `null` if the list is empty.
- Throws an error if `index` is greater than `LinkedList._length`.

### `LinkedList.pop()`

- Removes the last `Node` from the list.
- Throws an error if the list is empty.

### `LinkedList.contains(value)`

- Returns a `true` if `value` is present in one of more of the `Node`s in the list Returns `false` otherwise.

### `LinkedList.find(value)`

- Returns the index of the first value `value` if `value` is present in one of more of the `Node`s in the list.
- Returns `null` if the list is empty or if `value` is not found.

### `LinkedList.toString()`

- Returns a string representation of `Node.value`s in the list in the format:

```Bash
( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
```

### `LinkedList.insertAt(value, index)`

- Inserts a new `Node` with the provided `value` at the given `index`.
- Throws an error if `index` is greater than `LinkedList._length`.

### `LinkedList.removeAt(index)`

- Removes the `Node` at the given `index`.
- Throws an error if the list is empty, or if `index` is greater than `LinkedList._length`.
