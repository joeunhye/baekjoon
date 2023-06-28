const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, H] = fs.readFileSync(filePath).toString().split("\n");
N = Number(N)
H = H.split(' ').map(Number)
let cnt = 0;
let arrow = new Array(1000001).fill(0);

for(let x of H) {
	if(arrow[x]) {
		arrow[x]--;
		arrow[x - 1]++;
	}else {
		cnt++;
		arrow[x - 1]++;
	}
}

console.log(cnt)