let fs = require("fs");
let [start, end] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let visited = new Set();
let willVisit = [start];
let nowLevel = 0;
let nextLevel = 1;
let count = -1;
while (1) {
  if (nowLevel == 0) {
    count++;
    nowLevel = nextLevel - 1;
    nextLevel = 0;
  } else {
    nowLevel--;
  }
  let now = willVisit.shift();
  if (now == end) {
    break;
  }
  let push = [];
  if (now - 1 >= 0 && !visited.has(now - 1)) {
    push.push(now - 1);
    visited.add(now - 1);
  }
  if (now < end && !visited.has(now + 1)) {
    push.push(now + 1);
    visited.add(now + 1);
  }
  if (now != 0 && now * 2 <= 100000 && now < end && !visited.has(now * 2)) {
    push.push(now * 2);
    visited.add(now * 2);
  }
  nextLevel += push.length;
  willVisit.push(...push);
}

console.log(count);
