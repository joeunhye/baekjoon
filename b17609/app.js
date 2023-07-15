const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const isPalindrom = input => {
	const n = input.length;
	for (let i = 0; i < n / 2; i++) {
		if (input[i] !== input[n - i - 1]) {
			return false;
		}
	}
	return true;
};

const t = Number(input[0]);

for (let i = 1; i <= t; i++) {
	const data = input[i];

	if (isPalindrom(data)) console.log(0); // 회문인 경우
	else {
		// 회문이 아닌 경우, 유사 회문인지 판별
		let flag = false;
		const n = data.length;

		for (let j = 0; j < n / 2 && !flag; j++) {
			// 대칭이 아닌 경우
			if (data[j] !== data[n - j - 1]) {
				// 왼쪽에 있는 원소를 제거한 뒤 회문 검사
				if (isPalindrom(data.slice(0, j) + data.slice(j + 1))) flag = true;
				// 오른쪽에 있는 원소를 제거한 뒤 회문 검사
				if (isPalindrom(data.slice(0, n - j - 1) + data.slice(n - j))) flag = true;
				break;
			}
		}
		if (flag) console.log(1);
		else console.log(2);
	}
}

// https://kingseungil.tistory.com/164
// https://breathtaking-life.tistory.com/167
