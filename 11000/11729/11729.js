const rl = require("readline").createInterface(process.stdin, process.stdout);
let output = "";
let sum = 0;

rl.on("line", (line) => {
  hanoi(line, 1, 2, 3);
  console.log(sum);
  console.log(output);
});

const hanoi = (n, a, b, c) => {
  sum++;
  if (n == 1) output += a + " " + c + "\n";
  else {
    hanoi(n - 1, a, c, b);
    output += a + " " + c + "\n";
    hanoi(n - 1, b, a, c);
  }
};
