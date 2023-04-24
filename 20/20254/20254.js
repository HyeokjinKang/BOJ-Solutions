let fs = require("fs");
let [Ur, Tr, Uo, To] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(56 * Ur + 24 * Tr + 14 * Uo + 6 * To);
