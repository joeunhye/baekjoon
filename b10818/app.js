const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let N = input[0]
let arr = input[1].split(' ')

console.log(Math.min(...arr), Math.max(...arr));