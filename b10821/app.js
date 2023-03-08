const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[n, m], ...input] = fs.readFileSync(filePath).toString().split("\n").map(el => el.split(' ').map(Number))

