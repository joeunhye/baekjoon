const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [a, b] = fs.readFileSync(filePath).toString().split("\n").join(" ").split(" ").map(Number);
let flag = false;
let cnt = 0;

while (a <= b) {
	if (a === b) {
		flag = true;
		break;
	}

	if (b % 2 === 0) {
		b = parseInt(b / 2);
	} else if (b % 10 === 1) {
		b = parseInt(b / 10);
	} else {
		break;
	}

	cnt++;
}
if (!flag) console.log(-1);
else console.log(cnt + 1);
