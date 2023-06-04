const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const [n, ...commands] = input;

class Deque {
	constructor() {
		this.arr = [];
	}
	// 맨 앞에 데이터 추가 메서드
	push_front(item) {
		this.arr.unshift(item);
	}

	// 맨 뒤에 데이터 추가 메서드
	push_back(item) {
		this.arr.push(item);
	}

	// 데이터 개수 확인
	size() {
		return this.arr.length;
	}

	// 맨 앞에 데이터 삭제 메서드
	pop_front() {
		return this.size() === 0 ? -1 : this.arr.shift();
	}

	// 맨 뒤에 데이터 삭제 메서드
	pop_back() {
		return this.size() === 0 ? -1 : this.arr.pop();
	}

	// 데이터가 비어 있는지 확인
	empty() {
		return this.size() === 0 ? 1 : 0;
	}

	// 가장 앞쪽 데이터 반환
	front() {
		return this.size() === 0 ? -1 : this.arr[0];
	}

	//가장 뒤쪽 데이터 반환
	back() {
		return this.size() === 0 ? -1 : this.arr[this.size() - 1];
	}
}

const deque = new Deque();
let result = [];

for(let i = 0; i <= n; i++) {
	let s = input[i].split(" ");
	switch (s[0]) {
		case 'push_back':
			deque.push_back(parseInt(s[1]));
			break;
	
		case 'push_front':
			deque.push_front(parseInt(s[1]));
			break;
		
		case 'pop_front':
			result.push(deque.pop_front());
			break;

		case 'pop_back':
			result.push(deque.pop_back());
			break;

		case 'size': 
			result.push(deque.size());
			break;

		case 'empty':
			result.push(deque.empty());
			break;

		case 'front':
			result.push(deque.front());
			break;

		case 'back':
			result.push(deque.back());
			break;
	}
}


console.log(result.join('\n'))