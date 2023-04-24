let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(input ** 3);
