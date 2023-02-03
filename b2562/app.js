const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
var input = fs
  .readFileSync(filePath)
  .toString().trim()
  .split("\n");
var arr = input.map(num => num*1)

console.log(Math.max(...arr));
console.log(arr.indexOf(Math.max(...arr))+1);