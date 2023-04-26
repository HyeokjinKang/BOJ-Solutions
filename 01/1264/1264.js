let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((e) => {
  if (e == "#") return;
  let count = 0;
  for (let i = 0; i < e.length; i++) {
    let letter = e[i].toLowerCase();
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
      count++;
    }
  }
  console.log(count);
});
