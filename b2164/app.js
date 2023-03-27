const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString().split("\n")[0]);

let cardArr = Array(input).fill().map((_, i) => i + 1)
// while(cardArr.length !== 1) {
// 	cardArr.shift();
// 	let cardItem = cardArr.shift();
// 	cardArr.push(cardItem);
// }
// console.log(cardArr[0])

class Queue {
	constructor() {
		this.items = {},
		this.headIndex = 0;
		this.tailIndex = 0;
	}
	enqueue(item) {
		this.items[this.tailIndex] = item;
		this.tailIndex++;
	}
	dequeue() {
		const item = this.items[this.headIndex];
		delete this.items[this.headIndex];
		this.headIndex++;
		return item;
	}
	peek() {
		return this.items[this.headIndex];
	}
	getLength() {
		return this.tailIndex - this.headIndex;
	}
}

let queue = new Queue();
for(let i = 1; i <= input; i++) {
	queue.enqueue(i)
}

while(queue.getLength() !== 1) {
	queue.dequeue();
	let cardItem = queue.dequeue();
	queue.enqueue(cardItem)
}
console.log(queue.peek())
