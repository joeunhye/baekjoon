const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(input[0], input[1]);
function solution(N, numbers) {
	// Write your code
	let result = 0;
	for(let i = 0; i < N; i++) {
		result += +numbers[i];
	}
	console.log(result);
}
