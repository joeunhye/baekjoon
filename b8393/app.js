const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(+input[0]);
function solution(n) {
	// Write your code
	let numArr = Array(n)
		.fill(0)
		.map((num, i) => i + 1);
	console.log(numArr.reduce((acc, cur) => acc + cur, 0));
}
