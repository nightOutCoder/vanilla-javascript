console.log('Output Based questions');

// Program : 1
console.log(true === true); // true
console.log(true == true); // true
console.log(true === false); // false

// Program : 2
console.log(1 === true); // false
console.log(true == 1); // true
console.log(0 == false); // true

// Program : 3
console.log(0 == null); // *false
console.log(0 == undefined); // *false

// Program : 4
console.log(0 == !!null); // true
console.log(0 == !!undefined); // true

// Program : 5
console.log(null === null); // true
console.log(null === undefined); // false

// Program : 6
console.log(typeof null); // object 
console.log(typeof undefined); // undefined

// Program : 7
console.log(null == undefined); // true 

// Program : 8
console.log([1,2,3] + [4,5,6])  // 1,2,34,5,6

// Program : 9
console.log(3 == 3); // true
console.log(3 == '3'); // true
console.log(3 === 3); // true
console.log(3 === '3'); // false

// Program : 10
const number1 = new Number(3);
const number2 = new Number(3);
console.log(number1 == 3); // true
console.log(number1 == number2); // false

// Program : 11
console.log('hello' === 'hello'); // true
console.log('hello' == 'hello'); // true
console.log('hello' === 'Hello'); // false

// Program : 12
const string1 = 'hello';
const string2 = String('hello');
const string3 = new String('hello');
const string4 = new String('hello');

// Program : 13
console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true

// Program : 14
var x1 = new Object()
var x2 = new String()
var x3 = new Number()
var x4 = new Array()
var x5 = new Date()
console.log(typeof(x1))
console.log(typeof(x2))
console.log(typeof(x3))
console.log(typeof(x4))
console.log(typeof(x5))

// Program : 15
// alert('' == '0') //false
// alert(0 == '') //true
// alert(0 == '0') // true

// Program : 16
const object1 = {
    key: 'value',
  };
const object2 = {
    key: 'value',
};
console.log(object1 === object2); // false
console.log(object1 === object1); // true

// Program : 17
const a = [1, 2, 3];
const b = '1,2,3';
console.log(a == b); // true

// Program : 18
const c = [true, 0.5, 'hey'];
const d = c.toString(); // "true,0.5,hey"
console.log(c == d); // true

