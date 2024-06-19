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
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

let display = document.querySelector(".display");
let digitButtons = document.querySelectorAll(".digit");
let buttonContainer = document.querySelector(".button-container");
let operatorButtons = document.querySelectorAll(".operator");

let displayValue = document.createElement("span");

buttonContainer.addEventListener("click", function(e) {
    let target = e.target;
    switch (target) {
        case digitButtons[0]:
          displayValue.textContent += 0;
          display.appendChild(displayValue);
          break;
        case digitButtons[1]:
          displayValue.textContent += 1;
          display.appendChild(displayValue);
          break;
        case digitButtons[2]:
          displayValue.textContent += 2;
          display.appendChild(displayValue);
          break;
        case digitButtons[3]:
          displayValue.textContent += 3;
          display.appendChild(displayValue);
          break;
        case digitButtons[4]:
          displayValue.textContent += 4;
          display.appendChild(displayValue);
          break;
        case digitButtons[5]:
          displayValue.textContent += 5;
          display.appendChild(displayValue);
          break;
        case digitButtons[6]:
          displayValue.textContent += 6;
          display.appendChild(displayValue);
          break;
        case digitButtons[7]:
          displayValue.textContent += 7;
          display.appendChild(displayValue);
          break;
        case digitButtons[8]:
          displayValue.textContent += 8;
          display.appendChild(displayValue);
          break;
        case digitButtons[9]:
          displayValue.textContent += 9;
          display.appendChild(displayValue);
          break;
        
        case operatorButtons[0]:
          if (displayValue.textContent === "") {
            displayValue.textContent = 0;
          }
          displayValue.textContent += " + ";
          operatorButtons = "";
          break;
        case operatorButtons[1]:
          if (displayValue.textContent === "") {
            displayValue.textContent = 0;
          }
          displayValue.textContent += " - ";
          operatorButtons = "";
          break;
        case operatorButtons[2]:
          if (displayValue.textContent === "") {
            displayValue.textContent = 0;
          }
          displayValue.textContent += " * ";
          operatorButtons = "";
          break;
        case operatorButtons[3]:
          if (displayValue.textContent === "") {
            displayValue.textContent = 0;
          }
          displayValue.textContent += " / ";
          operatorButtons = "";
          break;
    }
})

