let fs = require("fs");
let [a, e] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

if (a >= 3 && e <= 4) console.log("TroyMartian");
if (a <= 6 && e >= 2) console.log("VladSaturnian");
if (a <= 2 && e <= 3) console.log("GraemeMercurian");
