const DEFAULT_VALUE = '';

let firstNumber = DEFAULT_VALUE;
let operator = '+';
let secondNumber = DEFAULT_VALUE;
let displayValue = DEFAULT_VALUE;

function updateDisplay() {
    display.innerHTML = displayValue;
}

function displayScreen(value) {
    displayValue += value;
    display.innerHTML = displayValue;
}

function deleteNumber() {
    displayValue = displayValue.slice(0, -1);
    display.innerHTML = displayValue;
}

function clearDisplay() {
    display.innerHTML = '0'
    displayValue = DEFAULT_VALUE;
    firstNumber =DEFAULT_VALUE;
}

function evaluate(operatorSign) {
    operator = operatorSign;
    if (firstNumber == DEFAULT_VALUE) {
        firstNumber = displayValue;
        displayValue = DEFAULT_VALUE;
    } else {
        displayValue = firstNumber;
        firstNumber = displayValue;
        updateDisplay();
        displayValue = DEFAULT_VALUE;
    }
}
//Calculator functionality
let display = document.getElementById('display');
let buttonZero = document.getElementById('btn-zero');
let buttonOne = document.getElementById('btn-one');
let buttonTwo = document.getElementById('btn-two');
let buttonThree = document.getElementById('btn-three');
let buttonFour = document.getElementById('btn-four');
let buttonFive = document.getElementById('btn-five');
let buttonSix = document.getElementById('btn-six');
let buttonSeven = document.getElementById('btn-seven');
let buttonEight = document.getElementById('btn-eight');
let buttonNine = document.getElementById('btn-nine');
let buttonAddition = document.getElementById('btn-addition');
let buttonSubtraction = document.getElementById('btn-subtraction');
let buttonMultiplication = document.getElementById('btn-multiplication');
let buttonDivision = document.getElementById('btn-division');
let buttonEquality = document.getElementById('btn-equality');
let buttonClear = document.getElementById('btn-clear');
let buttonDelete = document.getElementById('btn-delete');

buttonOne.onclick = () => displayScreen('1');
buttonTwo.onclick = () => displayScreen('2');
buttonThree.onclick = () => displayScreen('3');
buttonFour.onclick = () => displayScreen('4');
buttonFive.onclick = () => displayScreen('5');
buttonSix.onclick = () => displayScreen('6');
buttonSeven.onclick = () => displayScreen('7');
buttonEight.onclick = () => displayScreen('8');
buttonNine.onclick = () => displayScreen('9');
buttonZero.onclick = () => displayScreen('0');

buttonDelete.onclick = () => deleteNumber();
buttonClear.onclick = () => clearDisplay();

buttonAddition.onclick = () => evaluate('+');
buttonSubtraction.onclick = () => evaluate('-');
buttonDivision.onclick = () => evaluate('/');
buttonMultiplication.onclick = () => evaluate('*');
buttonEquality.onclick = () => operate(operator, firstNumber, displayValue);
//Basic Operation Functions
function addition(num1, num2) {
    displayValue = parseInt(num1)+parseInt(num2);
    displayValue = String(displayValue)
    firstNumber = displayValue
    updateDisplay();
}

function subtraction(num1, num2) {
    displayValue =  parseInt(num1)-parseInt(num2);
    displayValue = String(displayValue)
    firstNumber = displayValue
    updateDisplay();
}

function multiplication(num1, num2) {
    displayValue =  parseInt(num1)*parseInt(num2);
    displayValue = String(displayValue)
    firstNumber = displayValue
    updateDisplay();
}

function division(num1, num2) {
    displayValue =  parseInt(num1)/parseInt(num2);
    displayValue = String(displayValue)
    firstNumber = displayValue
    updateDisplay();
}
//Operate Function
function operate(operator, num1, num2) {
    if(operator === '+') {
        addition(num1, num2);
    } else if(operator === '-') {
        subtraction(num1, num2);
    } else if(operator === '*') {
        multiplication(num1, num2);
    } else if(operator === '/') {
        division(num1, num2);
    } else {
        return TypeError("no operator was choosen")
    }
}