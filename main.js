const clearButton = document.getElementById('clear');
const squaredButton = document.getElementById('squared');
const moduloButton = document.getElementById('modulo');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const subtractButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const equalsButton = document.getElementById('equals');
const oneButton = document.getElementById('one');
const twoButton = document.getElementById('two');
const threeButton = document.getElementById('three');
const fourButton = document.getElementById('four');
const fiveButton = document.getElementById('five');
const sixButton = document.getElementById('six');
const sevenButton = document.getElementById('seven');
const eightButton = document.getElementById('eight');
const nineButton = document.getElementById('nine');
const zeroButton = document.getElementById('zero');
const decimalButton = document.getElementById('decimal');
const buttonDiv = document.getElementById('button-div');
const display = document.getElementById('display');
const calculatorDiv = document.getElementById('calculator');
const displayText = document.getElementById('displayText');
let displayArray = [];
oneButton.addEventListener('click', displayButtons);
twoButton.addEventListener('click', displayButtons);
threeButton.addEventListener('click', displayButtons);
fourButton.addEventListener('click', displayButtons);
fiveButton.addEventListener('click', displayButtons);
sixButton.addEventListener('click', displayButtons);
sevenButton.addEventListener('click', displayButtons);
eightButton.addEventListener('click', displayButtons);
nineButton.addEventListener('click', displayButtons);
zeroButton.addEventListener('click', displayButtons)
decimalButton.addEventListener('click', displayDecimal)
divideButton.addEventListener('click', operatorPressed);
multiplyButton.addEventListener('click', operatorPressed);
addButton.addEventListener('click', operatorPressed);
subtractButton.addEventListener('click', operatorPressed);
clearButton.addEventListener('click', reset);
equalsButton.addEventListener('click', equalPressed)

let num1 = 0;
let num2 = 0;
let operator = '';
let ans = 0;
let lastChar = displayArray[displayArray.length-1];




function add(num1, num2) {
  return Number(num1) + Number(num2);
  
}

function subtract(num1, num2) {
  return num1 - num2;
  
}

function multiply(num1, num2) {
  return num1 * num2;
  
}

function divide(num1, num2) {
  return num1 / num2;
  
}

function modulo(num1, num2) {
  return num1 % num2;
}

function squared(num) {
  return num * num;
}

function displayButtons(evt) {
  displayArray.push(evt.target.value);
  displayText.textContent = displayArray.join('')
}
function displayDecimal() {
    if(displayArray.includes('.')){
        displayText.textContent = displayArray.join('');
    }
    else{
        displayArray.push('.');
        displayText.textContent = displayArray.join('')
    }
    
}

function operatorPressed(evt) {
  if(operator == false) {
  num1 = displayArray.join('');
  displayArray.length = 0;
  operator = evt.target.value;
  }
  else {
  operator = evt.target.value;
  num1 = ans;
  }
  
}

function equalPressed() {
  num2 = displayArray.join('');
  operate(operator, num1, num2);
  displayArray.length = 0;
  
}

function operate(operator, num1, num2) {
  if (operator == "add") {
    displayText.textContent = add(num1, num2);
    operator ='';
    ans = add(num1,num2);
    
  } else if (operator == "subtract") {
    displayText.textContent = subtract(num1, num2);
    operator = '';
    ans = subtract(num1,num2);
    
  } else if (operator == "multiply") {
    displayText.textContent = multiply(num1, num2);
    operator = '';
    ans = multiply(num1,num2);
  } else if (operator == "divide") {

    displayText.textContent = divide(num1, num2);
    operator = '';
    ans = divide(num1,num2);

  } else {
    console.log('error')
  }
}



function reset() {
  location.reload();
  //displayText.textContent = '0';
  //displayArray.length = 0;
}
