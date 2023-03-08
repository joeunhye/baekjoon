const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").join('').split(' ')

// 두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 N의 약수들 중 K번째로 작은 수를 출력한다. 
// 만일 N의 약수의 개수가 K개보다 적어서 K번째 약수가 존재하지 않을 경우에는 0을 출력하시오.

let N = parseInt(input[0]);
let K = parseInt(input[1]);

let arr = [];

// N의 약수를 구하자
for(let i = 1; i <= N; i++) {
	if(N % i === 0) {
		arr.push(i)
	}
} 

console.log(arr[K-1] ? arr[K-1] : 0 );