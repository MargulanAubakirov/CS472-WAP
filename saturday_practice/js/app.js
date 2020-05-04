// "use strict";
// (function f(){
// const alertButton1 =document.getElementById("b1");

// alertButton1.onclick = showAlert;

// function showAlert(){
//   alert("Mark");
// }
// })();


// const alertButton1 =document.getElementById("b1");

document.getElementById("b1").onclick = showAlert;
document.getElementById("b2").onclick = showAlert;

// function showAlert(name){
//     this.
// }

// alertButton1.getElementById("b1").onclick = function(){
//     document.body.style.fontSize = size + "px";
// }



// document.getElementById("b1").onclick = showAlert("MArk");
// document.getElementById("b2").onclick = showAlert("Gideon");

// function showAlert(name){
//   return function(){
//       alert(name.innerHTML);
//   };
// }

// b1=document.getElementById("b1");
// b2=document.getElementById("b2");

// b1.onclick = showAlert(b1);
// b2.onclick = showAlert(b2);

// function showAlert(name){
//   return function(){
//       alert(name.innerHTML);
//   };
// }


var printHello = function(name) {
	console.log("Hello " + name);
}
printHello("John");
