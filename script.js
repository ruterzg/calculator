const result = document.getElementById('result');
let currentOperator = '';
let firstNumber = '';
let secondNumber = '';

function setNumber(number) {
  if (currentOperator && secondNumber) {
    result.innerHTML += number;
    secondNumber += number;
  } else if (!currentOperator) {
    if (result.innerHTML === '0') {
      firstNumber = number;
      result.innerHTML = number;
    } else {
      firstNumber += number;
      result.innerHTML += number;
    }
  } else {
    secondNumber = number;
    result.innerHTML = number;
  }
}

function setOperator(operator) {
  currentOperator = operator;
}

function resulting() {
  switch (currentOperator) {
    case '+':
      result.innerHTML = +firstNumber + +secondNumber;
      break;
    case '-':
      result.innerHTML = +firstNumber - +secondNumber;
      break;
    case '*':
      result.innerHTML = +firstNumber * +secondNumber;
      break;
    case '/':
      result.innerHTML = +firstNumber / +secondNumber;
      break;
  }
}

function clean() {
  result.innerHTML = 0;
  currentOperator = '';
  firstNumber = '';
  secondNumber = '';
}
