let fs = require("fs");
let n = Number(fs.readFileSync("/dev/stdin").toString());

let line = [];
if (n != 1 && n != 4) line.push(" * * *");
else line.push("");
if (n != 1 && n != 2 && n != 7 && n != 3) for (let i = 1; i <= 3; i++) line.push("*");
else for (let i = 1; i <= 3; i++) line.push(" ");
if (n != 5 && n != 6) for (let i = 1; i <= 3; i++) line[line.length - i] += "     *";
line.push("");
if (n != 0 && n != 1 && n != 7) line[line.length - 1] += " * * *";
if (n == 0 || n == 2 || n == 6 || n == 8) for (let i = 1; i <= 3; i++) line.push("*");
else for (let i = 1; i <= 3; i++) line.push(" ");
if (n != 2) for (let i = 1; i <= 3; i++) line[line.length - i] += "     *";
if (n != 1 && n != 4 && n != 7) line.push(" * * *");
console.log(line.join("\n"));
