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
console.log(reverse("dom"));

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

// 7.	Write a function filterLongWords() that takes an array of words and an integer i and returns a new array 
// containing only those words that were longer than i characters.
function filterLongWords(array, j) {
    return array.filter(elem => elem.length > j);
}
const arr = ["Hello", "World ", "Web", "Script", "Java"];
console.log(filterLongWords(arr, 4));

// 8.	Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and returns 
// the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) 
// should be computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use functional programming style/approach.

function computeSumOfSquares(inputArray) {
    return inputArray.map(y => y * y).reduce((a, b) => a + b);
}
const inputArray = [1, 2, 3];
console.log(computeSumOfSquares(inputArray));

// 9.	Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it 
// finds and prints only the numbers which are odd.

function printOddNumbersOnly(intArray) {
    return intArray.filter(a => a % 2 !== 0);
}
const intArray = [1, 2, 3, 4, 5];
console.log(printOddNumbersOnly(intArray));


// 10.	Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral 
// numbers and calculates and returns the sum of the squares of only the even numbers in the input array. E.g. 
// computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.

function computeSumOfSquaresOfEvensOnly(arrEvenarray) {
    return array.filter(a => a % 2 === 0)
        .map(b => b * b).reduce((a, b) => a + b);
}
const arrEven = [1, 2, 3, 4, 5];
console.log(computeSumOfSquaresOfEvensOnly(arrEven));


// 11.	Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) 
// (defined in Problem 4 above) without using Imperative programming. i.e. 
// Do NOT use any explicit looping construct; instead use functional programming style/approach. 

function sumReduce(arr) {
    return arr.reduce((a, b) => a + b);
}
console.log(sumReduce(array));

// 12.	Implement Javascript code for a function named, findSecondBiggest, which takes as input, 
// an array of numbers and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)

function findSecondBiggest(arr) {
    let first = arr[0];
    let second = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        }
    }
    return second;
}
console.log(array);
console.log(findSecondBiggest(array))

// 13.	Write a function named printFibo, that takes as input, a given length, n,
//  and any two starting numbers a and b, and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).
function printFibo(n, a, b) {
    const output = [];
    output[0] = a;
    output[1] = b;
    if (n === 1) {
        return output[0];
    }
    else if (n === 2) {
        return output;
    }
    else {
        for (let i = 2; i < n; i++) {
            output[i] = output[i - 1] + output[i - 2];
        }
        return output;
    }
}
console.log("\"" + printFibo(10, 0, 1) + "\", as output");

// 14.	Refer to your work on Lab Assignment 4. Add Javascript code to work with your 2 HTML forms as follows:

// a.	Login Form: Add code such that when the Submit button is clicked, the values entered in the input fields are printed to the Console.
// b.	New Product Form: Add code such that when the Submit button is clicked, the values 
// entered in the input fields are displayed in a pop-up window.
// 15.	Using JavaScript and HTML and CSS, implement a webpage that displays a working,
//  ticking counter Clock, that counts/displays the current Date and time of the browser host, in the format: 2019-11-4 12:16:01  
function displayClock() {
    let d = new Date();
    d = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()} :${d.getMinutes()}:${d.getSeconds()}`

    document.getElementById('clock').innerHTML = d;
    setTimeout(displayClock, 1000);
}
function display_c() {
    var refresh = 1000; // Refresh rate in milli seconds
    mytime = setTimeout('display_ct()', refresh)
}


