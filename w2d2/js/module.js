/**
 * module .js
 */

//  Global environment
console.log(window);

//Use IIFE imedeitely invoke funct expression
const module = (function () {//Module Pattern - 
    let firstName = "Peter";
    
    const getFirstName = function () {
        return this.firstName;
    }
    const setFirstName = function (newName) {
        this.firstName = newName;
    }
    console.log(firstName);
    const sayHello = function () {
        return "Hello " + firstName;
    }
    return {
        sayHello: sayHello,
        getName: getFirstName,
        setName: setFirstName

    }
})();

console.log(module.sayHello());
module.setName("John");
console.log(module.getName());
console.log(module.sayHello());
console.log(window);
console.log(window.undefined);

module const 