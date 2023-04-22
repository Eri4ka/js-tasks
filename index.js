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

