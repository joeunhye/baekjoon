const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function isPrime(num) {
	if(num === 1) return false;
	for(let i = 2; i < num; i++) {
		if(num % i === 0) return false;
	}
	return true;
}

function solution(input) {
	let num1 = input[0]*1
	let num2 = input[1]*1
	let result = [];

	for(let i = num1; i <= num2; i++) {
		if(isPrime(i)) {
			result.push(i)
		}
	}

	if(result.length) {
		console.log(result.reduce((acc, cur) => acc + cur, 0));
		console.log(Math.min(...result));
	}else {
		console.log(-1);
	}
}

solution(input)