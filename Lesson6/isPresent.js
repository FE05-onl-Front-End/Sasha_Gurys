const arr = [1, 2, 3, 4, 5, 3, 4, 2, 1, 2, 4, 5, 3, 1, 3, 3, 2, 4, 5]

const checkPresence = (el, arr) => {
    let isPresent = false;
    arr.forEach(element => {
        if (el == element) {
            isPresent = true
        }
    });
    return isPresent;
}

console.log(checkPresence(1, arr));
console.log(checkPresence(2, arr));
console.log(checkPresence(3, arr));
console.log(checkPresence(4, arr));
console.log(checkPresence(5, arr));
console.log(checkPresence(6, arr));
console.log(checkPresence(7, arr));