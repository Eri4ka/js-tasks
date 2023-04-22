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
    sum += arr[i]
  }

  return sum;
}

console.log(sum(range(1, 10, 2)))
