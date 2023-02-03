const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
var input = fs
  .readFileSync(filePath)
  .toString().trim()
  .split("\n");

let num = input[0] * 1;

for(let i = 1; i <= num; i++) {
  let scoreArr = input[i].split(' ').map(num => num*1)
  const n = scoreArr.shift();
  let count = 0;
  
  let aver = scoreArr.reduce((acc, cur) => acc+ cur, 0) / n;
  for(let j = 0; j < n; j++) {
    if(scoreArr[j] > aver) {
      count+=1;
    }
  }
  console.log(`${(count/n*100).toFixed(3)}%`);
}

//https://yeoncoding.tistory.com/73