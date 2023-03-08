const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0].split(' ').map(el => el*1);

// 검증수는 고유번호의 처음 5자리에 들어가는 5개의 숫자를 각각 제곱한 수의 합을 10으로 나눈 나머지.
// 예를 들어 고유번호의 처음 5자리의 숫자들이 04256이면, 
// 각 숫자를 제곱한 수들의 합 0+16+4+25+36 = 81 을 10으로 나눈 나머지인 1이 검증수이다.

// let sum = input.reduce((acc, cur) => Math.pow(acc, 2) + Math.pow(cur, 2) , 0)
let sum = 0;
for(let  i = 0 ; i < input.length; i++) {
	sum += Math.pow(input[i], 2)
}
console.log(sum % 10);