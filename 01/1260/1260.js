let fs = require("fs");
let [data, ...input] = fs.readFileSync("/dev/stdin").toString().split("\n");
let [n, m, v] = data.split(" ").map(Number);
let graph = {};

for (let i = 0; i < m; i++) {
  input[i] = input[i].split(" ").map(Number);
  if (graph[input[i][0]] != undefined) graph[input[i][0]].push(input[i][1]);
  else graph[input[i][0]] = [input[i][1]];
  if (graph[input[i][1]] != undefined) graph[input[i][1]].push(input[i][0]);
  else graph[input[i][1]] = [input[i][0]];
}

let willVisit = [v];
let dfs = [];
while (willVisit.length != 0) {
  let target = willVisit.shift();
  if (dfs.indexOf(target) == -1) {
    dfs.push(target);
    if (graph[target]) willVisit = [...graph[target].sort((a, b) => a - b), ...willVisit];
  }
}

willVisit = [v];
let bfs = [];
while (willVisit.length != 0) {
  let target = willVisit.shift();
  if (bfs.indexOf(target) == -1) {
    bfs.push(target);
    if (graph[target]) willVisit = [...willVisit, ...graph[target].sort((a, b) => a - b)];
  }
}

console.log(dfs.join(" "));
console.log(bfs.join(" "));
