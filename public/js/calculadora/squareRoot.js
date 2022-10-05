function calculator2(number1, number2) {
  const calculatorResults = [];
  let resultRaizArray1;
  let resultRaizArray2;
  const resultRaiz = Math.sqrt(number2);
  if (resultRaiz >= 0) {
    if (Number.isInteger(resultRaiz) === true) {
      resultRaizArray1 = Math.round(resultRaiz);
      calculatorResults.push(`Raiz cuadrada: ${resultRaizArray1}`);
      console.log(calculatorResults.join(", "));
    } else {
      resultRaizArray2 = resultRaiz.toFixed(3);
      calculatorResults.push(`Raiz cuadrada: ${resultRaizArray2}`);
      console.log(calculatorResults.join(", "));
    }
  } else {
    console.log("There are no negative square roots!");
  }
}
