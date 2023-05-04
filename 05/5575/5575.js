let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach((e) => {
  [h1, m1, s1, h2, m2, s2] = e.split(" ").map(Number);
  let h = h2 - h1;
  let m = m2 - m1;
  if (m < 0) {
    h--;
    m += 60;
  }
  let s = s2 - s1;
  if (s < 0) {
    m--;
    s += 60;
    if (m < 0) {
      h--;
      m += 60;
    }
  }
  console.log(`${h} ${m} ${s}`);
});
