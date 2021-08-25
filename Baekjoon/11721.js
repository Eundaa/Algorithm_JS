var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
for(let i = 0; i < input[0].length; i += 10 ){
    console.log(input[0].slice(i, i+10));
}