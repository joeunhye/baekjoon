const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬
// 입력은 가입한 순서


// 출력 예시
// 20 Sunyoung
// 21 Junkyu
// 21 Dohyun


let N = input.shift();
let result = '';
input = input.map(el => el.split(' '));

input.sort((a, b) => {
    if(parseInt(a[0]) !== parseInt(b[0])) {
        return parseInt(a[0]) - parseInt(b[0])
    }
})

input.forEach(el => {
    result += `${el[0]} ${el[1]}\n`
});
console.log(result);