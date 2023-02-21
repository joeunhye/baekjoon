const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let num = Number(input[0])

function isPrime(n) {
	let num = 2;
	while(n !== 1) {
		if(n % num === 0) {
			console.log(num);
			n /= num;
		}else {
			num++;
		}
	}
}

isPrime(num)