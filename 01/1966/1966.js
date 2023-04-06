let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let result = "";
for (let i = 1; i < input.length - 1; i += 2) {
  let priorities = [];
  let queue = [];
  let n = Number(input[i].split(" ")[1]);
  input[i + 1].split(" ").forEach((e, i) => {
    priorities.push(Number(e));
    queue.push({ num: i, priority: Number(e) });
  });
  priorities.sort((a, b) => b - a);
  let count = 1;
  while (queue.length != 0) {
    if (priorities[0] == queue[0].priority) {
      if (queue[0].num == n) {
        result += `${count}\n`;
        break;
      } else {
        count++;
        queue.splice(0, 1);
        priorities.splice(0, 1);
      }
    } else {
      let temp = queue[0];
      queue.splice(0, 1);
      queue.push(temp);
    }
  }
}

console.log(result);
