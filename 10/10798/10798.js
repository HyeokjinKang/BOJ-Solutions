const rl = require("readline").createInterface(process.stdin, process.stdout);

let arr = [];

rl.on("line", (line) => {
  arr.push(line.split(""));
}).on("close", () => {
  let result = "";
  for (let j = 0; j < 15; j++) {
    let string = "";
    for (let i = 0; i < 5; i++) {
      if (arr[i][j]) string += arr[i][j];
    }
    result += string;
  }
  console.log(result);
});
