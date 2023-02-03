// console.log(numbers.split(' ').join('').split('').map(num => num * 1).filter(el => el === v).length);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
var input = fs
  .readFileSync(filePath)
  .toString().trim()
  .split("\n");

var N = input[0]
var arr = input[1]
var V = input[2]
var count = 0;
// console.log(arr.split(' ').join('').trim().split('').map(num => num * 1).filter(el => el == V).length);
for(let i = 0; i < N; i++) {
	if(arr[i] === V) count++;
}

console.log(count);