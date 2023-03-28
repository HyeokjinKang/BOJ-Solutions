const rl = require("readline").createInterface(process.stdin, process.stdout);

const grade = {
  "A+": 4.5,
  A0: 4,
  "B+": 3.5,
  B0: 3,
  "C+": 2.5,
  C0: 2,
  "D+": 1.5,
  D0: 1,
  F: 0,
};

let score = 0;
let credit = 0;

rl.on("line", (line) => {
  line = line.split(" ");
  if (line[2] != "P") {
    score += Number(line[1]) * grade[line[2]];
    credit += Number(line[1]);
  }
}).on("close", () => {
  console.log(score / credit);
});
