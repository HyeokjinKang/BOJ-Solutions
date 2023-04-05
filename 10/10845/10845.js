let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let queue = [];

let result = "";
for (let i = 1; i < input.length - 1; i++) {
  let line = input[i].split(" ");
  if (line[0] == "push") queue.push(line[1]);
  else if (line[0] == "pop") {
    if (queue.length == 0) {
      result += "-1\n";
      continue;
    }
    result += `${queue[0]}\n`;
    queue = queue.splice(1);
  } else if (line[0] == "size") result += `${queue.length}\n`;
  else if (line[0] == "empty") result += `${queue.length == 0 ? 1 : 0}\n`;
  else if (line[0] == "front") {
    if (queue.length == 0) {
      result += "-1\n";
      continue;
    }
    result += `${queue[0]}\n`;
  } else if (line[0] == "back") {
    if (queue.length == 0) {
      result += "-1\n";
      continue;
    }
    result += `${queue[queue.length - 1]}\n`;
  }
}

process.stdout.write(result);
