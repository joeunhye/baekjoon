const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")

let arr; 
for(let i of input) {
	i = parseInt(i);
	arr = [];
	for(let j = 1; j <= i; j++) {
		if(i % j === 0) {
			arr.push(j)
		}
	}
	let sum = 0;
	for(let k = 0; k < arr.length - 1; k++) {
		sum+=arr[k]
	}
	let str = [...arr];
	if(sum === arr[arr.length-1]) {
		str.pop()
		console.log(`${arr[arr.length-1]} = ${str.join(' + ')}`);
	}else {
		if(sum === 0) return;
		console.log(`${arr[arr.length-1]} is NOT perfect.`);
	}
}
