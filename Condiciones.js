// datos de la condición
const cupoCata = 8;
const Inscritos = 8;

// condicional de cata abierta o llena
// si el número de cupos es mayor que el número de inscritos devuelve "hay Cupos, abrir reserva"
// si no devuelve "Cata llena, ofrecer lista de espera"

if (cupoCata > Inscritos) { 
    console.log("hay Cupos, abrir reserva");
} else {
    console.log("Cata llena, ofrecer lista de espera");
}

// operadores de comparación
8 > 5 // true
3 < 10 // true
8 >= 8 // true
4 <= 9 // true
5 === 5 // true
5 !== 3 // true

// revisa el código para predecir el resultado

const tazasReservadasHoy = 47;
const maxTazasDia = 50;

if (tazasReservadasHoy >= maxTazasDia) {
    console.log("Cerrar reservas del dia");
} else {
    console.log("Aún hay disponibilidad");
}

// un pedazo de código que corre pero esta mal

const cantidadTazas = 0;

if (cantidadTazas > 2) {
    console.log("solo puedes reservar Max 2 tazas");
} else {
    console. log("Reserva confirmada");
}

// ejercicio

const cantidadTazasMax = 2;
const tazasReservadasHoy = 0;

if (tazasReservadasHoy <= 1) {
    console.log("permitir reserva adicional");
} else {
    console.log("Cupos llenos");
}
