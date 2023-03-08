const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(el => el * 1);

let multi = String(input[0] * input[1] * input[2]);

for(let i = 0; i <= 9; i++) {
	let count = 0;

	for(let j = 0; j < multi.length; j++) {
		if(Number(multi[j]) === i) {
			count++;
		}
	}

	console.log(count);
}


// let multi = String(input[0] * input[1] * input[2]);
// let multiArr = multi.toString().split('')
// let arr = Array(10).fill(0)
// let count = {};

// for(let i of multiArr) {
// 	count[i] = (count[i] || 0) + 1
// }

// let countArr = Object.entries(count);
// for(let [key, val] of countArr) {
// 	arr[key] = val
// }
// for(let i = 0; i < arr.length; i++) {
// 	console.log(String(arr[i]));
// }