"use strict";
const before = document.querySelector(".before-calculate");
const after = document.querySelector(".after-calculate");
const checkNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];

let input = "";
let symbol = "";
let checkDot = "";

//Button
const zeroButton = document.querySelector(".zero");
const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const mutiplyButton = document.querySelector(".mutiply");
const divideButton = document.querySelector(".divide");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const equalButton = document.querySelector(".equal");

function calculateResult() {
  console.log(input);
  after.textContent = `${eval(input)}`;
}

function isNumber() {
  if (
    checkNumber.includes(
      before.textContent.charAt(before.textContent.length - 1)
    )
  ) {
    return true;
  } else {
    return false;
  }
}

// before.textContent = "0"; testing
// console.log(isNumber());

equalButton.addEventListener("click", function () {
  calculateResult();
});

clearButton.addEventListener("click", function () {
  before.textContent = "";
  after.textContent = "";
  symbol = "";
  input = "";
});

//problem with deleting number
deleteButton.addEventListener("click", function () {
  if (isNumber() === true) {
    before.textContent = before.textContent.substring(0, input.length - 1);
    input = input.substring(0, input.length - 1);
    symbol = "delete";
    console.log(symbol);
  } else if (isNumber() === false) {
    before.textContent = before.textContent.substring(0, input.length - 1);
    input = input.substring(0, input.length - 1);
    symbol = "";
  } else {
    console.log("Something is very wrong");
  }
});

decimalButton.addEventListener("click", function () {
  before.textContent += ".";
  input += ".";
  symbol = "";
});

zeroButton.addEventListener("click", function () {
  before.textContent += "0";
  input += "0";
  symbol = "";
});

oneButton.addEventListener("click", function () {
  before.textContent += "1";
  input += "1";
  symbol = "";
});

twoButton.addEventListener("click", function () {
  before.textContent += "2";
  input += "2";
  symbol = "";
});

threeButton.addEventListener("click", function () {
  before.textContent += "3";
  input += "3";

  symbol = "";
});

fourButton.addEventListener("click", function () {
  before.textContent += "4";
  input += "4";
  symbol = "";
});

fiveButton.addEventListener("click", function () {
  before.textContent += "5";
  input += "5";
  symbol = "";
});

sixButton.addEventListener("click", function () {
  before.textContent += "6";
  input += "6";
  symbol = "";
});

sevenButton.addEventListener("click", function () {
  before.textContent += "7";
  input += "7";
  symbol = "";
});

eightButton.addEventListener("click", function () {
  before.textContent += "8";
  input += "8";
  symbol = "";
});

nineButton.addEventListener("click", function () {
  before.textContent += "9";
  input += "9";
  symbol = "";
});

plusButton.addEventListener("click", function () {
  if (symbol !== "+") {
    if (symbol === "") {
      before.textContent += "+";
      input += "+";
      symbol = "+";
    } else if (symbol === "-" || symbol === "x" || symbol === "÷") {
      before.textContent = before.textContent.slice(0, -1);
      before.textContent += "+";
      input = input.substring(0, input.length - 1);
      input += "+";
      symbol = "+";
    } else if (symbol === "delete") {
      console.log("Number only");
    }
  }
});

minusButton.addEventListener("click", function () {
  if (symbol !== "-") {
    if (symbol === "") {
      before.textContent += "-";
      input += "-";
      symbol = "-";
    } else if (symbol === "+" || symbol === "x" || symbol === "÷") {
      before.textContent = before.textContent.slice(0, -1);
      before.textContent += "-";
      input = input.substring(0, input.length - 1);
      input += "-";
      symbol = "-";
    } else if (symbol === "delete") {
      console.log("Number only");
    }
  }
});

mutiplyButton.addEventListener("click", function () {
  if (symbol !== "x") {
    if (symbol === "") {
      before.textContent += "x";
      input += "*";
      symbol = "x";
    } else if (symbol === "+" || symbol === "-" || symbol === "÷") {
      before.textContent = before.textContent.slice(0, -1);
      before.textContent += "x";
      input = input.substring(0, input.length - 1);
      input += "*";
      symbol = "x";
    } else if (symbol === "delete") {
      console.log("Number only");
    }
  }
});

divideButton.addEventListener("click", function () {
  if (symbol !== "÷") {
    if (symbol === "") {
      before.textContent += "÷";
      input += "/";
      symbol = "÷";
    } else if (symbol === "+" || symbol === "-" || symbol === "x") {
      before.textContent = before.textContent.slice(0, -1);
      before.textContent += "÷";
      input = input.substring(0, input.length - 1);
      input += "/";
      symbol = "÷";
    } else if (symbol === "delete") {
      console.log("Number only");
    }
  }
});
