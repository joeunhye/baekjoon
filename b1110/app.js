const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
solution(input);

function solution(num) {
	// Write your code
	let sum;
	let count = 0;
	let input = num;
	while (true) {
		count++;
		sum = Math.floor(num / 10) + (num % 10);
		num = (num % 10) * 10 + sum % 10;
		if(num == input) break;
	}
	console.log(count);
}

//https://gurtn.tistory.com/34
