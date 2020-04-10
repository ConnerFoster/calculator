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

let displayArray = [];


function add(num1,num2){
    display.textContent = num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}
function modulo(num1,num2){
    return num1 % num2;
}
function squared(num){
    return num*num;
}

//function operate() {
    //const operators = ["add","subtract","multiply","divide"];


//}
function display1() {
    displayArray.push(1);
    display.textContent = displayArray.join(" ");
    console.log(displayArray.toString());
}
function display2() {
    displayArray.push(2);
    display.textContent = displayArray.join(" ");
    console.log(displayArray.toString());
}
/*let num1 = 0;
let num2 = 0;
function storeNum1() {
    num1 = displayArray.join("");
    displayArray.length = 0;
    display.textContent = " ";
}
function storeNum2() {
    num2 = displayArray.join("");
    displayArray.length = 0;
    display.textContent = " ";
}*/
function operate(operator,num1,num2) {
    if (operator == "addition") {
        add(num1,num2);
    }
    else if (operator == "subtraction") {
        subtract(num1,num2);
    }
    else if (operator == "multiplication") {
        multiply(num1,num2);
    }
    else if (operator == "division") {
        divide(num1,num2);
    }
    else {
        console.log('error')
    }
}
oneButton.addEventListener('click', display1);
twoButton.addEventListener('click', display2);
addButton.addEventListener('click', operate);




