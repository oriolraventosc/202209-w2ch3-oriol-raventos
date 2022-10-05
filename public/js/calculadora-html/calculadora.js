const outputLower = document.querySelector("#lower");
let num1 = [];
let num2 = [];
let operacion;

function botonNum(e) {
  if (outputLower.innerHTML === "0") {
    outputLower.innerHTML = e.innerHTML;
  } else {
    outputLower.innerHTML += e.innerHTML;
  }
}

function botonClear() {
  outputLower.innerHTML = "0";
}

function botonDel() {
  outputLower.innerHTML = outputLower.innerHTML.slice(0, -1);
}

function botonSuma() {
  operacion = "suma";
  num1.push(outputLower.innerHTML);
  outputLower.innerHTML = "";
}

function botonResta() {
  operacion = "resta";
  num1.push(outputLower.innerHTML);
  outputLower.innerHTML = "";
}

function botonMultiplicacion() {
  operacion = "multiplicacion";
  num1.push(outputLower.innerHTML);
  outputLower.innerHTML = "";
}

function botonDivision() {
  operacion = "division";
  num1.push(outputLower.innerHTML);
  outputLower.innerHTML = "";
}

function botonIgual() {
  num2.push(outputLower.innerHTML);
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      if (Number.isInteger(resultado)) {
        outputLower.innerHTML = resultado;
      } else if (isNaN(resultado)) {
        outputLower.innerHTML = "Error";
      } else {
        outputLower.innerHTML = resultado.toFixed(3);
      }
      break;
    case "resta":
      resultado = num1 - num2;
      if (Number.isInteger(resultado)) {
        outputLower.innerHTML = resultado;
      } else if (isNaN(resultado)) {
        outputLower.innerHTML = "Error";
      } else {
        outputLower.innerHTML = resultado.toFixed(3);
      }
      break;
    case "multiplicacion":
      resultado = num1 * num2;
      if (Number.isInteger(resultado)) {
        outputLower.innerHTML = resultado;
      } else if (isNaN(resultado)) {
        outputLower.innerHTML = "Error";
      } else {
        outputLower.innerHTML = resultado.toFixed(3);
      }
      break;
    case "division":
      resultado = num1 / num2;
      if (Number.isInteger(resultado)) {
        outputLower.innerHTML = resultado;
      } else if (isNaN(resultado)) {
        outputLower.innerHTML = "Error";
      } else {
        outputLower.innerHTML = resultado.toFixed(3);
      }
      break;
  }
  num1 = [];
  num2 = [];
}

function botonPunto() {
  if (!outputLower.innerHTML.includes(".")) {
    outputLower.innerHTML += ".";
  } else {
  }
}

function dark() {
  document.getElementById("estilos").href = "./css/calculadora-dark.css";
}

function light() {
  document.getElementById("estilos").href = "./css/calculadora-light.css";
}
