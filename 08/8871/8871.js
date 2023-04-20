let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim()) + 1;

console.log(input * 2, input * 3);
