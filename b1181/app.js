const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
let strArr = [...new Set(input)];



// 길이가 짧은 것부터
// 길이가 같으면 사전 순으로

// 예제 출력
// i
// im
// it
// no
// but
// more
// wait
// wont
// yours
// cannot
// hesitate


strArr.sort();
strArr.sort((a, b) => {
	if(a.length > b.length) return 1;
	if(a.length === b.length) return 0;
	else return -1;
})

console.log(strArr.join('\n'));

// strArr.sort((a, b) => a.length - b.length || a.localeCompare(b));

// console.log(
//   [...new Set(input)]
//     .sort((a, b) => a.length - b.length || a.localeCompare(b))
//     .join("\n")
// );

// console.log(strArr.join('\n'));