// ***** Find the Longest Word in a String *****

/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

var findLongestWord = function(str) {
  str = str.split(' ').sort(function(a,b) {
    return b.length - a.length;
  }).shift();
  return str.length;
}

var findLongestWord2 = function(str) {
  var longestWord = 0;
  str = str.split(' ').map(function(val) {
    if(val.length > longestWord) { longestWord = val.length; }
  });
  return longestWord;
}

var findLongestWord3 = function(str) {
  var arr = str.split(' ');
  var longestWord = 0;
  for(var i = 0, x = arr.length; i < x; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}

var string = "What if we try a super-long word such as otorhinolaryngology this time";

console.log(findLongestWord2("What if we try a super-long word such as otorhinolaryngology this time"));
console.log(findLongestWord2("What if we try a super-long word such as potorhinolaryngology this time"));


// ***** Title Case a Sentence *****

/*
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also 
capitalize connecting words like "the" and "of".
*/

var titleCase = function(str) {
  return str.split(' ').map(function(val) {
    return val = val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
  }).join(' ');
}

var titleCase2 = function(str) {
  var arr = str.split(' ');
  var newArr = [];
  for(var i = 0, x = arr.length; i < x; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase());
  }
  return newArr.join(' ');
}

var titleCase3 = function(str) {
  var arr = str.split(' ');
  var newArr = [];
  var i = 0, x = arr.length, 
  firstChar = arr[i].charAt(0).toUpperCase(), 
  restOfString = arr[i].substr(1).toLowerCase();
  
  for(i; i < x; i++) {
    newArr.push(firstChar + restOfString);
  }
  return newArr.join(' ');
}

console.log(titleCase3("HERE IS MY HANDLE HERE IS MY SPOUT"));

var string = "HERE IS MY HANDLE HERE IS MY SPOUT";




// ***** Return Largest Numbers in Arrays *****

/* 
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  var newArr = [], largestNum = 0;

  for(var i = 0, x = arr.length; i < x; i++) {
    for(var j = 0, y = arr[i].length; j < y; j++) {
      if(arr[i][j] > largestNum) {
        largestNum = arr[i][j];
      }
    }
    newArr.push(largestNum);
    largestNum = 0;
  }
  return newArr;
}

function largestOfFour2(arr) {
  var newArr = [];

  for(var i = 0, x = arr.length; i < x; i++) {
    newArr.push(arr[i].sort(function(a,b) {
      return b - a;
    }).shift());
  }
  return newArr;
}

function largestOfFour3(arr) {

  var newArr = arr.map(function(innerArr) {
                return innerArr = innerArr.sort(function(a,b) { return b - a; }).shift();
               });
  return newArr;
}

var testArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

largestOfFour3(testArr);


// ***** Seek and Destroy *****

/* 
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array 
that are of the same value as these arguments.
*/

