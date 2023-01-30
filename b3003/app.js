const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
	.readFileSync(filePath)
	.toString()
	.split(" ")
	.map(num => Number(num));
let origin = [1, 1, 2, 2, 2, 8];
solution(input);
function solution(arr) {
	// Write your code
	let result = origin.map((el, i) => el - arr[i]);
	console.log(result.join(" "));
}
