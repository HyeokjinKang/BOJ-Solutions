let fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let diff = b - a;
let fine = diff >= 31 ? 500 : diff >= 21 ? 270 : 100;
if (diff <= 0) console.log("Congratulations, you are within the speed limit!");
else console.log(`You are speeding and your fine is $${fine}.`);
