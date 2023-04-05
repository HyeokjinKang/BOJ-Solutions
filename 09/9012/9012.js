let fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i < input.length - 1; i++) {
  let vps = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "(") vps++;
    else if (input[i][j] == ")") vps--;
    if (vps < 0) {
      break;
    }
  }
  console.log(vps == 0 ? "YES" : "NO");
}
