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
