const reverse = arr => {
    return arr.map( (el, i, arr) => arr[arr.length - 1 - i])
}

const data = [1, 2, 3, 4];
console.log(reverse(data)); // [3, 2, 1]
