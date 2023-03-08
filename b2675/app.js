const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let rsArray = [];
for (let i = 1; i <= +input[0]; ++i) {
    const inputRS = input[i];
    const splitedInputRS = inputRS.split(' ');
    rsArray.push({
        R: +splitedInputRS[0],
        S: splitedInputRS[1],
    });
}
solution(+input[0], rsArray);
function solution(N, rsArray) {
    for (let i = 0; i < N; ++i) {
        let { R, S } = rsArray[i];
        let P = '';
        for(let i = 0; i < S.length; i++) {
			P += S[i].repeat(R)
		}
		console.log(P);
    }
}