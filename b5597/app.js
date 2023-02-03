const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
var input = fs
  .readFileSync(filePath)
  .toString().trim()
  .split("\n");
var arr = input.map(num => num*1)
let answer = []


for(let i = 1; i <= 30; i++) {
  if(!arr.includes(i)) {
    answer.push(i)
  }
}
console.log(answer.join("\n"));