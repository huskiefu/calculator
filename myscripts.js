let num = 0;
let operator = '';
let num1 ='';
let num2 ='';
let pressed = '';

function add(a,b) {
  return roundNumber(parseFloat(a) + parseFloat(b));
}

function subtract(a,b) {
  return roundNumber(parseFloat(a) - parseFloat(b));
}

function multiply(a,b) {
  return roundNumber(parseFloat(a) * parseFloat(b));
}

function divide(a,b) {
  if (b === '0') {
    return "TO INFINITY AND BEYOND";
  }
  return roundNumber(parseFloat(a) / parseFloat(b));
}

function operate (operator,a,b) {
  if (operator === "+") {
    return add(a,b);
  } else if (operator === "-") {
    return subtract(a,b);
  } else if (operator === "x") {
    return multiply(a,b);
  } else if (operator === '÷' ){
    return divide(a,b);
  }
}

function keyNumber(key) {
    if (num === 0) {
      num = key;
      pressed = 'no';
      numberDisplay.textContent = `${num}`;
    }
    else {
    num += key;
    pressed = 'no';
    numberDisplay.textContent = `${num}`;
    }
}

function clearNum(){
  num = 0;
  operator ='';
  num1 = '';
  num2 = '';
  numberDisplay.textContent = `${num}`;
}

function roundNumber(num){
  return Math.round(num * 1000) /1000;
}

function addOperator(sign) {
  if (operator === ''){
    num1 = num;
    num = 0;
    operator = sign;
    pressed = 'yes';
    operatorDisplay.textContent = `${operator}`;
  } else {
    if (pressed === 'no'){
    num2 = num;
    num1 = operate(operator,num1,num2);
    num = 0;
    operator = sign;
    num2 ='';
    numberDisplay.textContent = `${num1}`;
    pressed = 'yes';      
    operatorDisplay.textContent = `${operator}`;
    } else {
      operator = sign;
      numberDisplay.textContent = `${num1}`;
      pressed = 'yes';
      operatorDisplay.textContent = `${operator}`;
    }
  }
}

function equate(){
  if (num === ''){
    return;
  } else {
  num2 = num;
  num1 = operate(operator,num1,num2);
  numberDisplay.textContent = `${num1}`;
  num2 = '';
  num = 0;
  }
}

function addDecimal() {
  if (num.includes('.')){
    return;
  } else {
    num += '.';
    numberDisplay.textContent=`${num}`;
  }
}

function changeSign(){
  num *= -1;
  numberDisplay.textContent=`${num}`;
}

function addPercentage(){
  num /= 100;
  numberDisplay.textContent=`${num}`;
}

const numberDisplay = document.querySelector('.numberDisplay');
const numberKeys = document.querySelectorAll('.numberKey');
const operatorKeys = document.querySelectorAll('.operatorKey')
const operatorDisplay = document.querySelector('.operatorDisplay');
numberKeys.forEach(button => button.addEventListener('click',() => keyNumber(button.textContent)))

operatorKeys.forEach(button => button.addEventListener('click', () => addOperator(button.textContent)))


