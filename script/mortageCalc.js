"use strict"
console.log("it is working!")

window.onload = init;

function init() {

    let calcButton = document.querySelector("#calcButton");
    let clearButton = document.querySelector("#clearButton");

    calcButton.addEventListener("click", calculate)
    clearButton.addEventListener("click", clear)
}

function calculate() {
    let aprField = Number(document.querySelector("#aprField").value)
    let loantermField = Number(document.querySelector("#loantermField").value)
    let loanamountField = Number(document.querySelector("#loanamountField").value);
    let monthlyInterestRate = (aprField / 100 / 12)
    let totalNumOfPayments = (loantermField * 12)
    let result = loanamountField * monthlyInterestRate * ((1 + monthlyInterestRate) ** totalNumOfPayments) / (((1 + monthlyInterestRate) ** totalNumOfPayments) - 1);

    result = result.toFixed(2);

    document.querySelector("#result").value = result;

}