// 1
const func = (arr) => {
  let val;

  for (let i = 0; i < arr.length; i++) {
    const sumLeft = arr.slice(0, i).reduce((acc, a) => acc + a, 0);
    const sumRight = arr.slice(i+1).reduce((acc, a) => acc + a, 0);

    if (sumLeft === sumRight) {
      val = i
      break;
    }
  }

  return val ?? -1
}

// solution kata
const solution = (string) => {
  const ups = string.match(/[A-Z]/g)
  const arr = [];

  [...string].forEach((a) => {
    if (ups?.includes(a)) {
      arr.push(' ');
    }
    arr.push(a);
  })

  return arr.join('');
}
 
// isogram kata
function isIsogram(str){
  return ![...str.toLowerCase()].map((a, i, z) => z.slice(0, i).includes(a.toLowerCase())).includes(true)
}

// findOutlier kata
function findOutlier(arr) {
  const even = arr.filter(a => a % 2 === 0)
  const odd = arr.filter(a => a % 2 !== 0)

  return even.length > 1 ? +odd.join('') : +even.join('')
}

// duplicateEncode kata
function duplicateEncode(word) {
 return [...word.toLowerCase()].map((a, i, z) => {
    if (z.filter(b => b === a).length > 1) {
      return ')'
    }
    return '('
  }).join('')
}

// findUniq kata
function findUniq(arr) {
  const duples = arr.filter((a, _, z) => a === z[0])
  const unique = arr.filter((a, _, z) => a !== z[0])

  return duples.length > 1 ? unique[0] : duples[0]
}

// KATA: Count characters in your string 
function count(string) {
  const obj = {};

  [...string].forEach((a) => {
    if (obj[a]) {
      obj[a] += 1;
    } else {
      obj[a] = 1;
    }
    
  })

  return obj;
}

