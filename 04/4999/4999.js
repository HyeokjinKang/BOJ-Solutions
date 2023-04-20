let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(input[0].length >= input[1].length ? "go" : "no");
