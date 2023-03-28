const rl = require("readline").createInterface(process.stdin, process.stdout);

let max = 0;
let loc = [1, 1];
let input = 0;

rl.on("line", (line) => {
  line = line.split(" ").map(Number);
  for (let i = 0; i < line.length; i++) {
    if (line[i] > max) {
      max = line[i];
      loc = [input + 1, i + 1];
    }
  }
  input++;
}).on("close", () => {
  console.log(max);
  console.log(loc.join(" "));
});
