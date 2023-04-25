let fs = require("fs");
let [time, sake] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(12 <= time && time <= 16 && sake == 0 ? "320" : "280");
