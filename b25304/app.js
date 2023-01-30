const fs = require("fs");
let input = fs
	.readFileSync(__dirname + "/input.txt")
	.toString()
	.split("\n");

let total = +input[0];
let count = +input[1];
let sum = 0;

input.splice(0, 2);
for (let i = 0; i < count; i++) {
	let [price, num] = input[i].split(" ");
	sum += Number(price) * Number(num);
}

console.log(total === sum ? "Yes" : "No");
