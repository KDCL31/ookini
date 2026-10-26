console.log("v60");
console.log("Kyoto Drip");
console.log("Siphon");
console.log("Prensa Francesa");

// lista de métodos, se llama arrays
const metodos = ["v60", "Kyoto Drip", "Siphon", "Prensa Francesa"];

// instrucción que recorre la lista y que hace algo con cada elemento

for (const metodo of metodos) {
    console.log(metodo);
}

console.log("Fin del programa")

//ejemplo bucle de reservas en un dia

const reservasdelDia = [2, 1, 2, 1, 2];
let totalTazas = 0;

for (const cantidad of reservasdelDia) {
    totalTazas = totalTazas + cantidad;
}

console.log(totalTazas)
