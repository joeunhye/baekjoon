const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(el => Number(el));
// let num = input.shift();
// const max = Math.max(...input);
// let newArr = Array(max).fill(0);
// let count = 0;

// for(let i = 0; i <= max; i++) {
//     for(let j = 0; j < input.length; j++) {
//         if(input[j] === i) count++;
//     }
//     newArr[i] = count;
    
//     if (count !== 0) {
//         for (let k = 0; k < newArr[i]; k++) {
//             console.log(`${i}`);
//         }
//     }
//     count = 0;
// }

let N = input.shift();
console.log((input.sort((a, b) => a - b)).join('\n'));