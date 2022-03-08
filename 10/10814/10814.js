const rl = require("readline").createInterface(process.stdin, process.stdout);
let n = 1;
let array = [];

rl.on("line", (line) => {
  if (n) return n--;
  array.push(line.split(" "));
  array[array.length - 1][0] = Number(array[array.length - 1][0]);
}).on("close", () => {
  let result = "";
  mergeSort(array).forEach((n) => console.log(`${n[0]} ${n[1]}`));
});

const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  let leftArr = arr.splice(0, Math.round(arr.length / 2));
  let left = mergeSort(leftArr);
  let right = mergeSort(arr);
  let i = 0;
  let j = 0;
  let a = [];
  while (i + j != left.length + right.length) {
    if (j == right.length) {
      a.push(left[i]);
      i++;
    } else if (i == left.length) {
      a.push(right[j]);
      j++;
    } else if (left[i][0] > right[j][0]) {
      a.push(right[j]);
      j++;
    } else {
      a.push(left[i]);
      i++;
    }
  }
  return a;
};
