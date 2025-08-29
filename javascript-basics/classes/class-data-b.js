// In javascript, that is use to imporve the quality of javascript programming pratice

// examples of 'strict mode'


// Assignment to a non-writable global
//"use strict"
// undefined = 5;
// Infinity = 5
// console.log(Infinity);

const fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // TypeError: Cannot add property newProp, object is not extensible
