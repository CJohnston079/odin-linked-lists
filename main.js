import LinkedList from "./src/LinkedList.js";

// instantiation
console.log("Instantiating new list...", "\n");

const list = new LinkedList();

// append()
console.log("Appending 'cat', 'parrot', 'hamster', 'snake', 'turtle':");

list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString(), "\n");

// prepend()
console.log("Prepending 'dog':");

list.prepend("dog");

console.log(list.toString(), "\n");

// head and tail()
console.log("list.head():", list.head);
console.log("list.tail():", list.tail());
console.log("\n");

// at()
for (let i = 0; i < list.size; i += 1) {
	console.log(`Node at list index ${i}:`, list.at(i));
}

// pop()
console.log("\nPopping last node:");
console.log("Before list.pop():", list.toString());

list.pop();

console.log("After list.pop(): ", list.toString(), "\n");

// contains() and find()
console.log("Does the list contain 'turtle'? ->", list.contains("turtle"));
console.log("Does the list contain 'parrot'? ->", list.contains("parrot"));
console.log("Index of 'parrot':", list.find("parrot"), "\n");

// insertAt()
console.log("Re-inserting 'turtle' before 'parrot':");
console.log("Before insertion:", list.toString());

list.insertAt("turtle", 2);

console.log("After insertion: ", list.toString(), "\n");

// removeAt()
console.log("Removing the item at index 2:");
console.log("Before removal:", list.toString());

list.removeAt(2);

console.log("After removal: ", list.toString(), "\n");

// wrap up
console.log("Tests complete!");
