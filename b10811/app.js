const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")
let [N, M] = input[0].split(' ').map(x => +x);
let basket = [];
for(let i=1; i<=N; i++){
    basket.push(i);
};
// console.log(basket)
for(let i=1; i<=M; i++) {
    let [a, b] = input[i].split(' ').map(n => parseInt(n));
    let arr = [];
    for(let j = a-1; j < b; j++) {
        arr.push(basket[j])
    }
    arr.reverse();
    basket.splice(a-1, b-a+1, ...arr);
}

console.log(basket.join(' '))