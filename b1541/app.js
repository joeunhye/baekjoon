const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];

let groups = input.split("-");
let answer = 0;
for (let i = 0; i < groups.length; i++) {
	let cur = groups[i]
		.split("+")
		.map(Number)
		.reduce((a, b) => a + b);
	if (i === 0) answer += cur;
	else answer -= cur;
}
console.log(answer);
