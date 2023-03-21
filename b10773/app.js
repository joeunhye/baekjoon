const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(el => Number(el));
input.shift();
let result = [];

for(let x of input) {
	if(x === 0) {
		result.pop()
	}else {
		result.push(x)
	}
}
console.log(result.reduce((a, b) => a + b, 0))
