const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [T, ...input] = fs.readFileSync(filePath).toString().split("\n");

for(let i = 0; i < T; i++) {
	let N = input.shift();
	let Case = input.splice(0, N).map(el => el.split(' ').map(Number)).sort((a, b) => a[0] - b[0])
	let count = 0;
	let minValue = Infinity;

	for(let [x, y] of Case) {
		if(y < minValue) {
			minValue = y;
			count+=1;
		}
	}
	console.log(count)
}