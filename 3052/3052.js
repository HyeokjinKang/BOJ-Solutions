const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let rst = new Set();

rl.on("line", line => {
  rst.add(parseInt(line) % 42);
}).on("close", () => {
  console.log(rst.size);
});