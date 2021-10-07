"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Saludador {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log("Hola " + this.nombre);
    }
}
exports.default = Saludador;
