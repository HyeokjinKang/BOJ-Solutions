let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log((input[0] + input[1]) * (input[0] - input[1]));
