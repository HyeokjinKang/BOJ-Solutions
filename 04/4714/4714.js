let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

input.forEach((e) => {
  if (e == -1) return;
  console.log(`Objects weighing ${e.toFixed(2)} on Earth will weigh ${(e * 0.167).toFixed(2)} on the moon.`);
});
