const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
solution(input[0]);
function solution(str) {
	// Write your code
	let alpa = 'abcdefghijklmnopqrstuvwxyz';
	let result = Array(alpa.length).fill(-1);
	for(let i = 0; i < str.length; i++) {
		if(alpa.includes(str[i])) {
			result[alpa.indexOf([str[i]])] = str.indexOf([str[i]])
		}
	}
	console.log(result.join(' '));
}
