const resultados = [];
const arrayElements = [];
let inputData;
let quieresSalir;
function llamarCalculadora() {
  inputData = prompt("Introduce un número");
  if (containsNumber(inputData) === true) {
    inputData = parseFloat(inputData);
    arrayElements.push(inputData);
    return preguntasData();
  }
  if (inputData == null || inputData == "") {
    quieresSalir = confirm("Quieres salir de la calculadora?");
    if (quieresSalir === true) {
      console.log("Hasta la próxima!");
    }
  } else if (containsNumber(inputData) === false) {
    console.log("Tienes que introducir un número");
    return llamarCalculadora();
  } else {
    console.log("Recuerda que tienes que introducir números");
    return llamarCalculadora();
  }
}

function preguntasData() {
  const primeraPregunta = prompt(
    "Quieres introducir otro número? Escribe y / n"
  );
  if (primeraPregunta === "y") {
    llamarCalculadora();
  } else if (primeraPregunta === "n") {
    console.log("Resultado operaciones:");
    operaciones();
    preguntasFinal();
  } else if (typeof primeraPregunta === null || typeof primeraPregunta === "") {
    console.log("Recuerda introducir y / n");
    return preguntasData();
  } else {
    console.log("Tienes que introducir y / n");
    return preguntasData();
  }
}

function operaciones() {
  if (arrayElements.length === 1) {
    resultados.push(`Raiz cuadrada: ${raizQuadrada(arrayElements)}`);
    console.log(resultados.join(""));
  } else if (arrayElements.length > 1) {
    resultados.push(`Suma: ${suma(arrayElements)}`);
    resultados.push(`Resta: ${resta(arrayElements)}`);
    resultados.push(`Multiplicación: ${multiplicar(arrayElements)}`);
    resultados.push(`División: ${division(arrayElements)}`);
    console.log(resultados.join(", "));
  }
}

function suma() {
  let sumar = +arrayElements[0];
  for (let i = 1; i < arrayElements.length; i++) {
    sumar += arrayElements[i];
  }
  if (Number.isInteger(sumar)) {
    return sumar;
  }
  return sumar.toFixed(3);
}

function resta() {
  let restar = -arrayElements[0];
  for (let i = 1; i < arrayElements.length; i++) {
    restar -= arrayElements[i];
  }
  if (Number.isInteger(restar)) {
    return restar;
  }
  return restar.toFixed(3);
}

function multiplicar() {
  let multiplica = arrayElements[0];
  for (let i = 1; i < arrayElements.length; i++) {
    multiplica *= arrayElements[i];
  }
  if (Number.isInteger(multiplica)) {
    return multiplica;
  }
  return multiplica.toFixed(3);
}

function division(arrayElements) {
  let dividir = arrayElements[0];
  for (let i = 1; i < arrayElements.length; i++) {
    dividir /= arrayElements[i];
  }
  if (Number.isInteger(dividir)) {
    return dividir;
  }
  return dividir.toFixed(3);
}
function raizQuadrada() {
  let raiz = arrayElements[0];
  for (let i = 0; i < arrayElements.length; i++) {
    raiz = Math.sqrt(arrayElements[i]);
  }
  if (Number.isInteger(raiz)) {
    return raiz;
  }
  if (arrayElements[0] < 0) {
    console.log("No existen raices cuadradas negativas!");
  } else {
    return raiz.toFixed(3);
  }
}
function containsNumber() {
  return /[0-9]/.test(inputData);
}

let final;
function preguntasFinal() {
  final = prompt("Quieres realizar alguna operación más? Escribe y / n");
  if (final === "y") {
    llamarCalculadora();
  } else if (final === "n") {
    console.log("Hasta la próxima!");
  } else if (typeof final === null || typeof final === "") {
    console.log("Recuerda introducir y / n");
    return preguntasFinal();
  } else {
    console.log("Tienes que introducir y / n");
    return preguntasFinal();
  }
}

llamarCalculadora();
export default llamarCalculadora;
