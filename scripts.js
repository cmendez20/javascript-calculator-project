let resultScreen = document.querySelector('.result-screen');
let numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let operatorArray = ['&divide;', 'x', '-', '+'];

let btnNums = document.querySelectorAll('.num');
console.log(btnNums);

btnNums.forEach(item => {
  item.addEventListener('click', e => {
    if (numArray.includes(e.target.innerHTML)) {
    resultScreen.innerHTML = e.target.innerHTML;
    } else if (operatorArray.includes(e.target.innerHTML)) {
      console.log('this is an operator');
    }
  });
});



for (i = 0; i < btnNums.length; i++) {
  let numPad = parseInt(btnNums[i].textContent);
  console.log(numPad, typeof numPad);
}


// function changeResultScreen() {
//   resultScreen = 
// } 

