const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [a, b] = input;

let [N, K] = a.split(' ');
let arr = b.split(' ').map(el => Number(el))
arr.sort((a, b) => a - b)

console.log(arr[Number(K - 1)])