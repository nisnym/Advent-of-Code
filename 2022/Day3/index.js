const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');

const values = {
    // a to z values is 1 to 26
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    // A to Z values is 27 to 52
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52
};

const lines = input.split('\n');

let total = 0;

//to find the size of input

const size = Object.keys(lines).length;

for(let i = 0 ; i < size; i = i + 3){
    let first = lines[i];
    let second = lines[i+1];
    let third = lines[i+2];
    let common = first.split('').filter((c) => second.includes(c));
    let finalcommon = common.filter((c) => third.includes(c));
    console.log(finalcommon);
    let value = values[finalcommon[0]];
    total += value;
}
console.log(total);
//part 1
// for (const line of lines) {
//     let mid = line.length / 2;
//     let first = line.slice(0, mid);
//     let second = line.slice(mid);
//     console.log(first, second);
//     let common = first.split('').filter((c) => second.includes(c));
//     let value = values[common[0]];
//     total += value;
// }

// console.log(total);
// split sting in two parts of its size
