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
