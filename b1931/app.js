const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, ...meeting] = fs.readFileSync(filePath).toString().split("\n");
N = Number(N)
let endTime = 0;
let answer = 0;
meeting = meeting.map(el => el.split(' ').map(Number)).sort((a, b) => {
	if(a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1]
})

for(let x of meeting) {
	if(x[0] >= endTime) {
		answer++;
		endTime = x[1]
	}
}
console.log(answer)