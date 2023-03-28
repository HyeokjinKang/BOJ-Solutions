const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  if (line == "-1") return;
  line = Number(line);
  let string = `${line} = 1`;
  let sum = 1;
  for (let i = 2; i <= line / 2; i++) {
    if (line % i == 0) {
      sum += i;
      string += ` + ${i}`;
    }
  }
  if (sum == line) console.log(string);
  else console.log(`${line} is NOT perfect.`);
});
