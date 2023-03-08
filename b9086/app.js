const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = Number(input.shift());
let arr = [];
for(let i = 0; i < N; i++) {
    arr.push(input[i].trim())
}
let result = [];

for(let i = 0; i < arr.length; i++) {
    result.push(`${arr[i][0]}${arr[i][arr[i].length - 1]}`)
}

console.log(result.join('\n'));