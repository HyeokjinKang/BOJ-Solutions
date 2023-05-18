let fs = require("fs");
let [n, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let regex = /^(((10)[0]+[1]+)|(01))+$/;

input.forEach((e) => {
  console.log(regex.test(e) ? "YES" : "NO");
});
