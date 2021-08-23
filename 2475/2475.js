const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  line = line.split(" ");
  result = 0;
  for (let i = 0; i < 5; i++) {
    result += Number(line[i]) ** 2;
  }
  console.log(result % 10);
});
