const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let num = input[0].split(' ').map(x => Number(x));
let arr = input[1].split(' ').map(x => Number(x));

let result = arr.filter(item => item < num[1])
console.log(result.join(' '));