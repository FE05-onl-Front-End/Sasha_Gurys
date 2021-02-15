const arr = [43, 54, 12, "text", "TeXt", 54, "54", 0, false, "car", "CAR", 43];

const countElementInArr = (arr, el) => {
  let count = 0;
  arr.forEach((elem) => {
    if (el == elem) {
      count++;
    }
  });
  return count;
};

const arrLowerCase = arr.map((el) =>
  typeof el === "string" ? el.toLowerCase() : el
);

const arrCountObj = arrLowerCase.map((el, index, array) => {
  return { value: el, count: countElementInArr(array, el) };
});

console.log("массив с пересчитанными элементами:");
console.log(arrCountObj);

// можно было привести все value к типу string и использовать метод includes но я решил нахер и сделал свой кастомный includes:
const checkPresenceByValue = (el, arr) => {
  let isPresent = false;
  arr.forEach((element) => {
    if (el.value == element.value) {
      isPresent = true;
    }
  });
  return isPresent;
};

const arrUniques = [];

arrCountObj.forEach((el, i) => {
  if (!checkPresenceByValue(el, arrUniques)) {
    arrUniques.push(el);
  }
});

console.log("массив без повторок:");
console.log(arrUniques);

const getMaxCount = (arr) => {
  let maxCount = 0;
  arr.forEach((el) => (maxCount = el.count > maxCount ? el.count : maxCount));
  return maxCount;
};

const getMostPresentElements = (arr) => {
  const arrMostPresentElements = [];
  arr.forEach((el) => {
    if (el.count == getMaxCount(arr)) {
      arrMostPresentElements.push(el);
    }
  });
  return arrMostPresentElements;
};
const mostPresentElements = getMostPresentElements(arrUniques);

console.log("в данном массиве больше всего элемента(-ов):");
console.log(mostPresentElements);
