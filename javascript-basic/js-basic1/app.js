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

console.log('########################## js-basic1/app.js END ##########################');
