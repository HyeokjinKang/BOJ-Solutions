const rl = require("readline").createInterface(process.stdin, process.stdout);

rl.on("line", line => {
    line = line.split(' ').map(Number);
    console.log(Math.ceil((line[2] - line[1]) / (line[0] - line[1])));
    rl.close();
});