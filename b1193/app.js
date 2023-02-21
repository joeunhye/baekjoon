const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map(item => +item);

let X = Number(input);
let groupCounter = 0;
// 각그룹은 groupCounter 만큼의 요소를 갖고있고  
// groupCounter 가 짝수이면 분모는 1부터 groupCounter까지 분자는 groupCounter부터 1까지이다

const 오름차순 = [];
const 내림차순 = [];

while(X > 0){ // While문을 돌려서 몇번째 그룹인지 체크한다, 1번째 그룹인지부터 체크하면서 해당그룹이 아닐시 input 값에서 그 그룹을 빼준다. 만약 반복해서 빼주다가 input값이 0 또는 음수가 된다면, 그 그룹에 해당하는것이다. 
	// ex) input 11 이면 group 1 11-1, 2 10-2, 3 8-3, 4 5-4, 5 1-5
	//     그룹은 5번째그룹이고, input은 -4가됐다 해당그룹을 다시 더해주면 해당그룹의 몇번째인지도 알수있다. 5번째그룹이고 그룹의 첫번째 분수이다.
	groupCounter++; 
	X = X - groupCounter;
}

for(let i=0; i < groupCounter; i++){
  오름차순.push(i+1);
  내림차순.push(groupCounter-i);
}
console.log(groupCounter);

if(groupCounter % 2 === 0){// 짝수이면
  console.log(`${오름차순[X+groupCounter-1]}/${내림차순[X+groupCounter-1]}`)
} else {
  console.log(`${내림차순[X+groupCounter-1]}/${오름차순[X+groupCounter-1]}`)
}