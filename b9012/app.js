const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let T = input.shift();

//여는 괄호이면 push, 닫는 괄호이면 pop

for(let i = 0; i < T; i++) {
	let result = true;
	let stack = [];

	for(let j = 0; j < input[i].length; j++) {
		if(input[i][j] === '(') {
			stack.push(input[i][j])
		}else if(input[i][j] === ')'){
			if(!stack.pop()) {
				result = false
			}
		}
	}
	if(stack.length > 0) {
		result = false
	}
	result === false ? console.log('NO') : console.log('YES')   
}
