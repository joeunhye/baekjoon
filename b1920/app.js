const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");


let [N, A, M, B] = input.map(v => v.split(" "));
A = A.map(el => Number(el))
B = B.map(el => Number(el))

A.sort((a,b)=>a-b)
let answer = [];

B.forEach(v=>{
  let left = 0;
  let right = A.length-1; 
  let find = false; 
    while(left<=right){
      let mid = Math.floor((right+left)/2);   
      if(A[mid]>v){
        right = mid-1; 
      }else if(A[mid]<v){
        left=mid+1;
      }else{  
        find=true;
        break; 
      }
    }
  
	find ? answer.push(1) : answer.push(0)
})
console.log(answer.join('\n'))


// let numSet = new Set(A)
// let result = B.map(el => numSet.has(el) ? 1 : 0)
// console.log(result.join('\n'))

// for(let x of B) {
// 	if(A.includes(x)) {
// 		console.log(1)
// 	}else {
// 		console.log(0)
// 	}
// }
