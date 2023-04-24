let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((e, i) => {
  if (e == "0") return;
  console.log(`Case ${i + 1}: Sorting... done!`);
});
