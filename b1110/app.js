const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
solution(input);
// function solution(num) {
// 	// Write your code
// 	let newNum = "";
// 	let count = 0;
// 	while (newNum !== num) {
// 		let numVal = num.padStart(2, 0);
// 		let sum = numVal
// 			.split("")
// 			.map(num => +num)
// 			.reduce((acc, cur) => acc + cur, 0)
// 			.toString()
// 			.padStart(2, 0);
// 		newNum = numVal[1] + sum[1];
// 		count++;
// 	}
// 	while(true) {
// 		count++;
// 	}
// 	console.log(count);
// }

function solution(num) {
	// Write your code
	let sum = 0;
	let count = 0;

	while (true) {
		count++;
		sum = Math.floor(num / 10) + (num % 10);
	}
	console.log(count);
}
//https://gurtn.tistory.com/34
