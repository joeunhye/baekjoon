const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(el => el.split(' '));

for(let [n1, n2] of input) {
	if(parseInt(n1) < parseInt(n2)) {
		if(n2 % n1 === 0) { // 약수 판별
			console.log('factor');
		}else {
			console.log('neither');
		}
	}else if (parseInt(n1) > parseInt(n2)) {
		if(n1 % n2 === 0) { // 배수 판별
			console.log('multiple');
		}else {
			console.log('neither');
		}
	}
}