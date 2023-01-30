const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
	.readFileSync(filePath)
	.toString()
	.split(" ")
	.map(num => Number(num));

let answer = {};
for (let val of input) {
	answer[val] = (answer[val] || 0) + 1;
}
if (Object.keys(answer).length === 1) {
	console.log(10000 + input[0] * 1000);
} else if (Object.keys(answer).length === 2) {
	console.log(1000 + Object.entries(answer).find(val => val[1] === 2)[0] * 100);
} else if (Object.keys(answer).length === 3) {
	console.log(Math.max(...input) * 100);
}
