//Quick Sort

const rl = require("readline").createInterface(process.stdin, process.stdout);
let n = 1;
let array = [];

rl.on("line", (line) => {
  if (n) return n--;
  array[array.length] = Number(line);
}).on("close", () => {
  quick(array);
});

const quick = (arr) => {
  if (arr.length < 2) return console.log(arr[0]);
  let pivot = arr[Math.round(arr.length / 2)];
  let j = arr.length - 1;
  for (let i = 0; i < j; i++) {
    if (arr[i] > arr[j]) {
      let k = arr[j];
      arr[j] = arr[i];
      arr[i] = k;
      j--;
    }
  }
  let left = arr.splice(0, Math.round(arr.length / 2));
  quick(left);
  quick(arr);
};
