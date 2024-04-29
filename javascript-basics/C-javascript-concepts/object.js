console.log('*******Object Examples******');

const objectInput = {
    name: 'John',
    age: 30,
    city: 'New York',
    getAge: function() {
        return this.age;
    }
};


/* To read value of properties use . notation or [''], [] notation will not work */
console.log(objectInput[name]); /* Will not work : undefined*/
console.log(objectInput['name']);
console.log(objectInput.name);
console.log(objectInput.getAge());


/* we could use , or [] notation to update values */
objectInput['name'] = 'smith';
objectInput.age = 40;
console.log(objectInput.name, objectInput.age);


/* Get keys and values together - Return an array [[name,'john'],[age,'30']......]*/
console.log(Object.entries(objectInput));


/* ways to create object : way1*/
const personObject = {}
personObject.name = 'John';
personObject.age = 30;
console.log(personObject);


/* ways to create object: way2  */
const employeeObject = Object.create(null);
employeeObject.name = 'Rajesh';
employeeObject.age = 31;
console.log(employeeObject);


/* ways to create object: way3 via constructor function  */
function Employee(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
const myEmployee = new Employee('Rajesh', 31, 'New York');
console.log(myEmployee);


console.log(this === window); // true
this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b); // "MDN"


/* Adding property to a object */
const objPerson = {
    name: 'rama',
    age: 30,
}
objPerson[city]  = 'ramput'; /* ReferenceError : city is not defined */
objPerson['city'] = 'mbd';
console.log(objPerson);