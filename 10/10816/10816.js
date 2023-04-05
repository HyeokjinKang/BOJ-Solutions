let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let add = input[1].split(" ").map(Number);
let find = input[3].split(" ").map(Number);
let count = new Array(20000001);

for (let i = 0; i < add.length; i++) {
  if (count[add[i] + 10000000] == undefined) count[add[i] + 10000000] = 1;
  else count[add[i] + 10000000] += 1;
}

let result = "";
for (let i = 0; i < find.length; i++) {
  result += (count[find[i] + 10000000] == undefined ? 0 : count[find[i] + 10000000]) + " ";
}

process.stdout.write(result);
