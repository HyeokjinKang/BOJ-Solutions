const rl = require("readline").createInterface(process.stdin, process.stdout);

let output = ["***", "* *", "***"];

rl.on("line", (line) => {
  line = Number(line);
  console.log(pattern(3, line));
});

const pattern = (n, t) => {
  if (n == t) return output.join("\n");
  let save = output.slice();
  let s = 0;
  for (let i = 0; i < 3; i++) {
    if (i == 1) {
      for (let j = 0; j < save.length; j++) {
        output[s] = save[j] + " ".repeat(save[j].length) + save[j];
        s++;
      }
    } else {
      for (let j = 0; j < save.length; j++) {
        output[s] = save[j].repeat(3);
        s++;
      }
    }
  }
  return pattern(n * 3, t);
};
