let fs = require("fs");
let [data, ...input] = fs.readFileSync("/dev/stdin").toString().split("\n");
let [a, b] = data.split(" ");
let graph = {};

let willVisit = [];
for (let i = 1; i <= Number(a); i++) {
  willVisit.push(i);
}
for (let i = 0; i < Number(b); i++) {
  input[i] = input[i].split(" ").map(Number);
  if (graph[input[i][0]] != undefined) graph[input[i][0]].push(input[i][1]);
  else graph[input[i][0]] = [input[i][1]];
  if (graph[input[i][1]] != undefined) graph[input[i][1]].push(input[i][0]);
  else graph[input[i][1]] = [input[i][0]];
}

let finding = [];
let visited = [];
let count = 0;
while (willVisit.length != 0) {
  count++;
  let target = willVisit.pop();
  if (visited.indexOf(target) == -1) {
    visited.push(target);
    if (graph[target]) finding.push(...graph[target]);
    while (finding.length != 0) {
      let target = finding.pop();
      if (visited.indexOf(target) == -1) {
        willVisit.splice(willVisit.indexOf(target), 1);
        visited.push(target);
        if (graph[target]) finding.push(...graph[target]);
      }
    }
  }
}

console.log(count);
