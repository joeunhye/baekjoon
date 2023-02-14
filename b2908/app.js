const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let splitedInput = input[0].split(' ');

solution(splitedInput[0], splitedInput[1]);
function solution(A, B) {
	A = A.split('').reverse().join('');
	B = B.split('').reverse().join('');
    console.log(Math.max(A, B));
}
