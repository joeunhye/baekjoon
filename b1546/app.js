const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let num = input[0].split(' ').map(x => Number(x));
let arr = input[1].split(' ').map(x => Number(x));

let bigScore = Math.max(...arr);
let newScore = arr.map(num => num/bigScore * 100)
let aver = newScore.reduce((acc, cur) => acc+ cur, 0) / arr.length;

console.log(aver);