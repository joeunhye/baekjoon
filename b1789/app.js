const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let S = Number(fs.readFileSync(filePath).toString().split("\n")[0]);

let sum = 0;
let current = 0;

while(sum <= S) {
    current += 1;
    sum += current;
}

console.log(current-1)