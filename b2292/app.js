const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map(item => +item);
solution(input[0]);
function solution(N) {
	let sum = 1; // 벌집의 크기
	let i = 1; // 벌집의 반경

	while(sum < N) {
		sum = sum + i * 6;
		i++;
	}
	console.log(i);
}
