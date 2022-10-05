const vuelos = [
    { id: 0, to: "New York", from: "Barcelona", cost: 700, scale: false },
    { id: 1, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
    { id: 2, to: "Paris", from: "Barcelona", cost: 210, scale: false },
    { id: 3, to: "Roma", from: "Barcelona", cost: 150, scale: false },
    { id: 4, to: "London", from: "Madrid", cost: 200, scale: false },
    { id: 5, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
    { id: 6, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
    { id: 7, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
    { id: 8, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
    { id: 9, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
  ];

let vuelosFilterPrecio = [];

function interfazVuelos() {
    nombreUsuario();
}

function nombreUsuario() {
    usuario = prompt('Por favor, introduce tu nombre de usuario');
    if(usuario == null) {
        console.log("Introduce tu nombre de usuario");
        return nombreUsuario();
    } else {
        if(usuario.trim().length > 0) {
            console.log(`Bienvenido a ISDI CODERS AIRLINES ${usuario}!`);
            vuelosDisponibles();
        } else if(usuario.trim().length === 0) {
            console.log("No olvides de introducir tu nombre de usuario");
            return nombreUsuario();
        } else {
            console.log("No olvides de introducir tu nombre de usuario");
            return nombreUsuario();
        }
    }    
}

function vuelosDisponibles() {
    alert('A continuación podrás ver los vuelos del día de hoy.');
    vuelos.forEach((vuelo) => {
        console.log(`${vuelo.from} - ${vuelo.to} | ${vuelo.cost}€`);
    });
    costePromedio();
}

function costePromedio() {
    for (let i = 0; i < vuelos.length; i++) {
        costeTotal = vuelos[0].cost + vuelos[1].cost +  vuelos[2].cost + vuelos[3].cost + vuelos[4].cost + vuelos[5].cost + vuelos[6].cost + vuelos[7].cost + vuelos[8].cost + vuelos[9].cost;
        costeMedio = costeTotal / 10; 
    }
    alert(`El coste medio de todos los vuelos es de ${costeMedio}€.`)
    console.log(`El coste medio de todos los vuelos es de ${costeMedio}€.`);
    escalas();
}

function escalas() {
    preguntaEscalas = prompt('Quieres realizar escalas? Escribe si / no');
    if(preguntaEscalas == null) {
        console.log("Escribe si o no");
        return escalas();
    } else {
        if(preguntaEscalas.trim().length > 0) {
            if(preguntaEscalas.toLowerCase() === "si") {
                alert("Estos son los vuelos que realizan escala.");
                vuelos.forEach((vuelo) => {
                if(vuelo.scale === true) {
                    console.log(`${vuelo.from} - ${vuelo.to} | ${vuelo.cost}`);
                }
                });
                ultimosVuelosDelDia();
            } else if(preguntaEscalas.toLowerCase() === "no") {
                alert('Estos son los vuelos que no realizan escala.');
                vuelos.forEach((vuelo) => {
                if(vuelo.scale === false) {
                    console.log(`${vuelo.from} - ${vuelo.to} | ${vuelo.cost}€`);
                }});
                ultimosVuelosDelDia();
            } else {
                console.log("Escribe si o no");
                return escalas();
            }
        } else if(preguntaEscalas.trim().length === 0) {
            console.log("Escribe si o no");
            return escalas();
        } else {
            console.log('No te olvides de escribir si o no!');
            return escalas();
        }
    }
}

function ultimosVuelosDelDia() {
    alert('No te pierdas los últimos vuelos del día!');
    console.log('ÚLTIMOS VUELOS DEL DIA:');
    vuelos.forEach((vuelo) => {
        if(vuelo.id >= 5) {
        console.log(`${vuelo.from} - ${vuelo.to} | ${vuelo.cost}€`);
        }});
        console.log('En 2h se actualizarán los últimos vuelos!');
        adminLogin();
}


function adminLogin() {
    identificacion = prompt("Inicar sesión cómo ADMIN? si / no");
    if(identificacion == null) {
        console.log("Introduce si o no");
        return adminLogin();
    } else {
        if(identificacion.trim().length > 0) {
            if(identificacion.toLowerCase() === "si") {
                alert("Sesión iniciada admin!");
                admin();
            } else if(identificacion.toLowerCase() === "no") {
                userLogin();
            } else {
                console.log("No te olvides de introducir si o no");
                return adminLogin();
            }
        } else if(identificacion.trim().length === 0) {
            console.log("Introduce si o no!");
            return adminLogin();
        } else {
            console.log("Introduce si o no");
            return adminLogin();
        }
    }
}

function userLogin() {
    identificacionUser = prompt("Inicar sesión cómo USER? si / no");
    if(identificacionUser == null) {
        console.log("Introduce si o no");
        return userLogin();
    } else {
        if(identificacionUser.trim().length > 0) {
            if(identificacionUser.toLowerCase() === "si") {
                alert("Sesión iniciada user!");
                user();
            } else if(identificacionUser.toLowerCase() === "no") {
                console.log("Hasta la próxima!");
            } else {
                console.log('No te olvides de introducir si / no');
                userLogin();
            }
        } else if(identificacionUser.trim().length === 0) {
            console.log('Introduce si / no');
            userLogin();
        } else {
            console.log('Introduce si / no');
            userLogin();
        }
    }  
}

function admin() {
if(vuelos.length < 16) {
    crearVuelos = prompt('Quieres crear un nuevo vuelo o cerrar la sesión? si / no / end');
    if(crearVuelos == null) {
        console.log('Introduce si / no');
        return admin();
    } else {
        if(crearVuelos.trim().length > 0) {
            if(crearVuelos.toLowerCase() === "si") {
                idVuelos();
                destinoVuelos();
                origenVuelos();
                precioVuelos();
                escalaVuelos();
                vuelos.push({
                id: +vueloID,
                to: destino,
                from: origen,
                cost: precio,
                scale: escala,
                });
                vuelos.forEach((vuelo) => {
                console.log(`${vuelo.from} - ${vuelo.to} | ${vuelo.cost}€`);
                });
                return admin();
            } else if(crearVuelos.toLowerCase() === "no") {
                vuelos.forEach((vuelo) => {
                console.log(`${vuelo.id} | ${vuelo.from} - ${vuelo.to} | ${vuelo.cost}€`);
                });
                eliminarVuelo();
            } else if(crearVuelos.toLowerCase() === "end") {
                console.log("Hasta la próxima!");
            } else {
                console.log('No te olvides de introducir si / no.');
                return admin();
            }
        } else if(crearVuelos.trim().length === 0) {
            console.log('Introduce si / no');
            return admin();
        } else {
            console.log('Introduce si / no');
            return admin();
        }
    }
} else {
    alert("No se pueden añadir más vuelos!");
    eliminarVuelo();
}
}

function idVuelos() {
vueloID = prompt('Cuál es el número ID de vuelo? Ejemplo: 23');
if(vueloID == null) {
    console.log('Introduce el número ID');
    return idVuelos();
} else {
    if(vueloID.trim().length > 0) {
        if(containsNumber(vueloID) === true) {
            vueloID = parseFloat(vueloID);
            alert(`El id del vuelo es ${vueloID}.`)
        } else if(containsNumber(vueloID) === false) {
            console.log('Introduce el número ID');
            return idVuelos();
        } else {
            console.log('No te olvides de introducir el número ID.');
            return idVuelos();
        }  
    } else if(vueloID.trim().length === 0) {
        console.log('No te olvides de introducir el número ID.');
        return idVuelos();
    } else {
        console.log('No te olvides de introducir el número ID.');
        return idVuelos();
    }
    } 
}

function destinoVuelos() {
destino = prompt('Escribe el lugar de destino.');
if(destino == null) {
    console.log('Introduce el lugar de destino');
    return destinoVuelos();
} else {
    if(destino.trim().length > 0) {
        if(containsLetterDestino(destino) === true) {
            alert(`El destino del vuelo es ${destino}.`)
        } else if(containsLetterDestino(destino) === false) {
            console.log('Introduce el lugar de destino');
            return destinoVuelos();
        } else {
            console.log('No te olvides de introducir el lugar de destino.');
            return destinoVuelos();
        }
    } else if(destino.trim().length === 0) {
        console.log('Introduce el lugar de destino');
        return destinoVuelos();
    } else {
        console.log('Introduce el lugar de destino');
        return destinoVuelos();
    }   
}
}

function origenVuelos() {
origen = prompt('Escribe el lugar de origen.');
if(origen == null) {
    console.log('Introduce el lugar de origen');
    return origenVuelos();
} else {
    if(origen.trim().length > 0) {
        if(containsLetterOrigen(origen) === true) {
            alert(`El origen del vuelo es ${origen}.`)
        } else if(containsLetterOrigen(origen) === false) {
            console.log('Introduce el lugar de origen');
            return origenVuelos();
        } else {
            console.log('No te olvides de introducir el lugar de origen.');
            return origenVuelos();
        }
    } else if(origen.trim().length === 0) {
        console.log('Introduce el lugar de origen');
        return origenVuelos();
    } else {
        console.log('Introduce el lugar de origen');
        return origenVuelos();
    }   
}
}

function precioVuelos() {
precio = prompt('Cuál es el precio de vuelo? Ejemplo: 230');
if(precio == null) {
    console.log("Introduce el precio");
    return precioVuelos();
} else {
    if(precio.trim().length > 0) {
        if(containsNumberPrecio(precio) === true) {
            precio = parseFloat(precio);
            alert(`El precio del vuelo es ${precio}.`)
        } else if(containsNumberPrecio(precio) === false) {
            console.log('Introduce el precio');
            return precioVuelos();
        } else {
            console.log('No te olvides de introducir el precio.');
            return precioVuelos();
        }  
    } else if(precio.trim().length === 0) {
        console.log("Introduce el precio");
        return precioVuelos();
    } else {
        console.log("Introduce el precio");
        return precioVuelos();
    }
}
}

function escalaVuelos() {
escala = prompt('El vuelo realiza escala? true / false');
if(escala == null) {
    console.log('Introduce true / false');
    return escalaVuelos(); 
} else {
    if(escala.trim().length > 0) {
        if(escala.toLowerCase() === "true") {
            alert(`El vuelo realiza escala.`)
        } else if(escala.toLowerCase() === "false") {
            alert("El vuelo no realiza escala");
        } else {
            console.log('No te olvides de introducir true / false');
            return escalaVuelos();
        }
    } else if(escala.trim().length === 0) {
        console.log('Introduce true / false');
        return escalaVuelos(); 
    } else {
        console.log('Introduce true / false');
        return escalaVuelos(); 
    }
} 
}

function eliminarVuelo() {
eliminarVuelos = prompt('Quieres eliminar algun vuelo o cerrar la sesión? si / no / end');
if(eliminarVuelos == null) {
    console.log('Introduce si / no / end');
    return eliminarVuelo();
} else {
    if(eliminarVuelos.trim().length > 0) {
        if(eliminarVuelos.toLowerCase() === "si") {
            buscarID(vuelos);
        } else if(eliminarVuelos.toLowerCase() === "no") {
            console.log('Hasta la próxima!');
        } else if(eliminarVuelos.toLowerCase()=== "end") {
            console.log('Hasta la próxima!');
        }
    } else if(eliminarVuelos.trim().length === 0) {
        console.log('Introduce si / no / end');
        return eliminarVuelo();
    } else {
        console.log('Introduce si / no / end');
        return eliminarVuelo();
    }
}  
}

function buscarID(vuelos) {
    let idVueloEliminar = prompt('Escribe el número ID del vuelo que quieres eliminar. Ejemplo: 9');
    idVueloEliminar = parseFloat(idVueloEliminar);
    let eliminarIndex;
    if (!isNaN(idVueloEliminar)) {
        for (let index = 0; index < vuelos.length; index++) {
          if (vuelos[index].id === idVueloEliminar) {
            eliminarIndex = index;
          }
        }
        if (eliminarIndex !== undefined) {
          vuelos.splice(eliminarIndex, 1);
          console.log("Vuelo eliminado correctamente");
          return eliminarVuelo();
        } else {
          console.log(`No hay vuelos con ese ID.`);
          return eliminarVuelo();
        }
    } else {
        console.log("ID no válido. Prueba de nuevo más tarde!");
        return buscarID(vuelos);
    }
}

function user() {
preguntaPrecio = prompt('Quieres buscar vuelos por precio o cerrar la sesión? si / no / end');
if(preguntaPrecio == null) {
    console.log('Introduce si / no');
    return user();
} else {
    if(preguntaPrecio.trim().length > 0) {
        if(preguntaPrecio.toLowerCase() === "si") {
            buscarPrecioF();
            user();
        } else if(preguntaPrecio.toLowerCase() === "no") {
            console.log('Hasta la próxima!');
            finalUser();
        } else if(preguntaPrecio.toLowerCase() === "end") {
            console.log("Hasta la próxima!");
        } else {
            console.log('No te olvides de introducir si / no');
            return user();
        }
    } else if(preguntaPrecio.trim().length === 0) {
        console.log('Introduce si / no');
        return user();
    } else {
        console.log('Introduce si / no');
        return user();
    }
}
}

var m = MyMin(vuelos);

function buscarPrecioF() {
vuelosFilterPrecio = [];
buscarPrecio = prompt('Cuanto te quieres gastar en tu vuelo? *Escribe el precio* Ejemplo: 490');
vuelos.forEach((vuelo) => {
const minPrecio = Math.min(vuelo.cost);
if(buscarPrecio == null) {
    console.log('Introduce un precio');
    return buscarPrecioF();
} else {
    if(buscarPrecio.trim().length > 0) {
        if(vuelo.cost <= buscarPrecio) {
            vuelosFilterPrecio.push(`El vuelo con destino ${vuelo.to} tiene un precio de ${vuelo.cost}.`);
            console.log(vuelosFilterPrecio.join("\n"));
            return;
        } else if(buscarPrecio < m.cost) {
            console.log("Vuelo más económico: " + m.to + " - " + m.from + " por " + m.cost + "€");
        }
    } else if(buscarPrecio.trim().length === 0) {
        console.log('No te olvides de introducir un precio');
        return buscarPrecioF();
    } else {
        console.log('No te olvides de introducir un precio');
        return buscarPrecioF();
    }
}
});
}

function MyMin(vuelos){
    var al = vuelos.length;
    minimum = vuelos[al-1];
    while (al--){
        if(vuelos[al] < minimum){
            minimum = vuelos[al]
        }
    }
    return minimum;
};

function finalUser() {
    alert("Sesión finalizada! Esperamos verle pronto.");
}

function containsNumber(vueloID) {
    return /[0-9]/.test(vueloID);
}
function containsNumberVueloEliminar(idVueloEliminar) {
    return /[0-9]/.test(idVueloEliminar);
}
function containsNumberPrecio(precio) {
    return /[0-9]/.test(precio);
}
function containsNumberBuscarPrecio(buscarPrecio) {
    return /[0-9]/.test(buscarPrecio);
}
function containsLetterOrigen(origen) {
    return /[a-zA-Z]/.test(origen);
}

function containsLetterDestino(destino) {
    return /[a-zA-Z]/.test(destino);
}

function containsLetterEscala(escala) {
    return /[a-zA-Z]/.test(escala);
}

interfazVuelos();