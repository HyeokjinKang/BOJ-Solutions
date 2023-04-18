let fs = require("fs");
let [n, arr] = fs.readFileSync("/dev/stdin").toString().split("\n");
arr = arr.split(" ");
let history = [];

let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].slice(arr[i].length - 6) == "Cheese" && history.indexOf(arr[i]) == -1) {
    history.push(arr[i]);
    count++;
  }
}

console.log(count > 3 ? "yummy" : "sad");
