let stack = [[1, 2, 3], [4, 5, 6]];

console.log(stack[0][0]);

//unshift 2 items from stack[0] to stack[1]
console.log(...stack[0]);
stack[1].unshift(...stack[0].splice(0, 2));

console.log(stack);
// Output: [[1, 2], [4, 5, 6, 3]]

//stack[1].unshift(stack[0].shift());
