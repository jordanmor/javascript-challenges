// Find the longest word

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

// console.log(findLongestWord2("What if we try a super-long word such as otorhinolaryngology this time"));
// console.log(findLongestWord2("What if we try a super-long word such as potorhinolaryngology this time"));

// Title Case A Sentence

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

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
console.log(titleCase3("HERE IS MY HANDLE HERE IS MY SPOUT"));

var string = "HERE IS MY HANDLE HERE IS MY SPOUT";


// Find the largest Number in each subarray

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

// Seek and Destroy

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

console.log(destroyer([1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 3 ,9, 7, 7, 1], 2, 3, 5, 7));
console.log(destroyer2([1, 2, 3, 1, 2, 3, 4, 5, 6, 7, 3 ,9, 7, 7, 1], 2, 3, 5, 7));

// Caesars Cipher

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

// Sum

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

console.log(sumAll([10, 5]));
console.log(sumAll2([10, 5]));
console.log(sumAll3([10, 5]));

// Difference between two arrays

// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(function(item) {
//       return !(arr1.indexOf(item) !== -1 && arr2.indexOf(item) !== -1);
//     });
// }

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

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray2([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray2(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray3([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray3(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray4([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray4(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

// Roman Numeral Converter

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

console.log(convertToRoman(1148));
console.log(convertToRoman2(1148));

// What's in a name?

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

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
// console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
// console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));

// 

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

// Pig Latin Translation

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

console.log(translatePigLatin("crrronsonant"));
console.log(translatePigLatin2("cronsonant"));

// CLOCK

const clockSection = document.getElementById('clock');

function getTime() {

  function pad(number) {
    if(number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  const now = new Date();

  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());

  return `${hh}:${mm}:${ss}`;

}

function tickClock() {
  clockSection.textContent = getTime();
};

tickClock();
setInterval(tickClock, 1000);



