const DEFAULT_VALUE = '';

let firstNumber = DEFAULT_VALUE;
let operator = DEFAULT_VALUE;
let secondNumber = DEFAULT_VALUE;
let displayValue = DEFAULT_VALUE;
let displayOperation = DEFAULT_VALUE;

function displayScreen(value) {
    displayOperation += value;
    display.innerHTML = displayOperation;
}

function deleteNumber() {
    displayOperation = displayOperation.slice(0, -1);
    display.innerHTML = displayOperation;
}

function updateDisplay(value) {
    display.innerHTML = value
    if (value !== "0") {
        displayOperation = value;
    } else {
        displayOperation = DEFAULT_VALUE;
    }
    displayValue = value;
}

function evaluate(equation) {
    expression = false;
    for(let i = 0; i < equation.length; i++) {
        if (!("+-/*".includes(equation[i])) && expression) {
            secondNumber += equation[i]
        } 
        else if (!("+-/*".includes(equation[i]))) {
            firstNumber += equation[i]
        } else {
            expression = true;
            if (secondNumber !== DEFAULT_VALUE) {
                operate(operator, firstNumber, secondNumber);
                firstNumber = displayValue;
                secondNumber = DEFAULT_VALUE;
            }
            operator = equation[i]
        }
        if (i === equation.length-1) {
            operate(operator, firstNumber, secondNumber)
        }
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
buttonAddition.onclick = () => displayScreen('+');
buttonSubtraction.onclick = () => displayScreen('-');
buttonMultiplication.onclick = () => displayScreen('*');
buttonDivision.onclick = () => displayScreen('/');

buttonDelete.onclick = () => deleteNumber();
buttonClear.onclick = () => updateDisplay("0");

buttonEquality.onclick = () => evaluate(displayOperation);

//Operate Function
function operate(operator, num1, num2) {
    if(operator === '+') {
        displayValue = parseInt(num1) + parseInt(num2);
    } else if(operator === '-') {
        displayValue = parseInt(num1) - parseInt(num2);
    } else if(operator === '*') {
        displayValue = parseInt(num1) * parseInt(num2);
    } else if(operator === '/') {
        displayValue = parseInt(num1) / parseInt(num2);
    } 
    displayValue = String(displayValue)
    updateDisplay(displayValue);
    firstNumber = DEFAULT_VALUE;
    operator = DEFAULT_VALUE;
    secondNumber = DEFAULT_VALUE;
}
