let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
let arr = [];
let removed = [];
let index = 0;

for (let i = 0; i < input[0]; i++) arr.push(i + 1);
while (arr.length != 1) {
  index = (index + input[1] - 1) % arr.length;
  removed.push(arr[index]);
  arr.splice(index, 1);
}
removed.push(arr[0]);

process.stdout.write(`<${removed.join(", ")}>`);
