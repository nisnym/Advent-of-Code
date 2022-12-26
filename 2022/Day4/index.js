const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const lines = input.split('\n');

// console.log(lines);

let count = 0;



for(const line of lines){
    let [ones,twos] = line.split(',');
    let one = ones.split('-').map((n) => Number(n));
    let two = twos.split('-').map((n) => Number(n));
    console.log(one,two);
    if(Math.max(one[0],two[0]) <= Math.min(one[1],two[1]))
        count++;
}
console.log(count);

// for (const line of lines) {
//     let [ones, twos] = line.split(',');
//     // console.log(one,"sfuiush",two);
//     let one = ones.split('-').map((n) => Number(n));
//     let two = twos.split('-').map((n) => Number(n));
//     console.log(typeof(one),"ok ",one, two);
    
//     // console.log(one[0],one[1],two[0],two[1]);
//     if((one[0] >= two[0] && one[1] <= two[1] )
//     || (one[0] <= two[0] && one[1] >= two[1] )){
//         console.log(typeof(one),"ok ",one, two);

//         count++;
//     }
// }

// console.log(count);
