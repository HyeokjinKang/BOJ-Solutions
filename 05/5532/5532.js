let fs = require("fs");
let [l, a, b, c, d] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let korean = Math.ceil(a / c);
let math = Math.ceil(b / d);

console.log(l - (korean > math ? korean : math));
