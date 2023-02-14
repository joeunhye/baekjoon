const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(input[0]);
function solution(str) {
	let strMap = new Map();
	let max = 0;
	let maxVal = '';
	let isDuplicated = false;
	for(let x of str) {
		x = x.toUpperCase()
		if(strMap.has(x)) strMap.set(x, strMap.get(x) + 1);
		else strMap.set(x, 1)
	}
	for(let [key, val] of strMap) {
		if(val > max) {
			max = val;
			maxVal = key;
			isDuplicated = false;
		}else if(val === max) {
			isDuplicated = true;
		}
	}
	isDuplicated ? console.log('?') : console.log(maxVal)
}