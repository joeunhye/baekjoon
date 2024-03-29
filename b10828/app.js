const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [n, ...commands] = input;


const stack = [];
const result = [];

for(let i = 0; i < n; i++) {
	switch(commands[i]) {
		case 'pop' :
		result.push(stack.pop() || -1);
		break;

		case 'size' :
		result.push(stack.length);
		break;

		case 'empty' :
		result.push(stack[0] ? 0 : 1);
		break;

		case 'top' :
		result.push(stack[stack.length - 1] || -1);
		break;

		default :
		stack.push(commands[i].split(' ')[1]);
		break;
	}
}

console.log(result.join('\n'))