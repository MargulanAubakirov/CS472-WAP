 "use strict"
// onload = function(){
//     function sayHello(){
//         alert("hello");
//     }
//     let elem = document.getElementById("B1");
//     elem.onclick = sayHello;
// };

const things = {
    'x':5,
    'y':6
};
for (const key in things) {
    console.log(things[key]);
}


const things2 = {
    'x':5,
    'y':6
};
for (let key of things2) {
    console.log(key);
}
