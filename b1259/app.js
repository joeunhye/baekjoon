const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")
input.pop();

// 각 줄마다 주어진 수가 팰린드롬수면 'yes', 아니면 'no'를 출력한다.

// 예시 출력
// yes
// no

for(let i = 0; i < input.length; i++) {
    let reverseStr = input[i].split('').reverse().join('') 
    console.log(+reverseStr === +input[i] ? "yes" : "no");
}