const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
solution(+input[0], input.slice(1));
function solution(N, arr) {
    let answer = 0;

	for(let i = 0; i < N; i++) {
		let word = arr[i];
		let str = '';
		let isGroupword = true;

		for(let j = 0; j < word.length; j++) {
			// 지금까지의 문자열에 해당 문자가 없는 경우
			if(!str.includes(word[j])) {
				str+=word[j]
			}else {
				// 해당 문자가 직전 문자와 다를 경우
				if(str.indexOf(word[j]) !== str.length - 1) {
					isGroupword = false;
					break
				}
			}
		}
		if(isGroupword) answer+=1;
	}
    console.log(answer);
}

//https://leo-xee.github.io/PS/b1316/