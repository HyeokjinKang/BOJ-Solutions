let fs = require("fs");
let [d, h, m] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let sum = (d - 11) * 1440 + (h - 11) * 60 + m - 11;
console.log(sum >= 0 ? sum : -1);
