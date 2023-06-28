const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [testCase, ...input] = fs.readFileSync(filePath).toString().split("\n");

let pibo = [0, 1];
while(pibo[pibo.length - 1] < 1e9) {
    pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1])
}

for(let tc = 0; tc < testCase; tc++) {
    let n = Number(input[tc]);
    let result = [];
    let i = pibo.length - 1;
    while(n > 0) {
        if(n >= pibo[i]) {
            n -= pibo[i]
            result.push(pibo[i])
        }
        i--;
    }
    
    let answer = '';
    for (let i = result.length - 1; i >= 0; i--)  {
        answer += result[i] + ' ';
    }
    
    console.log(answer)
}