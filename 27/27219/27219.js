let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(`V`.repeat(parseInt(input / 5)) + `I`.repeat(input % 5));
