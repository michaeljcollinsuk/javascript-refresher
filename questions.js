var selectElementsStartingWithA = function(array) {
  // var answer = [];
  // for (var i = 0; i < array.length; i++) {
  //   if (array[i].startsWith('a')) { answer.push(array[i]);}
  // }
  // return answer;

  var startsWithA = function(word) {
    return word[0] === 'a';
  };

  return array.filter(startsWithA);


//
// // Create two functions, pass the first into the second and log the output
// // PLay around with passing callbacks to set time out
// // Try setting to variables, or passing in directly as an anonymous (without a name)
//   var doSomething = function(a, b){
//     console.log(a, b);
//   };
//
//   return array.filter(doSomething);
//
//   return array.filter(function(a, b){
//     console.log(a, b);
//   });
// };
//
// Array.prototype.filter = function(callback) {
//   // Do some call stuff
//
//   var first = this.each.first
//
//   callback(first,second);
// }
//
// class string
//   def startsWith
//
//   end
// end
};


var selectElementsStartingWithVowel = function(array) {
  function startsWithVowel(word) { return ['a', 'e', 'i', 'o', 'u'].indexOf(word[0]) > -1; }
  return array.filter(startsWithVowel);
};

var removeNullElements = function(array) {
  function removeNulls(word) { return word !== null; }
  return array.filter(removeNulls);

};

var removeNullAndFalseElements = function(array) {
  function removeNullFalse(element) { return element !== null && element !== false; }
  return array.filter(removeNullFalse);
};

var reverseWordsInArray = function(array) {
  function reverse(word) { return word.split('').reverse().join(''); }
  return array.map(reverse);
};

var everyPossiblePair = function(array) {
  var answer = [];
  for (var i = 0; i < array.length-1; i ++) {
    answer.push(new Array(array[i], array[array.length-1]).sort());
  }
  answer.push(new Array(array[0], array[1]));
  return answer;
};

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
};

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
  function reverse(word) { return word.split('').reverse().join(''); }
  newArr = array.map(reverse).sort();
  return newArr.map(reverse);
};

var getFirstHalf = function(string) {
  var half = Math.round(string.length/2);
  return string.slice(0, half);
};

var makeNegative = function(number) {
  if (number >= 0) { return number * -1;}
  return number;
};

var numberOfPalindromes = function(array) {
  function isPalindrome(word) {
    return word === word.split('').reverse().join('');
  }
  return array.filter(isPalindrome).length;
};

var shortestWord = function(array) {
  var sortedShortest = array.sort(function(a, b) {
    return a.length - b.length; }
  );
  return sortedShortest[0];
};

var longestWord = function(array) {
  var sortedLongest = array.sort(function(a, b) {
    return b.length - a.length; }
  );
  return sortedLongest[0];
};

var sumNumbers = function(array) {
  return array.reduce(function(a,b) { return a + b; });
};

var repeatElements = function(array) {
  return array.concat(array);
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  var total = array.reduce(function(a,b) { return a + b; });
  return total / array.length;
};

var getElementsUntilGreaterThanFive = function(array) {
  var answer = [];
  array.some(function(num) {
    if (num > 5) {
      return true;
    }
    answer.push(num);
  });
  return answer;
  // var answer = [];
  // for (var i = 0; array[i] <= 5; i++) {
  //   answer.push(array[i]);
  // }
  // return answer;
};

var convertArrayToObject = function(array) {
  var answer = {};
  var newArr = [];
  var i = 0;
  while ( array.length > 0 ) {
    newArr.push(array.splice(0,2));
  }
  for ( i = 0; i < newArr.length; i++) {
    answer[newArr[i][0]] = newArr[i][1];
  }
  return answer;
};

var getAllLetters = function(array) {
  var newArr = [];
  function letters(string) {
    newArr.push(string.split(''));
  }
  array.forEach(letters);
  var lettersArray = newArr.reduce(function(a,b){
    return a.concat(b);
  });
 // removes duplicates
  var solution = [];
  for (var i = 0; i < lettersArray.length; i++) {
    var current = lettersArray[i];
    if (solution.indexOf(current) < 0 ) {
      solution.push(current);
    }
  }

  return solution.sort();
};

var swapKeysAndValues = function(object) {
  return 'Write your method here';
};

var sumKeysAndValues = function(object) {
  return 'Write your method here';
};

var removeCapitals = function(string) {
  return 'Write your method here';
};

var roundUp = function(number) {
  return 'Write your method here';
};

var formatDateNicely = function(date) {
  return 'Write your method here';
};

var getDomainName = function(string) {
  return 'Write your method here';
};

var titleize = function(string) {
  return 'Write your method here';
};

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
};

var squareRoot = function(number) {
  return 'Write your method here';
};

var factorial = function(number) {
  return 'Write your method here';
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return 'Write your method here';
};

var letterPosition = function(array) {
  return 'Write your method here';
};
