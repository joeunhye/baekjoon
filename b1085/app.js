const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0].split(' '); //  x, y, w, h
let x = Number(input[0]);
let y = Number(input[1]);
let w = Number(input[2]);
let h = Number(input[3]);

// 직사각형의 경계선까지 가는 거리의 최솟값 
console.log(Math.min(x, y, (w - x), (h - y)));