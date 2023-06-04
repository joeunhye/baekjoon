const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const T = parseInt(input.shift());
let result = '';

for(let i = 0; i < T; i++) {
	let inputArr = input[i].split(' ').map(el => Number(el));
	let [H, W, N] = inputArr;
	
	const floor = N % H === 0 ? H : N % H; // ex) 12번째손님 % 5층 = 2 이기때문에 이 손님은 2층에 머물게 된다.
  	const roomNum = Math.ceil(N / H) < 10 ? `0${Math.ceil(N / H)}` : Math.ceil(N / H);
	result += `${floor}${roomNum} \n`;
}

console.log(result)