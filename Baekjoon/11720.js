var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const number = Number(input[0]);
let numbers = input[1].split('');
let sum = 0;
for(let value of numbers){
    sum += Number(value);
}
console.log(sum)