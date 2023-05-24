const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let uniqueArray = [...new Set(arr)].sort((a, b) => a - b);

let myMap = new Map();
for(let i = 0; i < uniqueArray.length; i++) {
	myMap.set(uniqueArray[i], i)
}
let answer = '';

for(let x of arr) answer += myMap.get(x) + ' '
console.log(answer)