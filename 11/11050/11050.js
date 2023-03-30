const rl = require("readline").createInterface(process.stdin, process.stdout);

const fact = (n) => {
  var result = 1;
  for (var i = 2; i <= n; i++) result *= i;
  return result;
};

rl.on("line", (line) => {
  line = line.split(" ").map(Number);
  console.log(fact(line[0]) / (fact(line[1]) * fact(line[0] - line[1])));
});
