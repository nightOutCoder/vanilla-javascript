/* Fibonacci series : 1 1 2 3 5 8 */
const fibonacci = n => {
    if(n <= 2){
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
};
console.log(fibonacci(5));




const electionVotes = [
    'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Rick', 'Ashley',
    'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Ben', 'Michael',
    'Michael', 'Rick', 'Albert', 'Karen', 'Harry', 'Karen', 'Donna',
    'karen', 'Dane', 'Dane', 'Rick', 'Donna', 'Mortimer', 'Mortimer',
    'Dane', 'Mortimer', 'Rick', 'Mortimer', 'Prakash'
];
const finalResult = electionVotes.reduce((acc,element) => {
    acc[element] ? acc[element]++ : acc[element] = 1;
    return acc;   
},{});
console.log(finalResult);

