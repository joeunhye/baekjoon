const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").join('').split('').map(el => Number(el));


console.log(input.sort((a, b) => b - a).join(''));