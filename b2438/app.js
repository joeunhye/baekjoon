const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = +input[0];
solution(input);
function solution(A) {
	// Write your code
	let start = "";
	for (let i = 1; i <= A; i++) {
		start += "*";
		console.log(start);
	}
}
