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

