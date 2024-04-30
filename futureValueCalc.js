"use strict"
console.log("code is running inside futureValueCalc.js");

window.onload = function () {
//look through the HTML doc for something with the id of futureValueForm 
//and store it in a variable 
const futureValueForm= document.querySelector("futureValueForm");

futureValueForm.addEventListener("submit",calcFutureValue);
}

function calcFutureValue() {
    console.log ("candy did that")
}
