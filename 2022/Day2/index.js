const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8');
// it fully reads the files content and returns it as a string

const scores = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3
};


const lines = input.split('\n');

let finaltotal = 0;

for (const line of lines) {
    const [my, your] = line.split(' ');
    let total = 0;
    // console.log(score);
    if(your === 'Y'){
        let s = scores[my];
        s = s + 3;
        total += s;
    }
    else if(your === 'Z'){
        if(my === 'A'){
            let s = 2;
            s = s + 6;
            total += s;
        }
        else if (my === 'B'){
            let s = 3;
            s = s + 6;
            total += s;
        }
        else{
            total += 7;
        }
         
    }
    else {
        if(my == 'A')
            total += 3;
        else if(my == 'B')
            total += 1
        else 
            total += 2
    }
    // console.log(total);
    finaltotal += total;
}
console.log(finaltotal)
// console.log(input);


//part 1
// for (const line of lines) {
//     const [my, your] = line.split(' ');
//     let score = scores[your];
//     // console.log(score);
    
//     if ((my === 'A' && your === 'X')
//     || (my === 'B' && your === 'Y')
//     || (my === 'C' && your === 'Z')) {
//         score += 3;
//     }
//     else if ((my === 'A' && your === 'Y') 
//         ||   (my === 'C' && your === 'X')
//         ||   (my === 'B' && your === 'Z')) {
//         score += 6;
//     }
//     console.log(`${my} vs  ${your}  so ${score}`);
//     total += score;
// }