"use strict"
console.log("it is working!")

window.onload = init;

function init() {

    let calcButton = document.querySelector("#calcButton");
    calcButton.addEventListener("click", calculate)

}

//assign fields and create function to calculate the results for monthly payments and total interest
function calculate() {
    let aprField = Number(document.querySelector("#aprField").value)
    let loantermField = Number(document.querySelector("#loantermField").value)
    let loanamountField = Number(document.querySelector("#loanamountField").value);

     //do the math
    let monthlyInterestRate = (aprField / 100 / 12);
    let totalNumOfPayments = (loantermField * 12);
    let result = loanamountField * monthlyInterestRate * ((1 + monthlyInterestRate) ** totalNumOfPayments) / (((1 + monthlyInterestRate) ** totalNumOfPayments) - 1);
    let totalInterestPaid = result * totalNumOfPayments - loanamountField;

    result = result.toFixed(2);

    totalInterestPaid = totalInterestPaid.toFixed(2)

    document.querySelector("#result").value = result;

    document.querySelector("#totalInterestPaid").value = totalInterestPaid;
}

