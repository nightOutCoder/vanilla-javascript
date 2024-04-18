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
console.log('[Return Duplicate Example Start ]');

console.log('{ WAY-1 }');
    function returnDuplicate(array) {
    const duplicates = [];
    let end = array.length

    for (let i = 0; i < end; i++) {
        for (let j = i + 1; j < end; j++) {
            //console.log('j value is ' +j);
          if (array[i] === array[j]) {
            duplicates.push(array[i]);
          }
        }
      }
      console.log(duplicates);
      return [...new Set(duplicates)];
}
console.log('The Duplicate are : ' + returnDuplicate([2,3,4,5,2,4,3,3]));
console.log('[Return Duplicate Example END ]');
console.log('[***************************************************************************************************************************]');

/* via pre-defined functions */
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


function frequencyOfElments(inputData){
    const inputData = [3,4,5,1,2,3,0,9,1,9,9];

    const result = inputData.reduce((acc,element) => {
        acc[element] ? acc[element]++ : acc[element] = 1;
        return acc;
    },{});
}
console.log(frequencyOfElments(inputData));

