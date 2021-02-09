const isEqual = (arr1, arr2) => {
  let loops = 0;

  if (arr1.length > arr2.length) {
    loops = arr1.length;
  } else if (arr1.length < arr2.length) {
    loops = arr2.length;
  } else {
    loops = arr1.length;
  }

  let isEqual = true;

  for (let i = 0; i < loops; i++) {
    isEqual = arr1[i] === arr2[i] ? true : false;
  }

  return isEqual;
};

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false
