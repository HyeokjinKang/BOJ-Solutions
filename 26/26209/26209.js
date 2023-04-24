let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(input.indexOf("9") != -1 ? "F" : "S");
