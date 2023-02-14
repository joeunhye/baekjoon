const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
console.log(input);
solution(input[0]);
function solution(A) {
	// Write your code
	console.log(A.charCodeAt(0));
}