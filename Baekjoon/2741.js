var input = require('fs').readFileSync('/dev/stdin').toString();
let answer = '';
for(let i = 1; i <= Number(input); i++){
    answer += i + '\n';
}
console.log(answer);