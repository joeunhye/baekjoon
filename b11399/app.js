const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let [N, ...arr] = input;
arr = arr[0]
	.split(" ")
	.map(Number)
	.sort((a, b) => a - b);

// 풀이 1
let min = 0;
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < i + 1; j++) {
// 		min += arr[j];
// 	}
// }

// 풀이 2
let answer = 0;
let summary = 0;
for (let i = 0; i < arr.length; i++) {
	summary += arr[i];
	answer += summary;
}
console.log(answer);
