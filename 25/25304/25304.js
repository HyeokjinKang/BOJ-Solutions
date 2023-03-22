const rl = require("readline").createInterface(process.stdin, process.stdout);

let input = 0;
let sum = 0;
let calc = 0;

rl.on("line", (line) => {
  if (input == 0) sum = Number(line);
  else if (input != 1) {
    line = line.split(" ").map(Number);
    calc += line[0] * line[1];
  }
  input++;
}).on("close", () => {
  if (calc == sum) console.log("Yes");
  else console.log("No");
});
