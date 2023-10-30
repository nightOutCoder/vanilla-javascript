console.log('Basic output based programs');

// Program 1
var x;
console.log(x); // undefined
x = 10;

// Program 2
console.log(a); // undefined
var a = 10;

// Program 3
var b = 25;
console.log(b); // 25
b = 35;

// Program 4
let c = 15;
console.log(c); // 15
c = 20;

// Program 5
let d;
console.log(d); // undefined
d = 12;

// Program 6
console.log(e); // ReferenceError: Cannot access 'e' before initialization
let e = 100;

// Program 7
const f = 650;
console.log(f); // Error as variable cannot be re-assigned
f = 700;

// Program 8
console.log(g); // ReferenceError: Cannot access 'g' before initialization
const g = 780;