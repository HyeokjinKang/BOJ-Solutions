let fs = require("fs");
let [start, end] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let dist = [];
dist[start] = 0;
let willVisit = [start];
let count = 0;
while (1) {
  let now = willVisit.pop();
  let i = dist[now];
  if (now == end) {
    count = i;
    break;
  }
  i++;
  let push = [];
  if (now - 1 >= 0 && dist[now - 1] == undefined) {
    push.push(now - 1);
    dist[now - 1] = i;
  }
  if (now < end && dist[now + 1] == undefined) {
    push.push(now + 1);
    dist[now + 1] = i;
  }
  if (now < end && dist[now * 2] == undefined) {
    push.push(now * 2);
    dist[now * 2] = i;
  }
  willVisit = [...push, ...willVisit];
}

console.log(count);
