const rl = require("readline").createInterface(process.stdin, process.stdout);

let angle = [];

rl.on("line", (line) => {
  angle.push(Number(line));
}).on("close", () => {
  angle.sort((a, b) => a - b);
  if (angle[0] + angle[1] + angle[2] != 180) return console.log("Error");
  if (angle[0] == angle[1] && angle[1] == angle[2]) return console.log("Equilateral");
  if (angle[0] == angle[1] || angle[1] == angle[2]) return console.log("Isosceles");
  console.log("Scalene");
});
