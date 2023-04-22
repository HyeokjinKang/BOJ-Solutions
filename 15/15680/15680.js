let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(input == 0 ? "YONSEI" : "Leading the Way to the Future");
