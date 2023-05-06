let fs = require("fs");
let [now, end] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

while (now <= end) {
  console.log(`All positions change in year ${now}`);
  now += 60;
}
