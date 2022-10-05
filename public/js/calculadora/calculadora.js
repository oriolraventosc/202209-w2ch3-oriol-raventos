const calculatorResults = [];
function numbers(num1, num2) {
  num1 = undefined;
  num2 = 64;
  function containsNumber() {
    return /[0-9]/.test(num1);
  }
  containsNumber(num1);
  function containsNumber2() {
    return /[0-9]/.test(num2);
  }
  containsNumber2(num2);
  function containsLetters() {
    return /[a-zA-Z]/.test(num1);
  }
  containsLetters(num1);
  function containsLetters2() {
    return /[a-zA-Z]/.test(num2);
  }
  containsLetters2(num2);

  if (containsNumber(num1) === true && containsNumber2(num2) === true) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    calculator1(num1, num2);
  } else if (
    num2 === "" ||
    num2 === null ||
    (containsLetters(num2) === true && containsNumber(num1) === true)
  ) {
    num1 = parseFloat(num1);
    calculator3(num1, undefined);
  } else if (
    num1 === "" ||
    num1 === null ||
    (containsLetters(num1) === true && containsNumber2(num2) === true)
  ) {
    num2 = parseFloat(num2);
    calculator2(undefined, num2);
  } else {
    console.log("You must introduce numbers!");
  }
}
function calculator1(number1, number2) {
  const resultSuma = number1 + number2;
  if (Number.isInteger(resultSuma) === true) {
    const resultSumaArray1 = Math.round(resultSuma);
    calculatorResults.push(`Suma: ${resultSumaArray1}`);
  } else {
    const resultSumaArray2 = resultSuma.toFixed(3);
    calculatorResults.push(`Suma: ${resultSumaArray2}`);
  }
  const resultResta = number1 - number2;
  if (Number.isInteger(resultResta) === true) {
    const resultRestaArray1 = Math.round(resultResta);
    calculatorResults.push(`Resta: ${resultRestaArray1}`);
  } else {
    const resultRestaArray2 = resultResta.toFixed(3);
    calculatorResults.push(`Resta: ${resultRestaArray2}`);
  }
  const resultMult = number1 * number2;
  if (Number.isInteger(resultMult) === true) {
    const resultMultArray1 = Math.round(resultMult);
    calculatorResults.push(`Multiplicación: ${resultMultArray1}`);
  } else {
    const resultMultArray2 = resultMult.toFixed(3);
    calculatorResults.push(`Multiplicación: ${resultMultArray2}`);
  }
  const resultDiv = number1 / number2;
  if (Number.isInteger(resultDiv) === true) {
    const resultDivArray1 = Math.round(resultDiv);
    calculatorResults.push(`División: ${resultDivArray1}`);
  } else {
    const resultDivArray2 = resultDiv.toFixed(3);
    calculatorResults.push(`División: ${resultDivArray2}`);
  }
  console.log(calculatorResults.join(", "));
}

function calculator2(undefined, num2) {
  let resultRaiz;
  resultRaiz = Math.sqrt(num2);
  if (resultRaiz >= 0) {
    if (Number.isInteger(resultRaiz) === true) {
      const resultRaizArray1 = Math.round(resultRaiz);
      calculatorResults.push(`Raiz cuadrada: ${resultRaizArray1}`);
      console.log(calculatorResults.join(", "));
      ret;
    } else {
      const resultRaizArray2 = resultRaiz.toFixed(3);
      calculatorResults.push(`Raiz cuadrada: ${resultRaizArray2}`);
      console.log(calculatorResults.join(", "));
    }
  } else {
    console.log("There are no negative square roots!");
  }
}
let resultRaiz2;
function calculator3(num1, undefined) {
  const resultRaiz2 = Math.sqrt(num1);
  if (resultRaiz2 >= 0) {
    if (Number.isInteger(resultRaiz2) === true) {
      const resultRaizArray3 = Math.round(resultRaiz2);
      calculatorResults.push(`Raiz cuadrada: ${resultRaizArray3}`);
      console.log(calculatorResults.join(", "));
    } else {
      const resultRaizArray4 = resultRaiz2.toFixed(3);
      calculatorResults.push(`Raiz cuadrada: ${resultRaizArray4}`);
      console.log(calculatorResults.join(", "));
    }
  } else {
    console.log("There are no negative square roots!");
  }
}
numbers();
export default calculator2;
