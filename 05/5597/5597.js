const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

rl.on("line", (line) => {
  arr.splice(arr.indexOf(Number(line)), 1);
}).on("close", () => {
  console.log(arr.join("\n"));
});
