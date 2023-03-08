const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [num, ...input] = fs.readFileSync(filePath).toString().split("\n");

let result = '';
for(let i = 0; i < num; i++) {
    let [num1, num2] = input[i].split(' ');
    result += parseInt(num1) + parseInt(num2) + '\n'
}
console.log(result);