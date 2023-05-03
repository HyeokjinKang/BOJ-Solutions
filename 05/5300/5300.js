let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());

let result = "";
for (let i = 1; i <= input; i++) {
  result += `${i} `;
  if (i % 6 == 0) {
    result += `Go! `;
  }
}

console.log(result + (input % 6 == 0 ? "" : "Go! "));
