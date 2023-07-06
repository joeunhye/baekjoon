const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [n, k] = fs.readFileSync(filePath).toString().split("\n")[0].split(' ').map(Number);

let sum = k*(k+1)/2;

if(sum > n) {console.log(-1) 
}else {
    n -= sum;
    if(n % k == 0) console.log(k - 1)
    else console.log(k)
}

//https://jaekwan.tistory.com/154
//https://velog.io/@aurpo1/%EB%B0%B1%EC%A4%80-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-19939-%EB%B0%95-%ED%84%B0%EB%9C%A8%EB%A6%AC%EA%B8%B0