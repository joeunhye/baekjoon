const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString().split("\n")[0])

let result = '';

for(let i = 1; i <= input; i++) {
    result += i + '\n'
}

console.log(result);