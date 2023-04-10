let fs = require("fs");
let [count, ...seq] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

let stack = [];
let target = 0;
let i = 1;
let result = "";
while (target < count) {
  for (i; i <= seq[target]; i++) {
    result += "+\n";
    stack.push(i);
  }
  let pop = stack.pop();
  if (pop != seq[target]) return console.log("NO");
  result += "-\n";
  target++;
}

console.log(result);
