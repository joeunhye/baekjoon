const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(el => Number(el));
let N = input.shift();

input.sort((a, b) => a - b) 

let avg = Math.round(input.reduce((acc, cur) => acc + cur, 0) / N);
console.log(avg === -0 ? 0 : avg);
console.log(input[Math.floor(N / 2)]);

let hash = new Map();
let max = 1;
for(let x of input) {
    if(hash.has(x)) {
        max = Math.max(max, hash.get(x) + 1)
        hash.set(x, hash.get(x)+1) 
    }
    else hash.set(x, 1)
}
const maxArr = [];
for(let [key, val] of hash) {
    if(max === val) maxArr.push(key) 
}

console.log(maxArr.length === 1 ? maxArr[0] : maxArr[1]);
console.log(input[N-1] - input[0]);