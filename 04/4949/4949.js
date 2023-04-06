let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let result = "";

for (let i = 0; i < input.length; i++) {
  if (input[i] == ".") break;
  let arr = [];
  let valid = "yes";
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == ".") break;
    switch (input[i][j]) {
      case "(":
      case "[":
        arr.push(input[i][j]);
        break;
      case ")":
        if (arr[arr.length - 1] == "(") arr.pop();
        else valid = "no";
        break;
      case "]":
        if (arr[arr.length - 1] == "[") arr.pop();
        else valid = "no";
        break;
    }
  }
  if (arr.length != 0) vaild = "no";
  result += `${valid}\n`;
}
console.log(result);
