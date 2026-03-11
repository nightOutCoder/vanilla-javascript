//2114. Maximum Number of Words Found in Sentences
let sentences = [
  "alice and bob love leetcode",
  "i think so too t s t s",
  "this is great thanks very much",
];
var mostWordsFound = function (sentences) {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    let array = sentences[i].split(" ");
    max = Math.max(max, array.length);
  }
  return max;
};

console.log(mostWordsFound(sentences));

//1816. Truncate Sentence
let s = "Hello how are you Contestant";
let k = 4;
var truncateSentence = function (s, k) {
  let resultChar = [];
  let spaceCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      spaceCount++;
      if (spaceCount == k) {
        break;
      }
    }
    resultChar.push(s[i]);
  }
  return resultChar.join("");
};

console.log(truncateSentence(s, k));

/* Check a number is prime or not */
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  let limit = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(11));
console.log(isPrime(9));
console.log(isPrime(15));
console.log(isPrime(19));

var countPrimes = function (n) {
  let count = 0;
  let resultData = new Array(n).fill(true);

  for (let i = 2; i < n; i++) {
    if (resultData[i]) {
      count++;
      for (let j = i * 2; j < n; j = j + i) {
        resultData[j] = false;
      }
    }
  }
  return count;
};

console.log(countPrimes(10));
console.log(countPrimes(0));
console.log(countPrimes(1));
