const rl = require("readline").createInterface(process.stdin, process.stdout);

let input = 0;
let arr = [];

rl.on("line", (line) => {
  if (input == 0) for (let i = 0; i < Number(line.split(" ")[0]); i++) arr.push(i + 1);
  else {
    const [a, b] = line.split(" ").map(Number);
    const temp = arr[a - 1];
    arr[a - 1] = arr[b - 1];
    arr[b - 1] = temp;
  }
  input++;
}).on("close", () => {
  console.log(arr.join(" "));
});
