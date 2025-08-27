// 1365. How Many Numbers Are Smaller Than the Current Number

// TC- O(n2)
// SC - O(n)

var smallerNumbersThanCurrent = function (nums) {
  let resultArray = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] != nums[j]) {
        if (nums[i] > nums[j]) {
          count++;
        }
      }
    }
    resultArray.push(count);
  }
  return resultArray;
};
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));

// TC- O(n long n)
// SC - O(n)
function smallerNumbersThanCurrent1(inputArray) {
  let sortedArray = [...inputArray].sort((a, b) => a - b);
  console.log(sortedArray);

  let mapResult = {};
  for (let i = 0; i < sortedArray.length; i++) {
    if (mapResult[sortedArray[i]] === undefined) {
      mapResult[sortedArray[i]] = i;
    }
  }
  console.log(mapResult);
  return inputArray.map((n) => mapResult[n]);
}

console.log(smallerNumbersThanCurrent1([8, 1, 2, 2, 3]));

console.log("==============================================================");
// 217. Contains Duplicate
var containsDuplicate = function (nums) {
  let isContainsDuplicate = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[i] == nums[j]) {
        isContainsDuplicate = true;
        break;
      }
    }
  }
  if (isContainsDuplicate) {
    return true;
  } else {
    return false;
  }
};
console.log(containsDuplicate([1, 2, 3, 4, 1]));

// 217. Contains Duplicate
var containsDuplicate1 = function (nums) {
  let resultMap = {};

  for (let element of nums) {
    if (resultMap[element]) {
      resultMap[element]++;
    } else {
      resultMap[element] = 1;
    }
  }

  for (let element in resultMap) {
    if (resultMap[element] >= 2) {
      console.log(resultMap[element], element);
    }
  }
  return resultMap;
};

console.log(containsDuplicate1([1, 2, 3, 4, 1]));

var containsDuplicate3 = function (nums) {
  let resultMap = {};

  for (let element of nums) {
    if (resultMap[element]) {
      resultMap[element]++;
      return true;
    } else {
      resultMap[element] = 1;
    }
  }
  return false;
};

console.log(containsDuplicate3([1, 2, 3, 4]));

// 242. Valid Anagram
// SC - O(n)
// TC - O(n log n)
function isAnargam(s, t) {
  if (s.length != t.length) {
    return false;
  }
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
}
//console.log(isAnargam("dbce", "becd"));

// SC - O(k) (k = unique characters; O(1) if only lowercase letters). O(26) → considered O(1)
// TC - O(n)
function isAnargamViaMap(s, t) {
  let map = {};
  if (s.length != t.length) return false;

  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  for (let char of t) {
    if (!map[char]) {
      return false;
    }
    map[char] -= 1;
  }
  return true;
}
// console.log(isAnargamViaMap("acbd", "abcd"));
// console.log(isAnargamViaMap("abcd", "xbcd"));

// SC - O(1)
// TC - O(n)
function isAnargamViaArray(s, t) {
  if (s.length != t.length) return false;
  let result = new Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (let char of s) {
    let index = char.charCodeAt(0) - base;
    result[index] += 1;
  }
  for (let char of t) {
    let index = char.charCodeAt(0) - base;
    result[index] -= 1;
  }
  for (let value of result) {
    if (value != 0) {
      return false;
    }
  }
  return true;
}
console.log(isAnargamViaMap("acbd", "abcd"));
console.log(isAnargamViaMap("abcd", "xbcd"));
