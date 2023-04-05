let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let stack = [];

let result = "";
for (let i = 1; i < input.length - 1; i++) {
  let line = input[i].split(" ");
  if (line[0] == "push") stack.push(line[1]);
  else if (line[0] == "pop") {
    if (stack.length == 0) {
      result += "-1\n";
      continue;
    }
    result += `${stack[stack.length - 1]}\n`;
    stack.pop();
  } else if (line[0] == "size") result += `${stack.length}\n`;
  else if (line[0] == "empty") result += `${stack.length == 0 ? 1 : 0}\n`;
  else if (line[0] == "top") {
    if (stack.length == 0) {
      result += "-1\n";
      continue;
    }
    result += `${stack[stack.length - 1]}\n`;
  }
}

process.stdout.write(result);
