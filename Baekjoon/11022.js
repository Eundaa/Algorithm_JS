var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let len = Number(input[0]);
for (let i = 1; i < len + 1; i ++){
    let numbers = input[i].split(' ');
    let a = Number(numbers[0]);
    let b = Number(numbers[1]);
    console.log("Case #" + i + ": "+ a + " + " + b + " = " + (a+b));
}
