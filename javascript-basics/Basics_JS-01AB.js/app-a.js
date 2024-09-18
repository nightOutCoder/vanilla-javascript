console.log('Asynchronous operation based Output questions');

// Program : 1
setTimeout(() => console.log('1'), 0);
Promise.resolve().then(() => console.log('2'));
console.log('3'); // 3 2 1

// Program : 2
console.log('script start'); 
setTimeout(function () {
console.log('setTimeout');
}, 0);
Promise.resolve()
.then(function () {
console.log('promise1'); 
})
.then(function () {
console.log('promise2'); 
});
console.log('script end');

// Program : 3
console.log('111');
const object = {
  message: 'Hello World!',
  logMessage() {
    console.log(this.message);
  },
};
setTimeout(object.logMessage, 0); // undefined

