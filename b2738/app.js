const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [[row, col], ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map((line) => line.split(' ').map(Number));

const A = input.slice(0, row);
const B = input.slice(row);

for(let r = 0; r < row; r++) {
	for(let c = 0; c < col; c++) {
		A[r][c] += B[r][c]
	}
}

const result = []; 
A.forEach((line) => result.push(line.join(' ')));
console.log(result.join('\n'));


// for(let i = 0; i < n[1]; i++) {
// 	let num1 = (arr1[i]).split(' ').map(el => el * 1)
// 	let num2 = (arr2[i]).split(' ').map(el => el * 1)
	
// 	for(let j = 0; j < n[0]; j++) {
// 		result += `${num1[j]+num2[j]}`
// 	}
// 	result += '\n'
// }
// console.log(result);

//https://github.com/WaiNaat/BOJ-JavaScript/blob/main/2738.js