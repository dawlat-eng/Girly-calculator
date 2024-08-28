let currentInput = '';
let operator = '';
let firstOperand = null;

function updateScreen() {
    document.getElementById('screen').innerText = currentInput || '0';
}   

function appendNumber(number){ //attched num
    currentInput+=number //currentInput=currentInput + number
    updateScreen()
}

function appendOperator(oper){
    if(currentInput=== '') return;

    if(firstOperand===null){
        firstOperand = parseFloat(currentInput);
    } else if (operator){
        calculate();
    }

    operator = oper;
    currentInput = '';
}

function calculate(){
    if(firstOperand === null || currentInput ==='') return;

    const secondOperand = parseFloat(currentInput);
    let result;
   
    switch (operator) {
        case '+' :
               result = firstOperand + secondOperand;
            break;
        case '-':
                result = firstOperand - secondOperand;
             break;
         case '*':
                 result = firstOperand * secondOperand;
             break;
        case '/':
                result = firstOperand / secondOperand;
            break;
        default:
            return;
    }


    currentInput = result.toString();
    firstOperand = null;
    updateScreen()
}

function clearScreen() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    updateScreen();
}

function deletLast() {
    currentInput = currentInput.slice(0, -1);
    updateScreen();
}



