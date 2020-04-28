
"use strict";
// W2 d1 closer
console.log(window);
var someoneName;//lexical env:global env

function printName1(){
    var someoneName2="John";//function-scope variable
    var someoneName = "Anna";
    console.log(name)
    console.log(someoneName);
    if (true){
        var someoneName3 = "Bob";
        console.log(someoneName);
        console.log(someoneName3);
    }
}
const func1 = function(name){
    var x;
    console.log(name+x);
}

printName1();
// console.log(someoneName2);
// console.log(someoneName3);

//JS brfore 2015(ES5 and <)
//Global scope


//HOSTING e.g. hoisting flag
//JS code during execution goes through 2 phases
//What is/gets hoisted
//all declarations(vars and functions) are hoisted


console.log(age);
// console.log(agel);
// console.log(age2);
var age;
const agel =23;//temporary dead zone
let age2;

//hoisted function
printSum(1,2)

function printSum(a, b){
    console.log(a+b);
    const func1=function(){
        var i=0;
        if(i>1){
            console.log("Hello i")
        }
    }
}

// ??What kind of function is this?//function expression
// ??Does it hoisted? No
const printSum2 = function(a,b){
    console.lof(a+b);
}

//Scope chain
var firstName="Carlos" //free variable
function computeAndPrintsSum(a,b){
    var lastName = "Ana"
    console.log(`${firstName}, the sum of ${a} and ${b} is ${(a+b)}`);
    const func1=function(){
        var j = 15;
        console.log(`${lastName}, the sum of ${a} and ${b} is ${(a+b)}`);
    }
    // console.log(j);
    func1();

}
computeAndPrintsSum(1,2);

console.log(a);//undefined
var a = 0;//undefined
a=0;

let b;//temporary daed-zone
console.log(b);
b=1;

// console.log(a1);
// a1 = 0; //nuamces quirks oddities

//Functional programming in JS
//first class citizen

//int age =15;
//int calc(int a){...}

const func2= function(){
    //function expression

};
//Higher order function
const calculator =  function(op1, op2, operation) {
    return operation(op1, op2);
}

function addOp(op1, op2){
    return op1+op2;
}
const addResult = calculator(1, 2, addOp)
console.log(addResult);

const addFunctionMaker = function(){
    const addFunc = function(a,b){
        return a+b;
    }
    return addFunc;
}
const addOneandTwo = addFunctionMaker();
console.log(addOneandTwo(1,2));