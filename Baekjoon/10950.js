var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
let number = Number(input[0]);
for (let i = 1; i <= number; i++){
    let temp = input[i].split(' ');
    console.log(Number(temp[0]) + Number(temp[1]));
}
