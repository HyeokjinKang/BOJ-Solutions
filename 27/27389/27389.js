let fs = require("fs");
let tick = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(tick / 4);
