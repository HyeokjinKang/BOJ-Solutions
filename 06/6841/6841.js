let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let dict = {
  CU: "see you",
  ":-)": "I’m happy",
  ":-(": "I’m unhappy",
  ";-)": "wink",
  ":-P": "stick out my tongue",
  "(~.~)": "sleepy",
  TA: "totally awesome",
  CCC: "Canadian Computing Competition",
  CUZ: "because",
  TY: "thank-you",
  YW: "you’re welcome",
  TTYL: "talk to you later",
};

input.forEach((e) => {
  console.log(dict[e] != undefined ? dict[e] : e);
});
