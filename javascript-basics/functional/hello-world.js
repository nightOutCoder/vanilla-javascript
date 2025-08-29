// const sayHello = name => console.log(`Hello, ${name}!`);
// sayHello('World');

// const numbers = [1, 2, 3, 4, 5];
// numbers[0]=  10;
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

const person = {
    name: 'john',
    age: 34,
};

person.name = 'susan';


//***************************************************//
const myage = () => console.log('I am 34 years old');
myage();


const myAdd = (a, b) => a + b;
console.log(myAdd(1,2));


// In case of returning object we need to wrap the object in parenthesis
const myObject = () => ({
    name: 'john',
    age: 34,
});
console.log(myObject());

const myData = (a,b) => {
    console.log('I am 30 years old');
    return a+b;
}
console.log(myData(10,2));
//***************************************************//
const hello1 = name => console.log(`Hello!, ${name}!`);
const hello2 = hello1;
hello2('World');


const PRODUCTION = false;
const production = () => console.log('This is production');
const development = () => console.log('This is development');
const finalResult = PRODUCTION ? production : development;
finalResult();