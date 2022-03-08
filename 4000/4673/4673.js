const d = n => {
  let sum = 0;
  for(let i = 0; i < String(n).length; i++) {
    sum += Number(String(n)[i]);
  }
  return n + sum;
};

const numLine = new Set();

for(let i = 0; i < 10000; i++) {
  if(d(i) < 10000) {
    numLine.add(d(i));
  }
}
for(let i = 1; i < 10000; i++) {
  if(!numLine.has(i)) {
    console.log(i);
  }
}