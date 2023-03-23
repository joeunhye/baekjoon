const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(el => el.split(' '));
let N = input.shift();
let result = []

for(let i = 0; i < N; i++) {
    let k = 0;
    let [x, y] = input[i];
    for(let i = 0; i < input.length; i++) {
        if(Number(x) < Number(input[i][0]) && Number(y) < Number(input[i][1])) {
            k++;
        }
    }
    result.push(k+1)
}
console.log(result.join(' '))