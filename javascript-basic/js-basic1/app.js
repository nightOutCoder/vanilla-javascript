console.log('########################## js-basic1/app.js START ##########################');
console.log('   **********[Reverse String Example Start ]*********   ');

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
console.log('   ************[Reverse String Example END ]************   ');

console.log('   ************[Remove Duplicate from Array Example START ]************   ');
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
 
console.log('{ WAY-1 }');
    function removeDuplicates1(arr) {
        return [...new Set(arr)];
    }
 
console.log(removeDuplicates1(arr))

console.log('{ WAY-2 }');
    function removeDuplicates2(inputData){
        let end = inputData.length-1;
        const result = [];

        for(let i = 0; i < end; i ++){
            if(result.indexOf(inputData[i]) === -1){
                result.push(inputData[i]);
            }
            else {
                /* Printing duplicate Values */
                console.log('Test'+inputData[i]);
            }
        }
        return result; /* returning array of elements having no duplicates */
    }
console.log(removeDuplicates2([2,3,4,5,2,4,3,3]));
console.log('   ************[Remove Duplicate from Array Example END ]************   ');


console.log('########################## js-basic1/app.js END ##########################');
