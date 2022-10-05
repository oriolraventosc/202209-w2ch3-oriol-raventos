const nombreJugador = [];
let turnosBingo = 1;

function randomNumberBingo(min, max) {
  min = 1;
  max = 20;
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const cartaBingo = [
  { number: 1, matched: false },
  { number: 4, matched: false },
  { number: 12, matched: false },
  { number: 9, matched: false },
  { number: 20, matched: false },
];

let usuario;

const preguntarUsuario = () => {
  usuario = prompt("Escribe tu nombre de usuario.");
  if (usuario) {
    nombreJugador.push(usuario);
    introBingo();
  } else if (usuario == null || usuario.length === 0) {
    console.log("Introduce tu nombre de usuario!");
    return preguntarUsuario();
  } else {
    console.log("No olvides introducir tu nombre de usuario!");
    return preguntarUsuario();
  }
};

let iniciarBingo;
const introBingo = () => {
  for (let i = 0; i < cartaBingo.length; i++) {
    console.log(
      `Números: ${cartaBingo[0].number} | ${cartaBingo[1].number} | ${cartaBingo[2].number} | ${cartaBingo[3].number} | ${cartaBingo[4].number}`
    );
  }
  iniciarBingo = confirm("Listo para empezar?");
  if (iniciarBingo === true) {
    console.log(`Turno ${turnosBingo}`);
    turnoNumero();
  } else {
    console.log("Fin de partida!");
    volverDeNuevo();
  }
};

const turnoNumero = () => {
  if (randomNumberBingo() === cartaBingo[0].number) {
    console.log(`Has obtenido el número ${cartaBingo[0].number}`);
    cartaBingo[0].number = "X";
    console.log(
      `Números: ${cartaBingo[0].number} | ${cartaBingo[1].number} | ${cartaBingo[2].number} | ${cartaBingo[3].number} | ${cartaBingo[4].number}`
    );
  } else if (randomNumberBingo() === cartaBingo[1].number) {
    console.log(`Has obtenido el número ${cartaBingo[1].number}`);
    cartaBingo[1].number = "X";
    console.log(
      `Números: ${cartaBingo[0].number} | ${cartaBingo[1].number} | ${cartaBingo[2].number} | ${cartaBingo[3].number} | ${cartaBingo[4].number}`
    );
  } else if (randomNumberBingo() === cartaBingo[2].number) {
    console.log(`Has obtenido el número ${cartaBingo[2].number}`);
    cartaBingo[2].number = "X";
    console.log(
      `Números: ${cartaBingo[0].number} | ${cartaBingo[1].number} | ${cartaBingo[2].number} | ${cartaBingo[3].number} | ${cartaBingo[4].number}`
    );
  } else if (randomNumberBingo() === cartaBingo[3].number) {
    console.log(`Has obtenido el número ${cartaBingo[3].number}`);
    cartaBingo[3].number = "X";
    console.log(
      `Números: ${cartaBingo[0].number} | ${cartaBingo[1].number} | ${cartaBingo[2].number} | ${cartaBingo[3].number} | ${cartaBingo[4].number}`
    );
  } else if (randomNumberBingo() === cartaBingo[4].number) {
    console.log(`Has obtenido el número ${cartaBingo[4].number}`);
    cartaBingo[4].number = "X";
    console.log(
      `Números: ${cartaBingo[0].number} | ${cartaBingo[1].number} | ${cartaBingo[2].number} | ${cartaBingo[3].number} | ${cartaBingo[4].number}`
    );
  } else {
    console.log("No ha salido ninguno de tus números!");
    console.log(
      `Números: ${cartaBingo[0].number} | ${cartaBingo[1].number} | ${cartaBingo[2].number} | ${cartaBingo[3].number} | ${cartaBingo[4].number}`
    );
  }
  turnosBingo++;
  ganarPasarTurno();
};

let nuevoJuego;

const volverDeNuevo = () => {
  nuevoJuego = confirm("Quieres volver a jugar?");
  if (nuevoJuego === true) {
    bingo();
  } else {
    console.log("Hasta la próxima!");
  }
};

let iniciarTurno;

function turnos() {
  iniciarTurno = prompt("Listo para comenzar el turno? si / no");
  if (iniciarTurno === "si") {
    console.log(`Turno ${turnosBingo}`);
    turnoNumero();
  } else if (iniciarTurno === "no") {
    alert("Fin de partida!");
    volverDeNuevo();
  } else if (iniciarTurno == null || iniciarTurno.length === 0) {
    console.log("Introduce si / no");
    return turnos();
  } else {
    console.log("No olvides introducir si / no");
    return turnos();
  }
}

let pasarTurno;

const ganarPasarTurno = () => {
  if (
    cartaBingo[0].number === "X" &&
    cartaBingo[1].number === "X" &&
    cartaBingo[2].number === "X" &&
    cartaBingo[3].number === "X" &&
    cartaBingo[4].number === "X"
  ) {
    alert("BINGO! Has completado la línia! ");
    console.log(`Has obtenido el Bingo en ${turnosBingo} turnos.`);
    cartaBingo[0].number = 1;
    cartaBingo[1].number = 4;
    cartaBingo[2].number = 12;
    cartaBingo[3].number = 9;
    cartaBingo[4].number = 20;
    turnosBingo = 1;
    volverDeNuevo();
  } else {
    pasarTurno = confirm("Quieres pasar de turno?");
    if (pasarTurno === true) {
      turnos();
    } else {
      alert("Fin de partida!");
      volverDeNuevo();
    }
  }
};

const bingo = () => {
  preguntarUsuario();
};

bingo();
