function merge(array1, array2) {
  let result = [];
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      result.push(array1.shift());
    } else if (array1[0] >= array2[0]) {
      result.push(array2.shift());
    }
  }
  return result.concat(array1).concat(array2);
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  let leftSorted = mergeSort(left);
  let rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

module.exports = {
  merge,
  mergeSort
};
