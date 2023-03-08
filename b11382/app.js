const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").join(' ').split(' ')
console.log(input.map(el => Number(el)).reduce((acc, cur) => acc + cur, 0));