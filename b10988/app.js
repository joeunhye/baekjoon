const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0];

const len = input.length/2;
const left = input.slice(0, parseInt(len)) 
const right = input.slice(Number.isInteger(len) ? parseInt(len) : parseInt(len)+1);
left === right.split('').reverse().join('') ? console.log(1) : console.log(0)