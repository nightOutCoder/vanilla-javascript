console.log('[***************************************************************************************************************************]');
console.log('<--JS Basic programs-->');

console.log('[Reverse String Example Start ]');

console.log('{ WAY-1 }');
    function reverseInput1(inputData) {
        return inputData.split("").reverse().join("")
    }
    console.log(reverseInput1('RedJohn'));

console.log('{ WAY-2 }');
    const reverseInput2 = inputData => inputData.split("").reverse().join("")
    console.log(reverseInput2('RedJohn'));

console.log('{ WAY-3 }');
    function reverseInput3(inputData) {
    
    const input =   [...inputData];

    let end = input.length-1;
    let start = 0;

    while(start < end){
        let temp;

        temp = input[start];
        input[start] = input[end];
        input[end] = temp;

        start++;
        end--;
    }
    return input.join('');
}
console.log(reverseInput3('RedJohn'));


let inputString = '1234 56';
function stringReverseInMemory(inputData){
    let input = [...inputData];
    let j = input.length-1;
    for(let i = 0,j = input.length-1; i <= j; i++,j--){
        let temp;
        temp = input[i];
        input[i] = input[j];
        input[j] = temp;
    }
    return input.join('');
}
console.log(stringReverseInMemory(inputString));


console.log('[Reverse String Example END ]');
console.log('[***************************************************************************************************************************]');


console.log('[Remove Duplicate from Array Example START ]');
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
 
console.log('{ WAY-1 }');
    function removeDuplicates1(arr) {
        return [...new Set(arr)];
    }
 
console.log('Input Array : ' + arr)    
console.log(removeDuplicates1(arr))

console.log('{ WAY-2 }');
    function removeDuplicates2(inputData){
        let end = inputData.length-1;
        const result = [];

        for(let i = 0; i <= end; i ++){
            if(result.indexOf(inputData[i]) === -1){
                result.push(inputData[i]);
            }
            else {
                /* Printing duplicate Values */
                console.log('Duplicate Value is : '+inputData[i]);
            }
        }
        return result; /* returning array of elements having no duplicates */
    }
console.log(removeDuplicates2([2,3,4,5,2,4,3,3]));
console.log('[Remove Duplicate from Array Example END ]');


console.log('[***************************************************************************************************************************]');
console.log('[Return All Duplicate Example Start ]');

const inputData  = [3,4,5,1,2,3,0,9,1,9,9];


/* Get all the duplicates */
function frequencyOfElementWithNoPreDefinedFunction(inputData){
    const result = {};
    for(let element of inputData){
        if(result[element])
            result[element]++;
        else 
            result[element] = 1;
    }
    console.log(result);

    const finalResult = [];
    for(let data in result){
        if(result[data] >=2){
            console.log(data,result[data]);
            let n = result[data];
            while(n>0){
                finalResult.push(data);
                n--;
            }
            
        }
    }
   return finalResult;
}
console.log(frequencyOfElementWithNoPreDefinedFunction(inputData));
console.log('[Return All Duplicate Example END ]');
console.log('[***************************************************************************************************************************]');


/* via non pre-defined functions */
function frequencyOfElementWithNoPreDefinedFunction(inputData){
    const result = {};
    for(let element of inputData){
        if(result[element])
            result[element]++;
        else 
            result[element] = 1;
    }
    return result;
}
console.log(frequencyOfElementWithNoPreDefinedFunction(inputData));


/* via functional way */
function frequencyOfElments(inputData){
    const inputData = [3,4,5,1,2,3,0,9,1,9,9];

    const result = inputData.reduce((acc,element) => {
        acc[element] ? acc[element]++ : acc[element] = 1;
        return acc;
    },{});
}
console.log(frequencyOfElments(inputData));


/* Print fibonacci series */
function fibonacciSeries(input){
    let sum = 0;
    for(let x = 0, y = 1; sum < input; x = y, y = sum, sum = x + y){
        console.log(sum);
    }
}
fibonacciSeries(10);


/* two sum brute force way : O(n2) */
var twoSum = function(nums, target) {
    let result = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++ ){
            if((nums[i] + nums[j]) === target){
                result.push(i);
                result.push(j);
            }
        }
        
    }
    console.log(result);
    return result;
};
twoSum([2,11,7,15],9);


/* Elegent way : O(n) */
function twoSum(nums, target) {
    let numObj = {};
      for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numObj[complement] !== undefined) {
          return [numObj[complement], i];
        }
        numObj[nums[i]] = i;
      }
    }
console.log(twoSum([2,7,6,17],9));



/* Flatten Array */
Array.prototype.flatten = function () {
    const result = [];
    for(const value of this){
      if (Array.isArray(value)) {
        const data = value.flatten();
        console.log('if data : ', data);
        result.push(...data);
      } else {
        console.log('else data : ', value);
        result.push(value);
      }
    }
    console.log('result : ', result);
    return result;
  };

console.log([].flatten());
console.log([1,2,3].flatten());
console.log([[1,2],3,4].flatten());
console.log([[1,2],[3,[4,5]],6].flatten());
console.log([1,[2,[3],4,[5,6,[7]]]].flatten());
console.log([100,['A','C'],1, [2, [3], 4, [5, 6, [7]]]].flatten());



/* check if string is palindrome or not */
let input = '123321';
console.log(input.trim().length);
function isPalindrome(input){
    if(input.trim().length === 0){
        return new Error('Input is empty');
    }
    return input.split('').reverse().join('');
}
console.log(isPalindrome(input));
console.log(input  == isPalindrome(input) ? true : false);


/* check if string is palindrome or not */
function isPalindromeWithOutPredefinedFunctions(input){
    let data = [...input];
    let j = data.length-1;
    console.log(data,j,j/2,Math.floor(j/2));
    for(let i = 0 ; i <= Math.floor(j/2) ; i++){
        console.log(i,j);
        if(data[i] != data[j-i])
            return false;
    }
    return true;
}
console.log(isPalindromeWithOutPredefinedFunctions(input));


/* Find missing number */
let arrInput = [3,0,1,4,5,6];
function findMissingNumber(arrInput) {
    let sum = 0;
    let len = nums.length;
    let totalSum = (len * (len + 1))/2;
    for(let i = 0 ; i < len; i++){
        sum +=nums[i];
    }
    return totalSum-sum;
};

console.log(findMissingNumber(arrInput));





