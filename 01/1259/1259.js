const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", (line) => {
  if (line == "0") return;
  let isPalindrome = true;
  for (let i = 0; i < parseInt(line.length / 2); i++) {
    if (line[i] !== line[line.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  console.log(isPalindrome ? "yes" : "no");
});
