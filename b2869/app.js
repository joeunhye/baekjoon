const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map(item => +item);

// 땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.

// 달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또, 정상에 올라간 후에는 미끄러지지 않는다.

// 달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.

// 첫째 줄에 세 정수 A, B, V가 공백으로 구분되어서 주어진다. (1 ≤ B < A ≤ V ≤ 1,000,000,000)

let A = input[0] // 아침에 이동하는 수 
let B = input[1] // 밤에 미끄러지는 수
let V = input[2] // 높이

let move = 0;
let day = 0;

while(true) {
	day++;
	move += A;
	if(move < V) {
		move -= B;
	}else if(move >= V) {
		break;
	}
}
console.log(day);

// (높이 - 밤에 미끄러지는 수) / (아침에 이동하는 수 - 밤에 미끄러지는 수 = 하루에 이동하는 거)
// console.log(Math.ceil((V - B) / (A - B)));


