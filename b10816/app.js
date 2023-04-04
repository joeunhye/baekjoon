const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const numArr = input[1].split(' ').map(el => Number(el));
const haveNumArr = input[3].split(' ').map(el => Number(el));

let answer = [];

let nH = {};
for(let x of numArr) {
    nH[x] = (nH[x] || 0) + 1
}
for(let y of haveNumArr) {
    answer.push(nH[y] ? nH[y] : 0)
}
console.log(answer.join(' '))