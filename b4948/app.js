const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input.map(item => +item);

function isPrime(num) {
	if(num===1) return false;
	for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
		if(num%i===0) return false;
	}
	return true;
};

for(let i=0; i<input.length; i++) {
	if(input[i]===0) break;
	let count = 0;
	for(let j=input[i]+1; j<=input[i]*2; j++){
		if(isPrime(j)) count++;
	} 
	console.log(count);
}
