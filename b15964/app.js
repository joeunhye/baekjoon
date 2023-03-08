const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [A, B] = fs.readFileSync(filePath).toString().split("\n")[0].split(' ');

console.log((parseInt(A) + parseInt(B))*(parseInt(A) - parseInt(B)));