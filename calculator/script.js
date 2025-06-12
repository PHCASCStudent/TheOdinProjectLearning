// Basic math functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) return 'Nope!';
  return a / b;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: return b;
  }
}

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetScreen = false;

const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('[data-digit]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

function resetCalculator() {
  firstOperand = '';
  secondOperand = '';
  currentOperator = null;
  shouldResetScreen = false;
  display.textContent = '0';
}

function appendDigit(digit) {
  if (display.textContent === '0' || shouldResetScreen) {
    display.textContent = digit;
    shouldResetScreen = false;
  } else if (digit === '.' && display.textContent.includes('.')) {
    return;
  } else {
    display.textContent += digit;
  }
}

digitButtons.forEach(btn => btn.addEventListener('click', e => {
  appendDigit(e.target.dataset.digit);
}));

operatorButtons.forEach(btn => btn.addEventListener('click', e => {
  handleOperator(e.target.dataset.operator);
}));

equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', resetCalculator);

display.textContent = '0';

function handleOperator(operator) {
  if (currentOperator !== null) {
    if (shouldResetScreen) {
      currentOperator = operator;
      return;
    }
    evaluate();
  }
  firstOperand = display.textContent;
  currentOperator = operator;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetScreen) return;
  secondOperand = display.textContent;
  let result = operate(currentOperator, firstOperand, secondOperand);
  if (typeof result === 'number' && !Number.isInteger(result)) {
    result = Math.round(result * 100000) / 100000;
  }
  display.textContent = result;
  firstOperand = result;
  currentOperator = null;
  shouldResetScreen = true;
}
