const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  line = line.split(" ").map(Number);
  let count = 1;
  for (let i = 1; i <= line[0]; i++) {
    if (line[0] % i == 0) {
      if (count == line[1]) return console.log(i);
      count++;
    }
  }
  console.log(0);
});
