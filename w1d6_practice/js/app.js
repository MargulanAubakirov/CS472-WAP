 "use strict"
onload = function(){
    function sayHello(){
        alert("hello");
    }
    let elem = document.getElementById("B1");
    elem.onclick = sayHello;
};