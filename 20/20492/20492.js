let fs = require("fs");
let n = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(`${n * 0.78} ${n * 0.956}`);
