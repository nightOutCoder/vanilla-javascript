/* 
Q-General Operations array 
*/

console.log('Array DS');
const inputString = ['a','b','c','d'];
let data = inputString.push('e');  // O(1)
console.log('Push return length of array ', data);
console.log(inputString);
inputString.pop();     // O(1)
console.log(inputString);
inputString.unshift('A');  // O(n)
console.log(inputString);
inputString.splice(2,0,'B');   // O(n)
console.log(inputString);
inputString.splice(2,2); // O(n)
console.log(inputString);

/*
splice - to insert in between
splice - to delete in between
*/



/* 
Q-Implement Array functions 
*/
class MyArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(element){
        this.data[this.length] = element;
        this.length++;
    }
    
    pop(){
        let popedData = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return popedData;
    }

    deleteItem(index){
        let deletedData = this.data[index];
        this.shiftItems(index);
        return deletedData;
    }

    shiftItems(index){
        for(let i = index; i < this.length-1;i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

}
let myArray = new MyArray();
myArray.push('a')
myArray.push('b')
myArray.push('c')
myArray.push('d')
myArray.push('e')
console.log('Data at index ',myArray.get(0));
console.log('Pop Element',myArray.pop());
console.log(myArray);
console.log('Data at index 1 is ',myArray.get(1));
myArray.deleteItem(2);
console.log('Res ', myArray);




/* 
Q- Multiple Ways of Revere a String 
*/
function reverseString1(inputData){
    return inputData.split('').reverse().join('');
}
console.log('reverseString1 ', reverseString1('vishal vishnoi'));
function reverseString2(inputData){
    return [...inputData].reverse().join('');
}
console.log('reverseString2 ',reverseString2('vishal vishnoi'));
function reverseString3(inputData){
    let inputArrayData = [...inputData];
    let end = inputArrayData.length-1;
    let result = [];
    
    for(let i = end; i >=0 ; i--){
        result.push(inputArrayData[i]);
    }

    return result.join('');
}
console.log('reverseString3 ',reverseString3('vishal vishnoi'));
function reverseString4(inputData){
    let inputArrayData = [...inputData];
    let end = inputArrayData.length-1;
    let start = 0;
    
    while(start < end){
        let temp = inputArrayData[start];
        inputArrayData[start] = inputArrayData[end];
        inputArrayData[end] = temp;
        start++;
        end--;
    }
    return inputArrayData.join('');
}
console.log('reverseString4 ',reverseString4('vishal vishnoi'));


/* 
Q:- Merge two sorted array : O(n) 
*/
function mergeTwoSortedArray(inputData1, inputData2){
    let resultData = [];
    let inputData1Length = inputData1.length;
    let inputData2Length = inputData2.length;

    let i = 0;
    let j = 0;
    let k = 0;

    while(i < inputData1Length && j < inputData2Length){

        if(inputData1[i] < inputData2[j]){
            resultData[k] = inputData1[i];
            i++;
            k++;
        } else {
            resultData[k] = inputData2[j];
            j++;
            k++;
        }
    }

    while( i < inputData1Length){
        resultData[k] = inputData1[i];
        k++;
        i++;
    }

    while( j < inputData2Length){
        resultData[k] = inputData2[j];
        k++;
        j++;
    }

    return resultData;

}
console.log(mergeTwoSortedArray([1,3,5,6],[7,8,9,10,15,19]));
console.log(mergeTwoSortedArray([],[7,8,9,10,15,19]));
console.log(mergeTwoSortedArray([1,2],[7]));


