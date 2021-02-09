const data = [1, 2, 3, 1, 2];

const removeCopies = arr => {
    let noCopiesArr = [];
    arr.forEach(el => {
        if (!noCopiesArr.includes(el)) {
            noCopiesArr.push(el);
        }
    });
    return noCopiesArr;
}

console.log(removeCopies(data));