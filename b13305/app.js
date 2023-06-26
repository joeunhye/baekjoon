const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, distance, price] = fs.readFileSync(filePath).toString().split("\n");
N = Number(N)
distance = distance.split(' ').map(BigInt)
price = price.split(' ').map(BigInt)
let lowest = price[0];
let cost = 0n;

for(let i = 0; i < N - 1; i++) {
	if(price[i] < lowest) {
		lowest = price[i];
	}
	cost += distance[i] * lowest
}

console.log(String(cost))
