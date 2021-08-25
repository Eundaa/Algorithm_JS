var input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
for(let i = 0; i < input.length; i++){
    let numbers = input[i].split(' ');
    let a = Number(numbers[0]);
    let b = Number(numbers[1]);
    if(a === 0 && b === 0){
        break;
    } else{
        console.log(a + b);
    }
}