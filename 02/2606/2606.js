let fs = require("fs");
let [a, b, ...input] = fs.readFileSync("/dev/stdin").toString().split("\n");
let graph = {};

for (let i = 0; i < Number(b); i++) {
  input[i] = input[i].split(" ").map(Number);
  if (graph[input[i][0]] != undefined) graph[input[i][0]].push(input[i][1]);
  else graph[input[i][0]] = [input[i][1]];
  if (graph[input[i][1]] != undefined) graph[input[i][1]].push(input[i][0]);
  else graph[input[i][1]] = [input[i][0]];
}

let willVisit = [1];
let visited = [];
while (willVisit.length != 0) {
  let target = willVisit.shift();
  if (visited.indexOf(target) == -1) {
    visited.push(target);
    willVisit.push(...graph[target]);
  }
}

console.log(visited.length - 1);
