const rl = require("readline").createInterface(process.stdin, process.stdout);

let input = 0;
let arr = [];
let temp = [];

rl.on("line", (line) => {
  if (input == 0) for (let i = 1; i <= Number(line.split(" ")[0]); i++) arr.push(i);
  else {
    line = line.split(" ").map(Number);
    temp = arr.slice();
    for (let i = line[0]; i <= line[1]; i++) {
      arr[i - 1] = temp[line[1] - i + line[0] - 1];
    }
  }
  input++;
}).on("close", () => {
  console.log(arr.join(" "));
});
