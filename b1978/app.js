const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let nums = input[1].split(' ').map(num => num*1)
let answer = [];

function isPrime(n) {
	if(n===1) return false;
	for(let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
		if(n % i === 0) {
			return false;
		}
	}
	return true;
}

for(let i = 0; i < nums.length; i++) {
	if(isPrime(nums[i])) {
		answer.push(nums[i])
	}
}
console.log(answer.length);