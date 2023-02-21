const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map(item => +item);

function isPrime(num) {
	if(num === 1) return false;
	for(let i = 2; i<=parseInt(Math.sqrt(num)); i++) {
		if(num % i === 0) return false;
	}
	return true;
}

function solution(input) {
	let num1 = input[0];
	let num2 = input[1];

	for(let i = num1; i <= num2; i++) {
		if(isPrime(i)) {
			console.log(i);
		}
	}
}

solution(input)