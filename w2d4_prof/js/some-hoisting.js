/**
 * some-hoisting
 */
"use strict";

//what scope is the variable, x, in? Global scope

// let x = 10; //Is x hoisted< yes or no? NO, because it is a not a variable declaration
// console.log(x)
//Hoisting: variable declarations of functions declarations

// counter = 0;


console.log(x);//undefined
var x = 1;//
const f = function(){
    console.log(x);//1, becaus no x declaration (no var)
    x = 15; //with var keyword added, function scope; witjout var - global variable
    console.log(x);
    if (x>10){// block scope
        let  y = 20;//var make it function scope: const/let makes y block scope
        console.log(x);
        console.log(y);
    }
    console.log(y);
}
f();
console.log(x);