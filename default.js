let fs = require("fs");
// let input = Number(fs.readFileSync("/dev/stdin").toString());
// let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

//console.log()

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`약 ${Math.round(used * 100) / 100} MB의 메모리를 사용중입니다.`);
