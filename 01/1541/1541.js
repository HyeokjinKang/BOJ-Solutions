let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let greedy = (s) => {
  let sum = 0;
  let prev = 0;
  let isTracking = 0;
  s += "-";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "-") {
      if (isTracking) {
        let gre = greedy(s.slice(prev, i));
        sum += gre > 0 ? -1 * gre : gre;
      } else {
        sum += Number(s.slice(prev, i));
        isTracking = 1;
      }
      prev = i + 1;
    } else if (s[i] == "+") {
      if (!isTracking) {
        sum += Number(s.slice(prev, i));
        prev = i + 1;
      }
    }
  }
  return sum;
};

console.log(greedy(input));
