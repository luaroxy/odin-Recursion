function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const middleIndex = Math.ceil(arr.length / 2);
  const firstHalf = arr.splice(0, middleIndex);
  const secondHalf = arr.splice(-middleIndex);

  mergeSort(firstHalf);
  mergeSort(secondHalf);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i <= firstHalf.length - 1 && j <= secondHalf.length - 1) {
    if (firstHalf[i] < secondHalf[j]) {
      arr[k++] = firstHalf[i++];
    } else {
      arr[k++] = secondHalf[j++];
    }
  }

  for (; i <= firstHalf.length - 1; i++) {
    arr[k++] = firstHalf[i];
  }

  for (; j <= secondHalf.length - 1; j++) {
    arr[k++] = secondHalf[j];
  }

  return arr;
}

console.log(mergeSort([5, 3, 2, 4, 8, 1]));
console.log(mergeSort([87,54,-4,11,4]))
console.log(mergeSort([]));
