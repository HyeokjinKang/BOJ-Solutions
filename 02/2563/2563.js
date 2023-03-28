const rl = require("readline").createInterface(process.stdin, process.stdout);

let fill = Array.from({ length: 100 }, () => Array.from({ length: 100 }, () => 0));
let input = 0;

rl.on("line", (line) => {
  if (input != 0) {
    line = line.split(" ").map(Number);
    for (let i = line[0]; i < line[0] + 10; i++) {
      for (let j = line[1]; j < line[1] + 10; j++) {
        fill[i][j] = 1;
      }
    }
  }
  input++;
}).on("close", () => {
  let count = 0;
  fill.map((x) => {
    x.map((y) => {
      if (y == 1) count++;
    });
  });
  console.log(count);
});
