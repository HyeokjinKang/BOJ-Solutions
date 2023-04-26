let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((e) => {
  if (e == "# 0 0") return;
  e = e.split(" ");
  if (e[1] > 17 || e[2] >= 80) {
    console.log(e[0], "Senior");
  } else {
    console.log(e[0], "Junior");
  }
});
