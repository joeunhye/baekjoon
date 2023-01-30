const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map(item => +item);
solution(input[0], input[1]);
function solution(A, B) {
	// Write your code
	const stringB = String(B);
	const one = stringB[2];
	const two = stringB[1];
	const three = stringB[0];

	console.log(A * Number(one));
	console.log(A * Number(two));
	console.log(A * Number(three));
	console.log(A * B);
}
