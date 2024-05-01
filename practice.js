// Question 1 :  given "KIOSK_MODE", the response should be ["InstaPic", "NetMovies", "WeTalk"]

// Question 2 : Input  ["InstaPic","NetMoves","WeTalk"]
// Result :

// [
//   {
//     name: 'InstaPic',
//     platform: 'ANDROID',
//     features: [
//         'FIREWALL',
//         'KIOSK_MODE',
//     ],
//   },
//   {
//     name: 'NetMovies',
//     platform: 'ANDROID',
//     features: [
//         'FIREWALL',
//         'KIOSK_MODE',
//     ],
//   },
//   {
//     name: 'WeTalk',
//     platform: 'WINDOWS',
//     features: [
//         'KIOSK_MODE',
//         'REMOTE_ACCESS',
//     ],
//   },
// ]

const apps = [
    {
      name: 'InstaPic',
      platform: 'ANDROID',
    },
    {
      name: 'MadBirds',
      platform: 'IOS',
    },
    {
      name: 'NetMovies',
      platform: 'ANDROID',
    },
    {
      name: 'WeTalk',
      platform: 'WINDOWS',
    },
  ];
  const platforms = [
    {
      name: 'IOS',
      features: ['APP_MANAGEMENT', 'FIREWALL'],
    },
    {
      name: 'ANDROID',
      features: ['FIREWALL', 'KIOSK_MODE'],
    },
    {
      name: 'WINDOWS',
      features: ['KIOSK_MODE', 'REMOTE_ACCESS'],
    },
  ];

function getResult(apps, platforms,input){
  let featureResult = [];
  let result = [];
  for(let platform of platforms){
    for(let feature of platform.features){
      if(feature === input){
        featureResult.push(platform.name);
        console.log(feature, platform.name);
      }
    }
  }

  for(let app of apps){
    if(featureResult.some(data => data == app.platform))
    result.push(app.name);
  }
  console.log(featureResult, result);
}
getResult(apps,platforms,'KIOSK_MODE');







/***Basics***/
//   console.log(a);
//   var a = 5;



// console.log(a); /* ReferenceError cannot access a before initialization */
// let a = 5;



//   console.log(a);
//   console.log(b);
//   var a = b = 5;  /* ReferenceError b is not defined */
//  /*it would become below*/
//   b = 5;
//   var a = b;




// var a = 5;
// console.log(a++);
// console.log(a);



// console.log(1 < 2 < 3);  /* true < 3 => 1 < 3 */
// console.log(3 > 2 > 1);  /* true > 1 => 1 > 1 */




/*here arrow function refereing to its parent scope which is global here in below case*/
// const foo = () => {
//     console.log(this.name);
// }
// foo.call({ name : 'John'});




// const foos = function(){
//     console.log(this.name);
// }
// foos.call({ name : 'John'});




// const foosa = function(){
//     console.log(this.name);
//     const bar = () => { /* here arrow function taking this keyword from its parent scope */
//         console.log(this.name);
//     }
//     bar();
// }
// foosa.call({ name : 'John'});



/* how to make a specific elmement un-updated one */
const user = {
    ids : 123,
    age: 24,
    address: {
        city: 'ramput',
        state: 'KT'
    }
}
Object.defineProperty(user, "ids", { configurable: false, writable: false });
user.ids = 1234;
console.log(user.ids);



function myFunction(){
}
class MyClass {
}
console.log(typeof MyClass);
console.log(typeof myFunction);



const myPromise = new Promise((res, rej) =>{
  document.getElementById('myBtn1').addEventListener('click',() => {
    res('Resolved');
  });
  

  document.getElementById('myBtn2').addEventListener('click',() => {
    rej('Rejected');
  });
});

myPromise.then(res => console.log(res)).catch(err => console.log(err));
console.log(myPromise);


function Test(){}
Test.prototype = null;
var a = new Test();
//console.log(a instanceof Test); //Uncaught TypeError: Function has non-object prototype 'null' in instanceof check(…)
console.log(a instanceof Object); // true WTF?


