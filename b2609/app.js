const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").join(' ').split(' ');

// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
// 예제 출력
// 6
// 72

//최대공약수 구하기
const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);

//최소공배수 구하기
const lcm = (a, b) => (a * b) / gcd(a, b)

console.log(gcd(input[0], input[1]));
console.log(lcm(input[0], input[1]));