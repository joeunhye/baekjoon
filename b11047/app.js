const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let [inputNum, ...arr] = input;
let [N, K] = inputNum.split(" ");

let cnt = 0;
for (let i = N - 1; i >= 0; i--) {
	cnt += parseInt(K / arr[i]);
	K %= arr[i];
}

console.log(cnt);
