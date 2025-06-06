import {
    registrarAuto,
    registrarBus,
    registrarCamion,
    getCantidadAutos,
    getCantidadBuses,
    getCantidadCamiones,
    getTotalRecaudado,
    reiniciar
} from "./datos.js";

document.getElementById("btnIniciar").addEventListener("click", () => {
    document.getElementById("imgAuto").disabled = false;
    document.getElementById("imgBus").disabled = false;
    document.getElementById("imgCamion").disabled = false;
    document.getElementById("btnIniciar").disabled = true;
    document.getElementById("btnCerrar").disabled = false;

    reiniciar();
    actualizarPantalla();
});

document.getElementById("btnCerrar").addEventListener("click", () => {
    document.getElementById("imgAuto").disabled = true;
    document.getElementById("imgBus").disabled = true;
    document.getElementById("imgCamion").disabled = true;
    document.getElementById("btnIniciar").disabled = false;
    document.getElementById("btnCerrar").disabled = true;
});

document.getElementById("imgAuto").addEventListener("click", () => {
    registrarAuto();
    actualizarPantalla();
});

document.getElementById("imgBus").addEventListener("click", () => {
    registrarBus();
    actualizarPantalla();
});

document.getElementById("imgCamion").addEventListener("click", () => {
    registrarCamion();
    actualizarPantalla();
});

function actualizarPantalla() {
    document.getElementById("txtAutos").value = getCantidadAutos();
    document.getElementById("txtBuses").value = getCantidadBuses();
    document.getElementById("txtCamiones").value = getCantidadCamiones();
    document.getElementById("txtTotal").value = getTotalRecaudado();
}



function mostrarHora(tipoVehiculo) {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString(); 
    const mensaje = `Último vehículo: ${tipoVehiculo} - ${hora}`;
    document.getElementById("ultimoVehiculo").textContent = mensaje;
}

document.getElementById("imgAuto").addEventListener("click", () => {
    registrarAuto();
    actualizarPantalla();
    mostrarHora("Automóvil");
});

document.getElementById("imgBus").addEventListener("click", () => {
    registrarBus();
    actualizarPantalla();
    mostrarHora("Bus");
});

document.getElementById("imgCamion").addEventListener("click", () => {
    registrarCamion();
    actualizarPantalla();
    mostrarHora("Camión");
});