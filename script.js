"use strict";
const before = document.querySelector(".before-calculate");
const after = document.querySelector(".after-calculate");

let input = "";
let symbol = "";
let checkSymbol = true;

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

equalButton.addEventListener("click", function () {
  //   before.textContent = eval(before.textContent);
  after.textContent = eval(input);
});

clearButton.addEventListener("click", function () {
  before.textContent = "";
  after.textContent = "";
  symbol = "";
  input = "";
});

decimalButton.addEventListener("click", function () {
  before.textContent += ".";
});

oneButton.addEventListener("click", function () {
  before.textContent += "1";
  input += "1";
});

twoButton.addEventListener("click", function () {
  before.textContent += "2";
  input += "2";
});

threeButton.addEventListener("click", function () {
  before.textContent += "3";
  input += "3";
});

fourButton.addEventListener("click", function () {
  before.textContent += "4";
  input += "4";
});

fiveButton.addEventListener("click", function () {
  before.textContent += "5";
  input += "5";
});

sixButton.addEventListener("click", function () {
  before.textContent += "6";
  input += "6";
});

sevenButton.addEventListener("click", function () {
  before.textContent += "7";
  input += "7";
});

eightButton.addEventListener("click", function () {
  before.textContent += "8";
  input += "8";
});

nineButton.addEventListener("click", function () {
  before.textContent += "9";
  input += "9";
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
      input += input.slice(0, -1);
      input += "+";
      symbol = "+";
    }
  }
});

minusButton.addEventListener("click", function () {
  if (symbol !== "-") {
    if (symbol === "") {
      before.textContent += "-";
      input += "-";
      symbol = "-";
    } else if (symbol !== "+" || symbol !== "x" || symbol !== "÷") {
      before.textContent = before.textContent.slice(0, -1);
      before.textContent += "-";
      input += input.slice(0, -1);
      input += "-";
      symbol = "-";
    }
  }
});

mutiplyButton.addEventListener("click", function () {
  if (symbol !== "x") {
    if (symbol === "") {
      before.textContent += "x";
      input += "*";
      symbol = "x";
    } else if (symbol !== "+" || symbol !== "-" || symbol !== "÷") {
      before.textContent = before.textContent.slice(0, -1);
      before.textContent += "x";
      input += input.slice(0, -1);
      input += "*";
      symbol = "x";
    }
  }
});

divideButton.addEventListener("click", function () {
  if (symbol !== "÷") {
    if (symbol === "") {
      before.textContent += "÷";
      input += "/";
      symbol = "÷";
    } else if (symbol !== "+" || symbol !== "-" || symbol !== "x") {
      before.textContent = before.textContent.slice(0, -1);
      before.textContent += "÷";
      input += input.slice(0, -1);
      input += "/";
      symbol = "÷";
    }
  }
});
