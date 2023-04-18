let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

const parse = (s) => {
  s = s.slice(2, s.length - 2).split(" ");
  let depth = 0;
  let start = 0;
  let byte = 8;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "") continue;
    if (s[i] == "[") {
      if (depth == 0) start = i;
      depth++;
    } else if (s[i] == "]") {
      depth--;
      if (depth == 0) {
        if (start + 1 == i) {
          byte += 8;
        } else {
          byte += parse(s.slice(start, i + 1).join(" "));
        }
      }
    } else if (depth == 0) {
      try {
        s[i] = BigInt(s[i]);
        byte += 8;
      } catch (e) {
        byte += s[i].length + 12;
      }
    }
  }
  return byte;
};

console.log(parse(input));
