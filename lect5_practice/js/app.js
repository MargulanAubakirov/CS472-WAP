
"use strict";
const languages = ['Bacic', 'TurboPascal', 'Java', 'JS', 'Pascal'];
function sliceFunction(languages) {
    var modernLanguges = languages.slice(2, 4);
    return modernLanguges;
}
console.log(sliceFunction(languages));


const languages2 = ['Java', 'JS', 'Bacic', 'TurboPascal', 'Pascal', 'Assembler', 'Latin'];
function spliceFunction(languages) {
    var oldLanguges = languages.splice(2, 4);
    return oldLanguges;
}
console.log(spliceFunction(languages2));



const array = [1, 2, 3, 4, 5];
const result = array.map(function (value1, index, array) {
    return value1 + 10;
})
console.log(result);


const arr = [1, 2, 3, 4, 5];
const result1 = arr.filter(function (value1, index, array) {
    return value1%2==0;
})
console.log(result1);


const arr2 = [1, 2, 3, 4, 5];
const result2 = arr2.reduce(function (prevVal, value2, index, array) {
    return prevVal-value2;
})
console.log(result2);


