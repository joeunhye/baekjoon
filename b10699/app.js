let nowDate = new Date;
const year = nowDate.getFullYear();
const month = String(nowDate.getMonth() + 1).padStart(2, '0');
const date = String(nowDate.getDate()).padStart(2, '0')

console.log(`${year}-${month}-${date}`);