const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
[n, ...arr] = [...input] 


function isPrime(num) {
	if(num === 1) return false;
	for(let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
		if(num % i === 0) return false;
	}
	return true;
}

for(let i = 0; i < n; i++) {
	let num = arr[i];
	let result = [];
	for(let j = 2; j <= num; j++) {
		if(isPrime(j)) {
			result.push(j)
		}	
	}
	let ans = [];
	// 주어진 수의 절반보다 작은 소수만 탐색하면 됨
	for(let k = 0; result[k] < num / 2 + 1; k++) {
		// (주어진 수 - 소수)가 소수인지
		if(isPrime(num - result[k])) {
			ans.push([result[k], num - result[k]])
		}
	}
	let item = ans.pop();
	console.log(item.join(' '))
}

//https://lasbe.tistory.com/133