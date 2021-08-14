
exports.min = function min (arr) {
  if(!arr || arr.length == 0) {
    return 0;
  }
  let least = Infinity;
  arr.forEach( num => {
      if (num < least) {
          least = num;
      }
  });
  return least;
}

exports.max = function max (arr) {
  if(!arr || arr.length == 0) {
    return 0;
  }
  let biggest = Number.NEGATIVE_INFINITY;
  arr.forEach( num => {
      if (num > biggest) {
          biggest = num;
      }
  });
  return biggest;
}

exports.avg = function avg (arr) {
  if(!arr || arr.length == 0) {
      return 0;
  }
  let total = 0;
  arr.forEach( num => {
      total += num;
  });
  return total / arr.length;
}
