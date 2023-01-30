const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
	input.push(line);
}).on("close", function () {
	// [[14 30], 20]

	let hour = input[0].split(" ")[0];
	let minute = input[0].split(" ")[1];
	let cookTime = input[1];

	solution(+hour, +minute, +cookTime);

	function solution(hour, minute, cookTime) {
		minute += cookTime;
		while (minute >= 60) {
			minute -= 60;
			hour += 1;
		}
		hour %= 24;
		console.log(hour, minute);
	}
});
