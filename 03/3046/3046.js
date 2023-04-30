let fs = require("fs");
let [r, avg] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(avg * 2 - r);
