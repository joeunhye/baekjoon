const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let num = Number(input[0]);

for(let i = 1; i <= num; i++) {
    let sum = 0;
    let count = 0;
    for(let j = 0; j < input[i].length; j++) {
        if(input[i][j] === 'O') {
            count += 1;
        }else {
            count = 0
        }
        sum+=count;
    }
    console.log(sum);
}
