function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

let firstNumber;
let operator;
let secondNumber;

function operate(operator, num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}

let display = document.querySelector(".display");
let digitButtons = document.querySelectorAll(".digit");
let buttonContainer = document.querySelector(".button-container");
let operatorButtons = document.querySelectorAll(".operator");
let clearButton = document.querySelector(".clear");
let equalButton = document.querySelector(".equal");

let displayValue = document.createElement("span");
display.appendChild(displayValue);
display.textContent = 0;

let result = "";

buttonContainer.addEventListener("click", function(e) {
    let target = e.target;
    switch (target) {
        case digitButtons[0]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
            displayValue.textContent = "";
          }
          displayValue.textContent += 0;
          display.textContent += 0;
          result = "";
          break;
        case digitButtons[1]:
          if (display.textContent == 0) {
            display.textContent = "";
            result = "";
          }
          if (result !== "") {
            display.textContent = "";
            displayValue.textContent = "";
          }
          displayValue.textContent += 1;
          display.textContent += 1;
          result = "";
          break;
        case digitButtons[2]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
            displayValue.textContent = "";
          }
          displayValue.textContent += 2;
          display.textContent += 2;
          result = "";
          break;
        case digitButtons[3]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
            displayValue.textContent = "";
          }
          displayValue.textContent += 3;
          display.textContent += 3;
          result = "";
          break;
        case digitButtons[4]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
            displayValue.textContent = "";
          }
          displayValue.textContent += 4;
          display.textContent += 4;
          result = "";
          break;
        case digitButtons[5]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
            displayValue.textContent = "";
          }
          displayValue.textContent += 5;
          display.textContent += 5;
          result = "";
          break;
        case digitButtons[6]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
            displayValue.textContent = "";
          }
          displayValue.textContent += 6;
          display.textContent += 6;
          result = "";
          break;
        case digitButtons[7]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
            displayValue.textContent = "";
          }
          displayValue.textContent += 7;
          display.textContent += 7;
          result = "";
          break;
        case digitButtons[8]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
            displayValue.textContent = "";
          }
          displayValue.textContent += 8;
          display.textContent += 8;
          result = "";
          break;
        case digitButtons[9]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
            displayValue.textContent = "";
          }
          displayValue.textContent += 9;
          display.textContent += 9;
          result = "";
          break;
        
        case operatorButtons[0]:
          displayValue.textContent += " + ";
          display.textContent += " + "
          operatorButtons = "";
          if (!result == "") {
            result = "";
          }
          break;
        case operatorButtons[1]:
          displayValue.textContent += " - ";
          display.textContent += " - ";
          operatorButtons = "";
          if (!result == "") {
            result = "";
          }
          break;
        case operatorButtons[2]:
          displayValue.textContent += " * ";
          display.textContent += " * ";
          operatorButtons = "";
          if (!result == "") {
            result = "";
          }
          break;
        case operatorButtons[3]:
          displayValue.textContent += " / ";
          display.textContent += " / ";
          operatorButtons = "";
          if (!result == "") {
            result = "";
          }
          break;
        
        case clearButton:
          if (display.textContent !== "0") {
            display.textContent = "";
          }
          displayValue.textContent = 0;
          display.textContent = 0;
          operatorButtons = document.querySelectorAll(".operator");
          break;
        
        case equalButton:
          let firstNum = Number(displayValue.textContent.split(" ").slice(0, 1));
          let expOperator = displayValue.textContent.split(" ").slice(1, 2).toString();
          let secondNum = Number(displayValue.textContent.split(" ").slice(2, 3));
          if (!firstNum.toString() || secondNum.toString() || expOperator == null) {
            display.textContent = operate(expOperator, firstNum, secondNum);
            displayValue.textContent = display.textContent;
            result = display.textContent;
          }
          operatorButtons = document.querySelectorAll(".operator");
    }
})

