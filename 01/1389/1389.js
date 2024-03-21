let fs = require("fs");
let [data, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
data = data.split(" ").map(Number);

let tree = {}
for (let pair of input) {
  pair = pair.split(" ").map(Number);
  if(pair[0] in tree) tree[pair[0]].add(pair[1]);
  else tree[pair[0]] = new Set([pair[1]]);
  if(pair[1] in tree) tree[pair[1]].add(pair[0]);
  else tree[pair[1]] = new Set([pair[0]]);
}

let levels = {};
for(let i = 1; i <= data[0]; i++) {
  let index = 0;
  let visited = new Set(tree[i]);
  visited.add(i);
  let willVisit = Array.from(tree[i]);
  let level = {};
  willVisit.forEach(e => level[e] = 1);
  while (willVisit.length != index) {
    let now = willVisit[index];
    let near = Array.from(tree[now]);
    near.forEach(n => {
      if(!visited.has(n)) {
        willVisit.push(n);
        visited.add(n);
        level[n] = level[now] + 1;
      }
    });
    index++;
  }
  levelValue = Object.values(level);
  levels[i] = levelValue.reduce((a, b) => a + b, 0);
}

let result = [0, Number.MAX_SAFE_INTEGER];
for(let i = 1; i <= data[0]; i++) {
  if(levels[i] < result[1]) result = [i, levels[i]]
}
console.log(result[0]);