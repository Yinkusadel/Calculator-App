
const defaultResult = 0;
let currentResult = defaultResult;


function getUserNumberInput() {
    return parseInt(logInput.value);
  }


  function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
  }
  
  function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
  }

  function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
  }

  function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
  }
  
  function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
  }

  addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);






btn0.addEventListener('click', function () {
    logInput.textContent += 0

  });

btn1.addEventListener('click', function () {
    logInput.textContent += 1

  });

  btn2.addEventListener('click', function () {
    logInput.textContent += 2
  });

  btn3.addEventListener('click', function () {
    logInput.textContent += 3
  });

  btn4.addEventListener('click', function () {
    logInput.textContent += 4
  });

  btn5.addEventListener('click', function () {
    logInput.textContent += 5
  });

  btn6.addEventListener('click', function () {
    logInput.textContent += 6
  });

  btn7.addEventListener('click', function () {
    logInput.textContent += 7
  });

  btn8.addEventListener('click', function () {
    logInput.textContent += 8
  });

  btn9.addEventListener('click', function () {
    logInput.textContent += 9
  });




