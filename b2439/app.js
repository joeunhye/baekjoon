const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = +input[0];

let emptyArr = Array(input).fill(" ");
for (let i = input - 1; i >= 0; i--) {
	emptyArr[i] = "*";
	console.log(emptyArr.join(""));
}
