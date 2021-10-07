"use strict";
// 1. Las primitivas
let greet = "buenas tardes";
let edad = 12;
let mostrarMensaje = true;
if (mostrarMensaje) {
    console.log(greet + "tengo" + edad + "años");
}
//2. arreglos
let numbers = [1, 2, 3, 4, 5];
let names = ["ana", "Sara", "David"];
//3. Any
let hour;
let mostrarHora;
mostrarHora = true;
//Errorr ->
//mostrarHora = 33;
if (mostrarHora) {
    hour = "5";
}
else {
    hour = 5;
}
//4. noImplicitAny
function fn(s) {
    console.log(s.subtr(3));
}
//5. Anotaciones tipo en Variable
let radius = 3;
let selection = false;
//Funciones. Anotaciones de tipo parametro.
function Saludar(name) {
    console.log("Hola" + name.toUpperCase() + "!!");
}
//Funciones. Anotaciones de tipo retorno
let edadUsuario = 45;
function decirEdad() {
    return edadUsuario;
}
// Funciones anonimas
const differentNames = ["Ana", "San", "Eva"];
differentNames.forEach(function (s) {
    console.log(s.toUpperCase());
});
