const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(el => el.split(' ').map(el => el*1));

let max = 0;
let col = 0;
let row = 0;

for(let i = 0; i < 9; i++) {
	for(let j = 0; j < 9; j++) {
		if(max < input[i][j]) {
			max = input[i][j]
			col = i;
			row = j;
		}
	}
}
console.log(max);
console.log(`${col + 1} ${row + 1}`);