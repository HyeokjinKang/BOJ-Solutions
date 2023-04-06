let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
let array = [];
let count = new Array(8001);
let min = 9999;
let max = -9999;
let sum = 0;

for (let i = 1; i < input.length - 1; i++) {
  sum += input[i];
  array.push(input[i]);
  if (min > input[i]) min = input[i];
  if (max < input[i]) max = input[i];
  count[input[i] + 4000] == undefined ? (count[input[i] + 4000] = { num: input[i], count: 1 }) : count[input[i] + 4000].count++;
}

array.sort((a, b) => a - b);
count.sort((a, b) => {
  if (a == undefined) a = { num: 0, count: 0 };
  if (b == undefined) b = { num: 0, count: 0 };
  if (a.count != b.count) return b.count - a.count;
  else return a.num - b.num;
});

let avg = Math.round(sum / (input.length - 2));
console.log(avg == 0 ? 0 : avg);
console.log(array[Math.floor((input.length - 2) / 2)]);
console.log(count[1] != undefined ? (count[0].count == count[1].count ? count[1].num : count[0].num) : count[0].num);
console.log(max - min);
