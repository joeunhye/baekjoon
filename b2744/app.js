const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[0];

let str = ''
for(let s of input) {
	if(s === s.toUpperCase()) { //대문자이면
		str += s.toLowerCase();
	}else { //소문자이면
		str += s.toUpperCase();
	}
}
console.log(str);