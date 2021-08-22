const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
  line = Number(line) - 1;
  if (line == -1) return console.log(0);
  console.log(fibonacci(0, 1, line));
});

const fibonacci = (n, m, r) => {
  if(r == 0) return m;
  return fibonacci(m, n + m, r - 1);
};