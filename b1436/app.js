const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = Number(fs.readFileSync(filePath).toString().split("\n")[0]);

let num = 666;
let cnt = 1;

while(cnt !== input) {
    num++;
    if(num.toString().includes('666')) {
        cnt++;
    }
}
console.log(num)
