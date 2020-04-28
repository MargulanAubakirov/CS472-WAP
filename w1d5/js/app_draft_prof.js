"use strict";
//Comments
//Single-line comment
/*
* Multi-line comment
*/

//Variable declaration
var a;

//variable initialistion

a = 1;//Assighnment statements

var b = 2;

//ES6+ (ES2015)--TC39, ECMA, ECMAScript, Brendan Eich, etc.


const c = 3.14;
// c=4;
let d;
d = 5;
console.log(d);
d = c + 2;
console.log(d);
var i;
i = 6;
console.log(i);


//Data type
// Nmber e.g. 1, 1.5 etc
//Boolean e.g.  true. false
//null, undefined
let j = null;
let k;//undefined
console.log(k);

// String
const s = "Hello Wap";
console.log(s);
// Object
// e.g. object literal
const student = {
    studentID: 1001,
    name: "Anna"
};
let StudentID = 1002; //identifier naming rules
//Statement tenination - semi-colon(optional;but reccomended)
//Function declaration
function sum(n1, n2) {
    return n1 + n2;
}
//Function expression
const sum2 = function (n1, n2) {//anonymous function
    return n1 + n2;
}

const sumOf1and2 = sum2(1, 3);
console.log(sumOf1and2)

//Cannot start with number
//Linter

//Operators
//Ariphmetic operations:
//logical/boolean ops
//equality: ==(type coersion), === (stric equality; no type)
const n1 = "1";
const n2 = 1;
console.log(n1 == n2);
console.log(n1 === n2);

//Other logical ops->, >=, <, =<,

const b1 = false;
const b2 = true;
console.log(b1 || b2);//logical ""OR"; short -circuit



//Opreands
// Expressons
// Operator Presdense
// Truthy versus Falsey --0,false, null, undefined are falsey
// Logical (Boolean) operators/expressions
console.log(1 || 0 && 3); //(1||0&&3) = (1||0)=1
// console.log(1 || 0)&&3)

//Intrinsink functions
// alert("Hello WAP");
parseInt("1");


//Arrays--
const numbers = [1, 2, 3];
const emptyArray = [];
// const names = ["Anna," "Jaohn"];
const people = [
    { id: 1, name: "Anna" },
    { id: 2, name: "John" }
];
//COnstructs

//Conditional
//if//else
if (2 > 1) {
    console.log("Hey")

} else {
    //do nothing
}
// ternary
const r = (1 < 2) ? 1 : 2;
// function oneorTwo(){
// if (1<2) {
//     return1;
// } else {
//     return2;
// }
// }
// console.log(oneorTwo())

//labW1D5
/*1.	Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
*
*/
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(10, 20));


//2.	Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function max(a, b, c) {
    if (a > b && a > b) {
        return a;
    }
    if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}
console.log(max(101, 200, 130));


//3.Write a function isVowel() that takes a character
//  (i.e. a string of length 1) and returns true if
//  it is a vowel, false otherwise.

function isVowel(string) {
    if ((string.length == 1) && (string === "a" || string === "o" ||
        string === "i" || string === "e" || string === "u")) {
        return true;
    } else {
        return false;
    }
}
console.log(isVowel("e"));

/*4.	Define a function sum() and a function multiply() that sums and multiplies
 (respectively) all the numbers in an input array of numbers. For example, 
 sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. 
 Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
*/

// const numbersArray = [a,b,c,d];
function sum5(numbersArray) {
    let sum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        let elem = numbersArray[i];
        sum += elem;

    }
    return sum
}
function multiply(numbersArray) {

    let mul = 1;
    for (let i = 0; i < numbersArray.length; i++) {
        let elem = numbersArray[i];
        mul *= elem;
    }
    return mul;
}
const numbersArray = [1, 2, 3, 4];
console.log(sum5(numbersArray));
console.log(multiply(numbersArray));



// 5.	Define a function reverse() that computes the reversal of a string. For example, 
// reverse("jag testar") should return the string "ratset gaj".

function reverse(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];

    }
    return newString;
}
console.log(reverse("jag testar"));

// 6.	Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(array) {
    let longestWord;
    let length = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > length) {
            length = array[i].length;
            longestWord = array[i];

        }
    }
    return longestWord;

}
const array = ["doma", "adom", "banana"];
console.log(findLongestWord(array));


