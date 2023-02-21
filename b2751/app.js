const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(el => Number(el));
let n = input.shift();

let swape;
for(let i = 0; i < input.length; i++) {
    swape = false;
    for(let j = i + 1; j < input.length; j++) {
        if(input[i] > input[j]) {
            let temp = input[i];
            input[i] = input[j]
            input[j] = temp;
            swape = true;
        }
    }
    if(!swape) break;
}
console.log(input.join('\n'));

// console.log(input.sort((a, b) => a - b).join('\n'));