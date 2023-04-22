let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(`:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`);
