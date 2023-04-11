let fs = require("fs");
let [m, ...command] = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr = new Array(20).fill(0);
let result = "";

for (let i = 0; i < m; i++) {
  command[i] = command[i].split(" ");
  switch (command[i][0]) {
    case "add":
      arr[Number(command[i][1]) - 1] = 1;
      break;
    case "remove":
      arr[Number(command[i][1]) - 1] = 0;
      break;
    case "check":
      result += `${Number(arr[Number(command[i][1]) - 1])}\n`;
      break;
    case "toggle":
      arr[Number(command[i][1]) - 1] = !arr[Number(command[i][1]) - 1];
      break;
    case "all":
      arr = new Array(20).fill(1);
      break;
    case "empty":
      arr = new Array(20).fill(0);
      break;
  }
}

console.log(result);
