const rl = require("readline").createInterface(process.stdin, process.stdout);

let id = -1;
let count = 0;

let arr = [];

let result = "";

rl.on("line", (line) => {
  id++;
  if (id == 0) return;
  if (count == 0) return (count = Number(line));
  let [cmd, opt] = line.split(" ");
  switch (cmd) {
    case "I":
      arr.push(opt);
      break;
    case "D":
      if (opt == 1) {
        arr.sort((a, b) => a - b);
        arr.pop();
      } else {
        arr.sort((a, b) => b - a);
        arr.pop();
      }
      break;
  }
  count--;
  if (count == 0) {
    arr.sort((a, b) => a - b);
    if (arr.length == 0) result += "EMPTY\n";
    else result += `${arr[arr.length - 1]} ${arr[0]}\n`;
    arr = [];
  }
}).on("close", () => {
  console.log(result);
});
