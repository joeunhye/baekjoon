const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0].split(' ');

let arr = ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'C'];
let result = '';
for(let i = 1; i <= input.length; i++) {
	result += arr[parseInt(input[i-1])-1];
}

if(result === arr.join('')) {
	console.log('ascending');
}else if (result === arr.reverse().join('')) {
	console.log('descending');
}else {
	console.log('mixed');
}
