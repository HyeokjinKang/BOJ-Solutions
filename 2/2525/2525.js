const rl = require("readline").createInterface(process.stdin, process.stdout);

let clock = [-1, -1];

rl.on("line", (line) => {
  if (clock[0] == -1) {
    clock = line.split(" ").map(Number);
  } else {
    line = Number(line);
    clock[1] += line;
    //분이 60분을 넘어간다면 시로 옮김
    clock[0] += Math.floor(clock[1] / 60);
    clock[1] = clock[1] % 60;
    //시가 24시를 넘어간다면 24시 이내로 수정
    clock[0] = clock[0] % 24;
    console.log(`${clock[0]} ${clock[1]}`);
  }
});
