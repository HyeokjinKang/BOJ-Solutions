let fs = require("fs");
let [time, sec] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [h, m, s] = time.split(" ").map(Number);
sec = Number(sec);
let addH = Math.floor(sec / 3600);
let addM = Math.floor((sec % 3600) / 60);
let addS = Math.floor((sec % 3600) % 60);
s += addS;
m += addM + Math.floor(s / 60);
h += addH + Math.floor(m / 60);

console.log(h % 24, m % 60, s % 60);
