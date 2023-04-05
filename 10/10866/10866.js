let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let deque = [];

let result = "";
for (let i = 1; i < input.length - 1; i++) {
  let line = input[i].split(" ");
  if (line[0] == "push_front") deque = [line[1], ...deque];
  else if (line[0] == "push_back") deque.push(line[1]);
  else if (line[0] == "pop_front") {
    if (deque.length == 0) {
      result += "-1\n";
      continue;
    }
    result += `${deque[0]}\n`;
    deque = deque.splice(1);
  } else if (line[0] == "pop_back") {
    if (deque.length == 0) {
      result += "-1\n";
      continue;
    }
    result += `${deque[deque.length - 1]}\n`;
    deque.pop();
  } else if (line[0] == "size") result += `${deque.length}\n`;
  else if (line[0] == "empty") result += `${deque.length == 0 ? 1 : 0}\n`;
  else if (line[0] == "front") {
    if (deque.length == 0) {
      result += "-1\n";
      continue;
    }
    result += `${deque[0]}\n`;
  } else if (line[0] == "back") {
    if (deque.length == 0) {
      result += "-1\n";
      continue;
    }
    result += `${deque[deque.length - 1]}\n`;
  }
}

process.stdout.write(result);
