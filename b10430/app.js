const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
	.readFileSync(filePath)
	.toString()
	.split("\n")[0]
	.split(" ")
	.map(el => Number(el));
solution(input);
function solution(arr) {
	let A = arr[0];
	let B = arr[1];
	let C = arr[2];
	// Write your code
	//첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를
	console.log((A + B) % C);
	console.log(((A % C) + (B % C)) % C);
	console.log((A * B) % C);
	console.log(((A % C) * (B % C)) % C);
}
