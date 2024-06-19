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
displayValue.textContent = 0;
display.appendChild(displayValue);

buttonContainer.addEventListener("click", function(e) {
    let target = e.target;
    switch (target) {
        case digitButtons[0]:
          if (displayValue.textContent === 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent += 0;
          break;
        case digitButtons[1]:
          if (displayValue.textContent == 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent += 1;
          break;
        case digitButtons[2]:
          if (displayValue.textContent == 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent += 2;
          break;
        case digitButtons[3]:
          if (displayValue.textContent == 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent += 3;
          break;
        case digitButtons[4]:
          if (displayValue.textContent == 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent += 4;
          break;
        case digitButtons[5]:
          if (displayValue.textContent == 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent += 5;
          break;
        case digitButtons[6]:
          if (displayValue.textContent == 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent += 6;
          break;
        case digitButtons[7]:
          if (displayValue.textContent == 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent += 7;
          break;
        case digitButtons[8]:
          if (displayValue.textContent == 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent += 8;
          break;
        case digitButtons[9]:
          if (displayValue.textContent == 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent += 9;
          break;
        
        case operatorButtons[0]:
          displayValue.textContent += " + ";
          operatorButtons = "";
          break;
        case operatorButtons[1]:
          displayValue.textContent += " - ";
          operatorButtons = "";
          break;
        case operatorButtons[2]:
          displayValue.textContent += " * ";
          operatorButtons = "";
          break;
        case operatorButtons[3]:
          displayValue.textContent += " / ";
          operatorButtons = "";
          break;
        
        case clearButton:
          if (displayValue.textContent !== 0) {
            displayValue.textContent = "";
          }
          displayValue.textContent = 0;
          operatorButtons = document.querySelectorAll(".operator");
          break;
        
        case equalButton:
          let firstNum = Number(displayValue.textContent.split(" ").slice(0, 1));
          let expOperator = displayValue.textContent.split(" ").slice(1, 2).toString();
          let secondNum = Number(displayValue.textContent.split(" ").slice(2, 3));
          if (!firstNum.toString() || secondNum || expOperator == null) {
            displayValue.textContent = "";
            displayValue.textContent = operate(expOperator, firstNum, secondNum);
          }
          operatorButtons = document.querySelectorAll(".operator");
    }
})

