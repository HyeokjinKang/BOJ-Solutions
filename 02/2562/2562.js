const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let max = 0, index = 0, count = 1;

rl.on("line", line => {
  line = parseInt(line);
  if(max < line) {
    max = line;
    index = count;
  }
  count++;
}).on("close", () => {
  console.log(max);
  console.log(index);
  process.exit();
});