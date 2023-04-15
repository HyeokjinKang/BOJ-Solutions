let fs = require("fs");
let [t, ...input] = fs.readFileSync("/dev/stdin").toString().split("\n");
t = Number(t);

let index = 0;
for (let i = 1; i <= t; i++) {
  let [m, n, k] = input[index].split(" ").map(Number);
  let graph = {};
  let cordinates = [];
  let willVisit = [];
  for (let j = 1; j <= k; j++) {
    let [x, y] = input[index + j].split(" ");
    willVisit.push(j - 1);
    cordinates.push(`${x} ${y}`);
    let indexes = [cordinates.indexOf(`${x + 1} ${y}`), cordinates.indexOf(`${x - 1} ${y}`), cordinates.indexOf(`${x} ${y + 1}`), cordinates.indexOf(`${x} ${y - 1}`)];
    indexes.forEach((e) => {
      if (e != -1) {
        if (graph[e] == undefined) graph[e] = [];
        if (graph[j - 1] == undefined) graph[j - 1] = [];
        graph[j - 1].push(e);
        graph[e].push(j - 1);
      }
    });
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
  index += k + 1;
}
