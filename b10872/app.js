const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = parseInt(fs.readFileSync(filePath).toString().split("\n")[0]);

let num = 1;
for(let i = input; i >= 2; i--) {
    num *= i
}
console.log(num);