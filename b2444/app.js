const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0];
let result = [];

for(let i = 1; i < input; i++) {
    let side = " ".repeat(input-i);
    let star = "*".repeat(2*i-1);
    result.push(side + star);
}
for(let i = input; i >= 1; i--) {
    let side = " ".repeat(input-i);
    let star = '*'.repeat(2*i-1);
    result.push(side + star);
}
console.log(result.join('\n'));

//https://velog.io/@scroll0908/%EB%B0%B1%EC%A4%80-Node.js-2444-%EB%B3%84-%EC%B0%8D%EA%B8%B0-7