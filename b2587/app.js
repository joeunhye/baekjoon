const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(el => el*1);
input.sort((a, b) => a - b)
let sum = input.reduce((acc, cur) => acc + cur, 0)

console.log(parseInt(sum / input.length));
console.log(input[parseInt(input.length / 2)]);
