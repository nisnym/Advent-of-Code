const { count } = require('console');
const fs = require('fs');

const input = fs.readFileSync('input.txt','utf-8');

// console.log(input);

const lines = input.split('\n');


let stack = {
    1: [lines[0][1],lines[1][1],lines[2][1],lines[3][1],lines[4][1],lines[5][1],lines[6][1],lines[7][1]],
    2: [lines[0][5],lines[1][5],lines[2][5],lines[3][5],lines[4][5],lines[5][5],lines[6][5],lines[7][5]],
    3: [lines[1][9],lines[2][9],lines[3][9],lines[4][9],lines[5][9],lines[6][9],lines[7][9]],
    4: [lines[3][13],lines[4][13],lines[5][13],lines[6][13],lines[7][13]],
    5: [lines[1][17],lines[2][17],lines[3][17],lines[4][17],lines[5][17],lines[6][17],lines[7][17]],
    6: [lines[4][21],lines[5][21],lines[6][21],lines[7][21]],
    7: [lines[2][25],lines[3][25],lines[4][25],lines[5][25],lines[6][25],lines[7][25]],
    8: [lines[5][29],lines[6][29],lines[7][29]],
    9: [lines[0][33],lines[1][33],lines[2][33],lines[3][33],lines[4][33],lines[5][33],lines[6][33],lines[7][33]]
};


//print the value of key 2 of stack
console.log(stack[8]);

const move = lines.slice(10).map((step) => step.split(' '));

// console.log(move);

for (const line of move){
    let count = line[1];
    let from = line[3];
    let to = line[5];
    // console.log(count,from,to);
    stack[to].unshift(...stack[from].splice(0, count));


    //part1
    // while(count > 0){
    //     stack[to].unshift(stack[from].shift());
    //     count--;
    // }
}
console.log(stack[1][0],stack[2][0],stack[3][0],stack[4][0],stack[5][0],stack[6][0],stack[7][0],stack[8][0],stack[9][0]);

  console.log(stack);

  //ZQRVPDM