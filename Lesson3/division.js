let numToDiv = +prompt("Что делим?");
let numToDivBy = +prompt("На что делим?");
let numToLimBy = +prompt("Какое частное назовем минимумом?");
let numOfDivs = 0;

do {
    numToDiv /= numToDivBy;
    numOfDivs++;
} while (numToDiv > numToLimBy);

alert(`мы делились ${numOfDivs} раз, а доделились мы до ${numToDiv}`);