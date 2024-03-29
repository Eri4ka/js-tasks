// Functions

// 1
function min(a, b) {
  return a < b ? a : b;
}

// 2
function isEven(N) {
  if (-N === 0) {
    return true;
  } else if (-N === 1) {
    return false;
  } else {
    return isEven(N - 2);
  }
}

// 3
function countChar(str, char) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }

  return count;
}

// Data structure

// 1.1
function range(start, end, step = 1) {
  const arr = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
}

// 1.2
function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// 2.1
function reverseArray(arr) {
  const reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}

//2.2
const arrayValue = [1, 2, 3, 4, 5];

function reverseArrayInPlace(arr) {
  const arrCopy = [...arr];
  for (let i = 1; i <= arrCopy.length; i++) {
    arr[i - 1] = arrCopy[arrCopy.length - i];
  }
}

// 2.3
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

// 2.4
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

// 2.5
function prepend(value, list) {
  return {value, rest: list};
}

// 3
let obj = {here: {is: "an"}, object: 2};

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  }

  if (typeof obj1 === "object") {
    for (let key in obj1) {
      if (!deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
    return true
  }
}

// High order functions
const ANCESTRY_FILE = require('./constants');
const ancestry = JSON.parse(ANCESTRY_FILE);

// 1
function fill(arr) {
  return arr.reduce((acc, i) => acc.concat(i))
}

// 2
const byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

// 3
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array, groupOf) {
  var groups = {};
  array.forEach(function(element) {
    var groupName = groupOf(element);
    if (groupName in groups)
      groups[groupName].push(element);
    else
      groups[groupName] = [element];
  });
  return groups;
}

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var century in byCentury) {
  var ages = byCentury[century].map(function(person) {
    return person.died - person.born;
  });
  console.log(century + ": " + average(ages));
}

// 4.1 every
function every(arr, value) {
  const checkedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (value(arr[i])) {
      checkedArr.push(arr[i])
    }
  }

  if (arr.length === checkedArr.length) {
    return true
  }

  return false;
}

// 4.2 some
function some(arr, value) {
  const checkedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (value(arr[i])) {
      checkedArr.push(arr[i])
    }
  }

  if (checkedArr.length > 0) {
    return true
  }

  return false;
}

