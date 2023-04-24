let fs = require("fs");
let [n, text] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = 0;
for (let i = 0; i < n; i++) {
  if (text[i] == "a" || text[i] == "i" || text[i] == "u" || text[i] == "e" || text[i] == "o") {
    count++;
  }
}

console.log(count);
