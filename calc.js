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
          }
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
          }
          display.textContent += 1;
          result = "";
          break;
        case digitButtons[2]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
          }
          display.textContent += 2;
          result = "";
          break;
        case digitButtons[3]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
          }
          display.textContent += 3;
          result = "";
          break;
        case digitButtons[4]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
          }
          display.textContent += 4;
          result = "";
          break;
        case digitButtons[5]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
          }
          display.textContent += 5;
          result = "";
          break;
        case digitButtons[6]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
          }
          display.textContent += 6;
          result = "";
          break;
        case digitButtons[7]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
          }
          display.textContent += 7;
          result = "";
          break;
        case digitButtons[8]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
          }
          display.textContent += 8;
          result = "";
          break;
        case digitButtons[9]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          if (result !== "") {
            display.textContent = "";
          }
          display.textContent += 9;
          result = "";
          break;
        
        case operatorButtons[0]:
          display.textContent += " + "
          operatorButtons = "";
          if (!result == "") {
            result = "";
          }
          break;
        case operatorButtons[1]:
          display.textContent += " - ";
          operatorButtons = "";
          if (!result == "") {
            result = "";
          }
          break;
        case operatorButtons[2]:
          display.textContent += " * ";
          operatorButtons = "";
          if (!result == "") {
            result = "";
          }
          break;
        case operatorButtons[3]:
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
          display.textContent = 0;
          operatorButtons = document.querySelectorAll(".operator");
          break;
        
        case equalButton:
          let firstNum = display.textContent.split(" ").slice(0, 1).toString();
          let expOperator = display.textContent.split(" ").slice(1, 2).toString();
          let secondNum = display.textContent.split(" ").slice(2, 3).toString();
          if (firstNum && expOperator && secondNum !== "") {
            display.textContent = operate(expOperator, Number(firstNum), Number(secondNum));
            result = display.textContent;
            operatorButtons = document.querySelectorAll(".operator");
          }
    }
})

