const rl = require("readline").createInterface(process.stdin, process.stdout);

let cordinates = new Array(200001);
let i = 0;

rl.on("line", (line) => {
  if (i == 0) return i++;
  line = line.split(" ").map(Number);
  if (cordinates[line[1] + 100000] == undefined) cordinates[line[1] + 100000] = [];
  cordinates[line[1] + 100000].push(line[0]);
}).on("close", () => {
  for (let i = 0; i <= 200000; i++) {
    if (cordinates[i] != undefined) {
      let result = "";
      mergeSort(cordinates[i]).forEach((e) => (result += `${e} ${i - 100000}\n`));
      process.stdout.write(result);
    }
  }
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
    if (i == left.length) {
      a.push(right[j]);
      j++;
    } else if (j == right.length) {
      a.push(left[i]);
      i++;
    } else if (left[i] >= right[j]) {
      a.push(right[j]);
      j++;
    } else {
      a.push(left[i]);
      i++;
    }
  }
  return a;
};
