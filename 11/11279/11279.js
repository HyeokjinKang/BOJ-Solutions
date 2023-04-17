let fs = require("fs");
let [n, ...x] = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);
let heap = [];

const heapSort = (n) => {
  if (n == 0) return;
  let i = parseInt((n - 1) / 2);
  if (heap[i] < heap[n]) {
    let temp = heap[n];
    heap[n] = heap[i];
    heap[i] = temp;
    heapSort(i);
  }
};

const heapDel = (n) => {
  let [i, i1, i2] = [0, 2 * n + 1, 2 * n + 2];
  if (heap[i1] != undefined && heap[i2] != undefined) i = heap[i1] < heap[i2] ? i2 : i1;
  else if (heap[i1] != undefined) i = i1;
  else if (heap[i2] != undefined) i = i2;
  else return;
  if (heap[i] > heap[n]) {
    let temp = heap[n];
    heap[n] = heap[i];
    heap[i] = temp;
    heapDel(i);
  }
};

let result = "";
for (let i = 0; i < n; i++) {
  if (x[i] == 0) {
    if (heap.length == 0) {
      result += `0\n`;
      continue;
    }
    result += `${heap[0]}\n`;
    if (heap.length == 1) heap = [];
    else {
      heap[0] = heap.pop();
      heapDel(0);
    }
  } else {
    heap.push(x[i]);
    heapSort(heap.length - 1);
  }
}

console.log(result);
