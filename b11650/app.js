const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift()

let results = '';
const coordsArr = input.map(coords => coords.split(' ').map(el => Number(el)))
coordsArr.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]
}).forEach(coords => {
    results += `${coords[0]} ${coords[1]}\n`;
});
console.log(results);
