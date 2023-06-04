const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const NM = input.shift().split(" ");
const N = Number(NM.shift());
const M = Number(NM.shift());
const candidates = [];

const whiteFirstBoard = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
];

const blackFirstBoard = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
];

function paintWhiteFirst(x, y) {
    let count = 0;

    for (let i = y; i < y + 8; i++) {
        for (let j = x; j < x + 8; j++) {
            if (input[i][j] !== whiteFirstBoard[i - y][j - x]) {
                count++;
            }
        }
    }

    return count;
}

function paintBlackFirst(x, y) {
    let count = 0;

    for (let i = y; i < y + 8; i++) {
        for (let j = x; j < x + 8; j++) {
            if (input[i][j] !== blackFirstBoard[i - y][j - x]) {
                count++;
            }
        }
    }

    return count;
}

for (let i = 0; i + 7 < N; i++) {
    for (let j = 0; j + 7 < M; j++) {
        candidates.push(paintWhiteFirst(j, i));
        candidates.push(paintBlackFirst(j, i));
    }
}

console.log(Math.min(...candidates));

// https://sena-22.github.io/baekjoon/5/
// https://velog.io/@arthur/1018.-%EC%B2%B4%EC%8A%A4%ED%8C%90-%EB%8B%A4%EC%8B%9C-%EC%B9%A0%ED%95%98%EA%B8%B0-node.js-javascript
// https://chunghyup.tistory.com/75