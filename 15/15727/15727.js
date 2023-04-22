let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(Math.ceil(input / 5));
