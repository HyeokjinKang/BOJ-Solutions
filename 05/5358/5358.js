let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let result = "";
  for (let j = 0; j < input[i].length; j++) {
    let letter = input[i][j];
    result += letter == "e" ? "i" : letter == "i" ? "e" : letter == "E" ? "I" : letter == "I" ? "E" : letter;
  }
  console.log(result);
}
