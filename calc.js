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
let backspace = document.querySelector(".backspace");

display.textContent = 0;
let result = "";

// One event listener for all the buttons, possible by using event delegation.
buttonContainer.addEventListener("click", function(e) {
    let target = e.target;
    let firstNum = display.textContent.split(" ").slice(0, 1).toString();
    let operator = display.textContent.split(" ").slice(1, 2).toString();
    let secondNum = display.textContent.split(" ").slice(2, 3).toString();

    switch (target) {
        case digitButtons[0]:
          if (display.textContent == 0) {
            display.textContent = "";
          }

          if (result !== "") {
            display.textContent = "";
          }

          display.textContent += 9;
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

          display.textContent += 8;
          result = "";
          break;
        case digitButtons[2]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          
          if (result !== "") {
            display.textContent = "";
          }

          display.textContent += 7;
          result = "";
          break;
        case digitButtons[3]:
          if (display.textContent == 0) {
            display.textContent = "";
          }

          if (result !== "") {
            display.textContent = "";
          }

          display.textContent += 6;
          result = "";
          break;
        case digitButtons[4]:
          if (display.textContent == 0) {
            display.textContent = "";
          }

          if (result !== "") {
            display.textContent = "";
          }

          display.textContent += 5;
          result = "";
          break;
        case digitButtons[5]:
          if (display.textContent == 0) {
            display.textContent = "";
          }

          if (result !== "") {
            display.textContent = "";
          }

          display.textContent += 4;
          result = "";
          break;
        case digitButtons[6]:
          if (display.textContent == 0) {
            display.textContent = "";
          }
          
          if (result !== "") {
            display.textContent = "";
          }

          display.textContent += 3;
          result = "";
          break;
        case digitButtons[7]:
          if (display.textContent == 0) {
            display.textContent = "";
          }

          if (result !== "") {
            display.textContent = "";
          }

          display.textContent += 2;
          result = "";
          break;
        case digitButtons[8]:
          if (display.textContent == 0) {
            display.textContent = "";
          }

          if (result !== "") {
            display.textContent = "";
          }

          display.textContent += 1;
          result = "";
          break;
        case digitButtons[9]:
          if (display.textContent == 0) {
            display.textContent = "";
          }

          if (result !== "") {
            display.textContent = "";
          }

          display.textContent += 0;
          result = "";
          break;
        
        case operatorButtons[0]:
          if (secondNum !== "") {
            display.textContent = operate(operator, Number(firstNum), Number(secondNum));
            if (display.textContent == "") {
              display.textContent = 0;
            }
            
            if (operator == "/" && secondNum == "0") {
              alert("Cannot Divide By Zero.");
              display.textContent = 0;
            }
            display.textContent += " + ";
          }

          if (operator == "") {
            display.textContent += " + ";
          }

          if (result !== "") {
            result = "";
          }
          break;
        case operatorButtons[1]:
          if (secondNum !== "") {
            display.textContent = operate(operator, Number(firstNum), Number(secondNum));
            if (display.textContent == "") {
              display.textContent = 0;
            }
            display.textContent += " - ";
          }

          if (operator == "/" && secondNum == "0") {
            alert("Cannot Divide By Zero.");
            display.textContent = 0;
          }

          if (operator == "") {
            display.textContent += " - ";
          }
          
          if (result !== "") {
            result = "";
          }
          break;
        case operatorButtons[2]:
          if (secondNum !== "") {
            display.textContent = operate(operator, Number(firstNum), Number(secondNum));
            if (display.textContent == "") {
              display.textContent = 0;
            }
            display.textContent += " * ";
          }

          if (operator == "/" && secondNum == "0") {
            alert("Cannot Divide By Zero.");
            display.textContent = 0;
          }

          if (operator == "") {
            display.textContent += " * ";
          }

          if (result !== "") {
            result = "";
          }
          break;
        case operatorButtons[3]:
          if (secondNum !== "") {
            display.textContent = operate(operator, Number(firstNum), Number(secondNum));
            if (display.textContent == "") {
              display.textContent = 0;
            }
            display.textContent += " / ";
          }

          if (operator == "/" && secondNum == "0") {
            alert("Cannot Divide By Zero.");
            display.textContent = 0;
          }

          if (operator == "") {
            display.textContent += " / ";
          }

          if (result !== "") {
            result = "";
          }
          break;
        
        case clearButton:
          if (display.textContent !== "0") {
            display.textContent = "";
          }
          display.textContent = 0;
          break;
        
        case equalButton:
          if (operator == "/" && secondNum == "0") {
            alert("Cannot Divide By Zero.");
            display.textContent = 0;
          } else if (firstNum && operator && secondNum !== "") {
            display.textContent = operate(operator, Number(firstNum), Number(secondNum));
            result = display.textContent;
            if (display.textContent == "") {
              display.textContent = 0;
            }
          }
          break;
        
        case backspace:
          if (result !== "") {
            result = "";
          }

          if (secondNum == "") {
          display.textContent = display.textContent.replaceAll(" ", "").replace(operator, "");
          } else {
            display.textContent = display.textContent.split("").toSpliced(-1, 1).join("");
          }

          if (firstNum !== "" && operator == "") {
            display.textContent = display.textContent.split("").toSpliced(-1, 1).join("");
            if (firstNum.length == 1) {
              display.textContent = 0;
            }
          }
    }   
})

