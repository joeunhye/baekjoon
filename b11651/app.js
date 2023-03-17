const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift()

// 좌표를 y좌표가 증가하는 순으로, y좌표가 같으면 x좌표가 증가하는 순서로 정렬
input = input.map(el => el.split(' ').map(n => parseInt(n)))
input.sort((a, b) => {
    if(a[1] === b[1]) {
        return a[0] - b[0]
    }else {
        return a[1] - b[1]
    }
})
let result = '';
input.forEach(el => {
    result += `${el[0]} ${el[1]}\n`
})

console.log(result);