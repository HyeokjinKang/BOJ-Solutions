const rl = require("readline").createInterface(process.stdin, process.stdout);

input = 0;
array = [];

rl.on("line", (line) => {
  line = line
    .split(" ")
    .map(Number)
    .map((n) => n - 1);
  if (input == 0) for (i = 0; i <= line[0]; i++) array.push(i + 1);
  else {
    const temp = array.slice();
    for (let i = line[0]; i <= line[1]; i++) {
      array[i] = temp[line[2] + i - line[0] > line[1] ? line[2] + i - line[1] - 1 : line[2] + i - line[0]];
    }
  }
  input++;
}).on("close", () => {
  console.log(array.join(" "));
});
