const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")

// 피타고라스의 정리
// 직각삼각형 ABC에서 각 꼭짓점의 대변의 길이를 각각 a, b, c라고 할 때, 빗변 c의 제곱은 다른 두 변 a, b의 제곱의 합과 같다.

// 예제 출력
// right
// wrong
// right

for(let x of input) {
    let values = x.split(' ').map(el => parseInt(el));

    if(values[0] === 0)  break;
    values.sort((a, b) => a - b)

    if(Math.pow(values[0], 2) + Math.pow(values[1], 2) === Math.pow(values[2], 2)) {
        console.log("right")
    }else {
        console.log("wrong")
    }
}
