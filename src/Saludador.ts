export default class Saludador {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public saludar() {
        console.log("Hola " + this.nombre);
    }
}