function destroyer(arr) {
  var args = [];
  for(var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  var newArr = arr.filter(function(val) {
    return args.indexOf(val) === -1;
  });
  return newArr;
}

function destroyer2(arr) {
  var args = [];
  var newArr = [];
  for(var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  for(var i = 0; i < arr.length; i++) {
    if (args.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(destroyer2([1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 3 ,9, 7, 7, 1], 2, 3, 5, 7));


// ***** Caesars Cipher *****

/* 
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters 
are shifted by some set amount. A common modern use is the ROT13 cipher, 
where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
  str = str.toUpperCase();
  var newStr = '', charCode;
  for(var i = 0; i < str.length; i++) {
    charCode = str.charAt(i).charCodeAt();
    if(charCode >= 65 && charCode <= 77) {
      newStr += String.fromCharCode(charCode + 13);
    } else if(charCode >= 78 && charCode <= 90) {
      newStr += String.fromCharCode(charCode - 13);
    } else {
      newStr += str.charAt(i);
    }
    
  }
  return newStr;
}

// Change the inputs below to test
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ bire GUR YNML SBK!!!"));


// ***** Sum All Numbers in a Range *****

/* 
We'll pass you an array of two numbers. Return the sum of those two numbers 
and all numbers between them.
The lowest number will not always come first.
*/

var sumAll = function(arr) {
  var min = Math.min(arr[0], arr[1]), max = Math.max(arr[0], arr[1]);
  var sum = 0;

  for(var i = min; i <= max; i++) {
      sum += i;
  }
  return sum;
}

var sumAll2 = function(arr) {
  var sum = 0;

  for(var i = Math.min(...arr), max = Math.max(...arr); i <= max; i++) {
      sum += i;
  }
  return sum;
}

var sumAll3 = function(arr) {
  return (Math.abs(arr[0] - arr[1]) + 1) * (arr[0] + arr[1]) / 2;
}

console.log(sumAll3([10, 5]));


// ***** Difference Between Two Arrays *****

/* 
Compare two arrays and return a new array with any items only found in one of the 
two given arrays, but not both. In other words, 
return the symmetric difference of the two arrays.
*/

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
      item => !(arr1.indexOf(item) !== -1 && arr2.indexOf(item) !== -1)
    );
}

function diffArray2(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    );
}


function diffArray3(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  var finalArr = newArr.filter(function(val, i, arr) {
    var counter = 0;
    for(var i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        counter++;
      }
    }
    return counter === 1;
  });

  return finalArr;
}

function diffArray4(arr1, arr2) {
  var newArr = [];

  function onlyInFirst(first, second) {
    for(var i = 0; i < first.length; i++) {
      if(second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }
  
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

console.log(diffArray4([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray4(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));


// ***** Roman Numeral Converter *****

/* 
Convert the given number into a roman numeral.
*/

function convertToRoman(num) {
  var romanNum = '';
  while(num > 0) {
    if(num >= 1000) {
      romanNum += 'M';
      num -= 1000;
    } else if(num >= 900 ) {
      romanNum += 'CM';
      num -= 900;
    } else if(num >= 500) {
      romanNum += 'D';
      num -= 500;
    } else if(num >= 400) {
      romanNum += 'CD';
      num -= 400;
    } else if(num >= 100) {
      romanNum += 'C';
      num -= 100;
    } else if(num >= 90) {
      romanNum += 'XC';
      num -= 90;
    } else if(num >= 50) {
      romanNum += 'L';
      num -= 50;
    } else if(num >= 40) {
      romanNum += 'XL';
      num -= 40;
    } else if(num >= 10) {
      romanNum += 'X';
      num -= 10;
    } else if(num === 9) {
      romanNum += 'IX';
      num -= 9;
    } else if(num >= 5) {
      romanNum += 'V';
      num -= 5;
    } else if(num === 4) {
      romanNum += 'IV';
      num -= 4;
    } else if(num >= 1) {
      romanNum += 'I';
      num -= 1;
    }
  }
 return romanNum;
}

function convertToRoman2(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  var romanized = '';

  for(var i = 0; i < decimalValue.length; i++) {
    while(num >= decimalValue[i]) {
      num -= decimalValue[i];
      romanized += romanNumeral[i];
    }
  }

 return romanized;
}

console.log(convertToRoman2(1148));


// ***** Wherefore art thou *****

/* 
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching property 
and value pairs (second argument). Each property and value pair of the 
source object has to be present in the object from the collection if it 
is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
and the second argument is { last: "Capulet" }, then you must return the third object 
from the array (the first argument), because it contains the property and its value, 
that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);
  console.log(srcKeys);
  return collection.filter(function(obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      if( !obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]] ) {
        console.log(srcKeys[i]);
        return false;
      }
    }
    return true;
  });
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));


// ***** Search and Replace *****

/* 
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
NOTE: Preserve the case of the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", 
it should be replaced as "Dog"
*/

var myReplace = function(str, before, after) {
  if(before.charCodeAt(0) <= 90) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  var newStr = str.split(' ');
  newStr.splice(newStr.indexOf('jumped'), 1, after);
  return newStr.join(' ');
}

var myReplace2 = function(str, before, after) {
  if(before.charCodeAt(0) <= 90) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.slice(0, str.indexOf(before)) + after + str.slice(str.indexOf(before) + before.length);
}

var myReplace3 = function(str, before, after) {
  if(before.charCodeAt(0) <= 90) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.replace(before, after);
}

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace2("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace2("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));


// ***** Pig Latin Translation *****

/* 
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  var re = /[aeiou]/i;
  if( re.test(str[0]) ) {
    return str + 'way';
  } else {
    for(var i = 1; i < str.length; i++) {
      if(re.test(str[i]) ) {
        return str.substr(i) + str.substr(0, i) + 'ay';
      }
    }
  }
}

function translatePigLatin2(str) {
  var re = /[aeiou]/i, pigLatin = '';
  if( str[0].match(re) ) {
    pigLatin =  str + 'way';
  } else {
        var vowelIndice = str.indexOf(str.match(re));
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
      }
  return pigLatin;
}

console.log(translatePigLatin2("cronsonant"));


// ***** DNA Pairing *****

/* The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, 
and all the arrays are grouped into one encapsulating array.
*/

function pairElement1(str) {
  return str.split('').map(base => {
    const arr = [];
      if (base === 'G') {
        arr.push(base, 'C');
        return arr;
      } else if (base === 'C') {
        arr.push(base, 'G');
        return arr;
      } else if (base === 'A') {
        arr.push(base, 'T');
        return arr;
      } else if (base === 'T') {
        arr.push(base, 'A');
        return arr;
      }
    });
}

function pairElement2(dna) {
  return dna.split('').map(el => {
    if (el === 'A') {
      return ['A', 'T'];
    } else if (el === 'C') {
        return ['C', 'G'];
      } else if (el === 'G') {
        return ['G', 'C'];
      } else if (el === 'T') {
        return ['T', 'A'];
      }
  });
}

// --- BEST SOLUTION ---

function pairElement3(dna) {
  const pairs = {
    "A": ["A", "T"],
    "C": ["C", "G"],
    "G": ["G", "C"],
    "T": ["T", "A"]
  };

  return dna.split("").map(el => {
    return pairs[el];
  });
}

console.log(pairElement("GCGAT"));


// ***** Missing Letters *****

/* 
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  if(alphabet.indexOf(str) !== -1) {
    return undefined;
  } else {
    const completeSegment = alphabet.substr(alphabet.indexOf(str.charAt(0)), str.length + 1);
    console.log(completeSegment);
    for(let i = 0; i < completeSegment.length; i++) {
      if( str.indexOf(completeSegment.charAt(i)) === -1 ) {
        return completeSegment.charAt(i); 
      }
    }
  } 
}

function fearNotLetter2(str) {
  for(let i = 0; i < str.length; i++) {
    let currentCharCode = str.charCodeAt(i);
    let nextCharCode = str.charCodeAt(i + 1);
    if ( currentCharCode !== nextCharCode - 1 ) {
      return String.fromCharCode(currentCharCode + 1);
    }
  }
  return undefined;
}

// --- BEST SOLUTION ---

function fearNotLetter3(str) {

  let firstCharCode = str.charCodeAt(0);

  for(let i = 0; i < str.length; i++) {

    let currentCharCode = str.charCodeAt(i);

    if (currentCharCode !== firstCharCode + i) {

      return String.fromCharCode(currentCharCode - 1);
    }  
  } 
  return undefined;
}

console.log(fearNotLetter3("abcdefghijklno"));


// ***** Boo Hoo *****

/* 
Check if a value is classified as a boolean primitive. 
Return true or false.
Boolean primitives are true and false.
*/















