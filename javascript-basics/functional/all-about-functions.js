/* Functions as data */
const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const triple = (x) => x * 3;
const add5 = (x) => x + 5;

const functionArray = [double, subtractOne, triple, add5];
var number = 5;
functionArray.forEach((func) => number = func(number));
console.log(number);



/* Passing functions as arguments */
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2and3 = func => func(2, 3);
console.log(combine2and3(add)); // passing named function 
console.log(combine2and3((x, y) => x + y)); // passing annonymous function
console.log(combine2and3(subtract)); // passing named function 
console.log(combine2and3((x, y) => x - y)); // passing annonymous function



/* Returning functions */
const oldWayToCreatePrinter = function abc() {
    return function xyz() {
        console.log('Hello..');
    }
};
const result = oldWayToCreatePrinter();
console.log(result);
result();
oldWayToCreatePrinter()();


const createPrinter = () => () => console.log('Hello...');
const print = createPrinter();
print();
createPrinter()();



const functionMul2 = x => x * 2;
const functionMul3 = x => x * 3;
const functionMul4 = x => x * 4;
console.log(functionMul2(2));
console.log(functionMul3(2));
console.log(functionMul4(2));


const combindedMulFunction = function(x){
    return function(y){
        return x * y;
    }
} 
const rs = combindedMulFunction(2);
console.log(rs(200));


const createMultiplier = x => y => x * y;
const doubleValue = createMultiplier(2);
const tripleValue = createMultiplier(3);
const quadrupleValue = createMultiplier(4);
console.log(doubleValue(20));
console.log(tripleValue(20));
console.log(quadrupleValue(20));


/* Higher Order function example */
const divide = (x,y) => {
    if(y === 0){
        console.log('Divide by zero error');
        return null;
    }
    return x/y;
}
// Note : - Divide function not surving the single responsibility principle. it is doing two things. one is divide and another is checking if second argument is not zero.
// **we can achieve this by creating a higher order function.


const divideOperation = (x,y) => x/y;
const safeSecondArgument = func =>
    (...args) => {
        if(args[1] === 0){
            console.log('Divide by zero error');
            return null;
        }
        return func(...args);
    }
const divideSafe = safeSecondArgument(divideOperation);
console.log(divideSafe(10,0));
console.log(divideSafe(10,2));



/* closure */
const closureExample = () => {
    const x = 10;
    return () => console.log(`The value of x is ` + x);
}
const closureResult = closureExample();
closureResult();


/* Impliment Private */
const Person = ({name, age, job}) => {
    var _name = name;
    var _age = age;
    var _job = job;

    return {
        getName: () => _name,
        getAge: () => _age,
        getJob: () => _job,

        setjob: newJob => _job = newJob,
    };
}

const person = Person({name: 'John', age: 32, job: 'Developer'});
console.log(person.getName());
person.setjob('Manager');
console.log(person.getJob());





