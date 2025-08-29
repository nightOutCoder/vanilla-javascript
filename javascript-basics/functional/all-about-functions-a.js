/* Spread Operator with Objects */
const person = {
    name: 'John',
    age: 25,
    eyeColor: 'blue',
};
const careerData = {
    title: 'Software Developer',
    company: 'Google',
    eyeColor: 'brown', /*It will override the previous one */
};

const personWithCareerData = {
    // name: person.name,
     ...person,
     ...careerData,
 };
console.log(personWithCareerData);

const updatePerson = {
    name: 'Rohny',
}
const personWithUpdatedName = {
    ...person,
    ...updatePerson,
};
console.log(personWithUpdatedName);




/* Spread operator with Arrays */
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [
    100, 
    ...numbers, 
    6];
console.log(newNumbers);


/* Map function */
const integerData = [1, 2, 3, 4, 5, 2, 1];
const doubleTheValue = [];
for(let i = 0 ; i < integerData.length; i++){
    doubleTheValue.push(integerData[i] * 2);
}
console.log(doubleTheValue);

const double = x => x * 2;
const newDoubledData = integerData.map(double);
console.log(newDoubledData);


/* Filter function */
const filterDataArray = [];
for(let i = 0 ; i < integerData.length; i++){
    if(integerData[i] > 2){
        filterDataArray.push(integerData[i]);
    }
}
console.log(filterDataArray);

const filterData = x => x > 2;
const filterDataResult = integerData.filter(filterData);
console.log(filterDataResult);

const isEven = x => x % 2 === 0;
const filterEvenData = integerData.filter(isEven);
console.log(filterEvenData);

/* Achieve names having more then five character in name */
const nameList = ['Johnye', 'Rohnyee', 'Doe', 'Janee', 'Doeee'];
const nameLongerThanFive = x => x.length > 5;
const filterNameList = nameList.filter(nameLongerThanFive);
console.log(filterNameList);

/* Achieve names having more then five character in name via higer order function */
const createLength = minLength => word => word.length > minLength;
const filterNameListData = nameList.filter(createLength(5));
console.log(filterNameListData);

/* Some and Every */
const hrData = [
{name: 'John', salary: 25000},
{name: 'Rohny', salary: 30000},
{name: 'Doe', salary: 40000},
{name: '', salary: 50000},
]; 
const salaryGreaterThan30k = x => x.salary > 30000;
const emptyName = x => !!x.name;
console.log(hrData.some(salaryGreaterThan30k));
console.log(hrData.every(emptyName));


/* Slice - Does not mutate the array : This is not a higher oder function */
/* Turn mutating functions into non-mutating functions */

const sliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sliceResult = sliceArray.slice(2, 5);  /* Get section of an array */
console.log(sliceResult);

console.log(sliceArray.slice().reverse()); /* Create a copy and do respective operation on that */
console.log(sliceArray);

/* sort : is a Mutating function */
const unSortedArray = [100, 2, 3, 4, 5, 6, 7, 8, 90];

