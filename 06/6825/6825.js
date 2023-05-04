let fs = require("fs");
let [weight, tall] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let bmi = weight / tall ** 2;

if (bmi > 25) console.log("Overweight");
else if (bmi >= 18.5) console.log("Normal weight");
else console.log("Underweight");
