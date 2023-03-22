const rl = require("readline").createInterface(process.stdin, process.stdout);

let input = 0;
let arr = [];

rl.on("line", (line) => {
  if (input == 0) for (let i = 0; i < Number(line.split(" ")[0]); i++) arr.push(0);
  else {
    const [start, end, num] = line.split(" ").map(Number);
    for (let i = start - 1; i < end; i++) arr[i] = num;
  }
  input++;
}).on("close", () => {
  console.log(arr.join(" "));
  process.exit();
});
