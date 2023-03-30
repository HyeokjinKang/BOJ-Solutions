// 그냥 브루트포스하면 안됨?

const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  line = line.split(" ").map(Number);
  let find = 0;
  let divisor = 1;
  let i = 0;
  while (find < 2) {
    i++;
    if (line[0] % i == 0 && line[1] % i == 0) divisor = i;
    if (find == 0 && (i == line[0] || i == line[1])) find = 1;
    if (i % line[0] == 0 && i % line[1] == 0) find = 2;
  }
  console.log(divisor, i);
});
