const rl = require("readline").createInterface(process.stdin, process.stdout);
const sum = (a, b) => Number(a) + Number(b);
rl.on("line", (line) => {
  let start = line - 9 * line.length;
  line = Number(line);
  for (let i = start; i < line; i++) {
    if (i + Number([...i.toString()].reduce(sum)) == line) {
      return console.log(i);
    }
  }
  console.log(0);
});
