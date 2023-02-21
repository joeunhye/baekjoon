const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(el => el*1);


let N = input.shift();
// console.log(input);
// console.log(N);

for(let i = 0; i < input.length; i++) {
	for(let j = i + 1; j < input.length; j++) {
		if(input[i] > input[j]) {
			let temp = input[i]
			input[i] = input[j];
			input[j] = temp;
		}
	}
}

console.log(input.join('\n'));