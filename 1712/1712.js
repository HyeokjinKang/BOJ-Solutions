const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
    line = line.split(" ").map(Number);
    if(line[1] >= line[2]) {
        console.log(-1);
    } else {
        console.log(Math.floor(line[0] / (line[2] - line[1])) + 1);
    }
});