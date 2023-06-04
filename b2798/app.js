const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [NM, arr] = input;
let [N, M] = NM.split(' ').map(el => el*1)
arr = arr.split(' ').map(el => el*1)
let max = 0;

for(let i = 0; i < arr.length; i++) {
	for(let j = i + 1; j < arr.length; j++) {
		for(let k = j + 1; k < arr.length; k++) {
			if(arr[i] + arr[j] + arr[k] <= M && max < arr[i] + arr[j] + arr[k]) {
				max = arr[i] + arr[j] + arr[k];
			}
		}
	}
}

console.log(max)