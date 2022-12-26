const fs = require('fs');

const input = fs.readFileSync('input.txt','utf-8');

console.log(input.length);
//split after 4 characters
i = 14;
let slice = input.slice(i-14, i);
console.log(slice);

// let chars = new Set();
for(let i = 14; i<input.length; i++){
    //write an statement to check for 14 distinct characters
    let slice = input.slice(i-14, i);
    for(let j = 0; j<slice.length; j++){
        let char = slice[j];
        if(slice.indexOf(char) !== slice.lastIndexOf(char)){
            break;
        }
        if(j === 13){
            console.log(i);
            console.log(slice);
        }
    }
}
//     //part 1
//     // if(input[i] !== input[i+1] && input[i] !== input[i+2] && input[i] !== input[i+3] && input[i+1] !== input[i+2] && input[i+1] !== input[i+3] 
//     //     && input[i+2] !== input[i+3]){
//     //     console.log(i);
//     //     console.log(input[i],input[i+1],input[i+2],input[i+3]);
//     //     break;
//     // }
//     //to check for 14 distinct characters
// }

