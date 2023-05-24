const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").join(' ').split(' ');
input = input.map(el => el*1)
let N = input[0];
let K = input[1];

console.log(input)

// https://uminoh.tistory.com/39
// https://ryulurala.tistory.com/269