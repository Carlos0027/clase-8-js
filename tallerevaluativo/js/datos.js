let cantidadAutos = 0;
let cantidadBuses = 0;
let cantidadCamiones = 0;
let totalRecaudado = 0;

export function getCantidadAutos() { return cantidadAutos; }
export function getCantidadBuses() { return cantidadBuses; }
export function getCantidadCamiones() { return cantidadCamiones; }
export function getTotalRecaudado() { return totalRecaudado; }

export function registrarAuto() {
    cantidadAutos++;
    totalRecaudado += 5000;
}

export function registrarBus() {
    cantidadBuses++;
    totalRecaudado += 10000;
}

export function registrarCamion() {
    cantidadCamiones++;
    totalRecaudado += 15000;
}

export function reiniciar() {
    cantidadAutos = 0;
    cantidadBuses = 0;
    cantidadCamiones = 0;
    totalRecaudado = 0; 
}   
