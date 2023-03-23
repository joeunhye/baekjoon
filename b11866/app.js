const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").join(' ').split(' ');
let N = Number(input[0]);
let K = Number(input[1]);
let queue = Array(N).fill(0).map((_, i) => i+1);
let result = [];

while(queue.length) {
	for(let i = 0; i < K - 1; i++) {
		queue.push(queue.shift())
	}
	result.push(queue.shift())
}


console.log(`<${result.join(', ')}>`)