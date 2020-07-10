// VERSION ONE OF CALCULATOR APP

let resultScreen = document.querySelector('.result-screen');
let numOne = undefined;
let numTwo = undefined;
let chosenOperator = undefined;

const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const subtractBtn = document.querySelector('#subtractBtn');
const multiplyBtn = document.querySelector('#multiplyBtn');
const addBtn = document.querySelector('#addBtn');
const divideBtn = document.querySelector('#divideBtn');
const equalBtn = document.querySelector('#equalBtn');

let btnNums = document.querySelectorAll('.num');
console.log(btnNums);

btnNums.forEach(item => {
  item.addEventListener('click', e => {
    if (resultScreen.textContent === '0') {
      resultScreen.textContent = '';
    } 
    updateResultScreen(e.target.textContent);
  });
});


clearBtn.addEventListener('click', () => {
  resultScreen.textContent = '0';
});

deleteBtn.addEventListener('click', () => {
  if (resultScreen.textContent === '0' || resultScreen.textContent.length < 1) {
    resultScreen.textContent = '0';
  } else if (resultScreen.textContent.length < 2) {
    resultScreen.textContent = '0';
  } else {
    let originalScreen = resultScreen.textContent;
    let newScreen = originalScreen.slice(0, -1);
    resultScreen.textContent = newScreen;
  }
});

addBtn.addEventListener('click', () => {
  numOne = resultScreen.textContent;
  chosenOperator = '+'
  resultScreen.textContent = '0';
});

subtractBtn.addEventListener('click', () => {
  numOne = resultScreen.textContent;
  chosenOperator = '-'
  resultScreen.textContent = '0';
});

multiplyBtn.addEventListener('click', () => {
  numOne = resultScreen.textContent;
  chosenOperator = 'x'
  resultScreen.textContent = '0';
});

divideBtn.addEventListener('click', () => {
  numOne = resultScreen.textContent;
  chosenOperator = '&divide;'
  resultScreen.textContent = '0';
});

equalBtn.addEventListener('click', () => {
  numTwo = resultScreen.textContent;
  if (chosenOperator === '-') {
    resultScreen.textContent = numOne - numTwo;
  } else if (chosenOperator === '+') {
    resultScreen.textContent = parseInt(numOne) + parseInt(numTwo);
  } else if (chosenOperator === 'x') {
    resultScreen.textContent = numOne * numTwo;
  } else {
    resultScreen.textContent = numOne / numTwo;
  }
  // numTwo = undefined;
});

function updateResultScreen(userInput) {
  resultScreen.textContent += userInput; 
} 