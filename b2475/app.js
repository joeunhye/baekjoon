const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0].split(' ').map(el => el*1);

let sum = 0;
for(let  i = 0 ; i < input.length; i++) {
	sum += Math.pow(input[i], 2)
}
console.log(sum % 10);