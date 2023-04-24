let fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((e) => {
  if (e.length >= 6 && e.length <= 9) console.log("yes");
  else console.log("no");
});
