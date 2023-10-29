console.log('Output Based questions');


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



console.log(true === true); // true
console.log(true == true); // true
console.log(true === false); // false
console.log(1 === true); // false
console.log(true == 1); // true
console.log(0 == false); // true
console.log(0 == null); // false
console.log(0 == undefined); // false
console.log(0 == !!null); // true, look at Logical NOT operator
console.log(0 == !!undefined); // true, look at Logical NOT operator

console.log(null === null); // true
console.log(null === undefined); // false
console.log(null == undefined); // true

console.log([1,2,3] + [4,5,6])  // 1,2,34,5,6