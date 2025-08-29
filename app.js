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