const ascedningOrder = (a,b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
const descendingOrder = (a,b) => {
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
}
const sortedArray = unSortedArray.slice().sort(ascedningOrder); 
console.log(sortedArray);



/* Reduce : Take array array of data and reduce it to down to a single value */
const reduceInputData = [2, 4, 5, 6, 2];

var initialValueOfAccumulator = 0;
const reduceSumData = reduceInputData.reduce((acc, element) => {
    console.log(`acc => ${acc}, element => ${element}`);
    return acc + element
}, initialValueOfAccumulator);

console.log(reduceSumData);

/* Chaining Arrays Functions */

const employees = [
    {
        name: 'John Doe',
        age: 53,
        profession: 'developer',
        salary: 70000,
    },
    {
        name: 'Rohny Doe',
        age: 53,
        profession: 'engineer',
        salary: 75000,
    },
    {
        name: 'Tony Doe',
        age: 53,
        profession: 'developer',
        salary: 75000,
    },
    {
        name: 'Tony Doe',
        age: 53,
        profession: 'constructions',
        salary: 15000,
    },
];
const developers = employees.filter(employee => employee.profession === 'developer');
console.log(developers);
const developerSalaries = developers.map(developer => developer.salary);
console.log(developerSalaries);
const sumOfDevSalary = developerSalaries.reduce((acc, salary) => acc + salary, 0);
console.log(sumOfDevSalary);
const avgDevSalary = sumOfDevSalary / developerSalaries.length;
console.log(avgDevSalary);

const nonDevelopers = employees.filter(employee => employee.profession !== 'developer')
console.log(nonDevelopers);
const sumOfNonDevSalary = nonDevelopers.map(nonDeveloper => nonDeveloper.salary);
console.log(sumOfNonDevSalary);
const sumOfNonDevSalaryData = sumOfNonDevSalary.reduce((acc, salary) => acc + salary, 0);
console.log(sumOfNonDevSalaryData);
const avgNonDevSalary = sumOfNonDevSalaryData / sumOfNonDevSalary.length;
console.log(avgNonDevSalary);

console.log(`${avgDevSalary} ${avgNonDevSalary}`);



/* map function implementation - via loop */
const map = (arr, fun) => {
    const result = [];

    for(let i = 0 ; i < arr.length; i++){
        result.push(fun(arr[i]));
    }
    return result;
};
const mapResult = map([1, 2, 3], x => x * 2);
console.log(mapResult);
const mapUpperCase = map(['john', 'doe'], x => x.toUpperCase());
console.log(mapUpperCase);
const minunData = map([-1, -2, -3], x => -x);
console.log(minunData);



/* map function implementation - via reducer  */
const mapImplementationViaReducer = (arr, fun) => {
    return arr.reduce((acc, element) => [
        ...acc,
        fun(element),
    ],[]);
};
const mapResultViaReducer = mapImplementationViaReducer([1, 2, 3], x => x * 2);
console.log(mapResultViaReducer);
const mapUpperCaseViaReducer = mapImplementationViaReducer(['john', 'doe'], x => x.toUpperCase());
console.log(mapUpperCaseViaReducer);

/* Recusion */

const printToZero = (num) =>{
    if(num < 0) return;
    console.log(num);
    printToZero(num-1);
}
printToZero(10);

console.log('----------------------');

const printUpToSpecificNumber = (num, max) => {
    if(num > max) return;
    console.log(num);
    printUpToSpecificNumber(num+1, max);
}
printUpToSpecificNumber(0, 10);


/* Functions as Objects */
const sayHello = () => console.log('Hello');
console.log(sayHello.name);

const add = (a, b ,c ) =>  a + b + c;
console.log(add.length);


/* Functions having properties which themeselves are functions */
console.log(add.toString());
const myData = function(){
    console.log('Hello');
};
console.log(myData.toString());

/* currying */
const addFunction = (x, y, z ) => x + y + z;
function addFunctionOldWay(x) {
    return function(y, z) {
        return addFunction(x, y, z);
    }
}
const result = addFunctionOldWay(5);
const finalSum = result(6, 7);
console.log(finalSum);


/* Apply the first argument in the beginning & leave the last two for later part of code */
// const addFunction = (x, y, z ) => x + y + z;
// const addPartial = x => (y, z) => addFunction(x, y, z);
// const addFive = addPartial(5);
// const sum = addFive(6, 7);
// console.log(sum);


/* Apply the first two argument in the beginning & leave the last one for later part of code */
// const addPartial = (x,y) => z => addFunction(x, y, z);
// const addFive = addPartial(5,6);
// const sum = addFive(7);
// console.log(sum);


/* Apply each argument one at a time */
// const addPartial = x => y => z => addFunction(x, y, z);
// const addFive = addPartial(5);
// const add7 = addFive(6);
// const sum = add7(7);
// console.log(sum);


/* elegent way of above */
const addPartial = x => y => z => addFunction(x, y, z);
const sum = addPartial(5)(6)(7); /* currryiung */
console.log(sum);



/* call & apply - just call our function */
const callFunction = (a,b,c) => a + b + c;
console.log("call : ",callFunction.call(null, 1, 2, 3)); /* first argument of this function allow us to change the value of the this keyword */
console.log("apply : ",callFunction.apply(null,[1,2,3])); /* exactly the same as call but expect array of argument */



/* 
*   
*   In reality we don't use call and apply that much becuase in function programming we rarely having desire to change the value of this keyword
*   inside our function. 
*   
*   Prior to ES6 'apply' was the easiest way to call a function when we wanted to pass the agruments as an array.
*   ES6 now provide us veary easy way to do that via spread operator.
* 
*/
const inputData = [1,2,3];
console.log(callFunction(...inputData));

/* Bind also let's us change the value of the this keyword when its used inside a function */
const additionFunction = (a,b,c) => a + b + c;
const addResult = additionFunction.bind(null, 1); /* Concept of partial application : here we are fixing the value of first argument ot 1 */
console.log("bind : ", addResult(2, 3));







