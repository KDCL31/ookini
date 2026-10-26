function calcularPrecio(preciounitario, cantidad) {
    const total = preciounitario * cantidad;
    return total;
}

function puedeReservar(cantidad) {
    return cantidad > 0;
}
const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-Tazas");

botonReservar.addEventListener("click", function() {
    const tazasActuales = Number(contadorTazas.textContent);

    if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
    } else {
        botonReservar.textContent = "Sin Cupos";
        botonReservar.disabled = true;
    }
});

const boton = document.querySelector("#boton-reservar");
botonReservar.addEventListener("click", function() {
    swal.fire({
        title: '¡Reserva éxitosa!',
        text: 'Tu taza de café ha sido reservada',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#23ce6b',
        color: '#941b0c',
    });
});
