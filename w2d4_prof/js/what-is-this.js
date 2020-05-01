/**
 * what-is-this.js
 */
// "use-strict";

//"this" in the global environment/scope
console.log(this);//"this" reference to the global window object
console.log(this.name);
this.firstName = "Ana";
console.log(this.firstName);

//"this" inside a fuction declaration
function f() {
    console.log(this);
    this.firstName2 = "Ana2";
    console.log(this.firstName2);
}
window.f();
//"this" always tipically referes to object on wich the function
//where "this was encountered" was called

//this inisde a nested function

function f2() {
    let firstName = "Ana_";
    const g = function () {
        //with use strict on this -= undefined
        //without use strict on this -= window
        console.log(this);
        return this.firstName;
    }

    console.log(g());
}
f2();

//"this" inside a nested arrow function 
function f3(){
    let firstName ="Ana";
    const g = ()=> console.log(this);
    g();
}
f3();

function Person(firstNAme){
    console.log(this);
    this.firstName2 = firstNAme;
    console.log(this);

}
Person("Ana");//window
// const ana = new Person("Ana");

//in nested finction


//"this" inside an object
const f21 ={
    firstName: "Ana",
    g:function(){
        console.log(this);
    }
};
console.log(f21.g());

    