// 1. Las primitivas

let greet = "buenas tardes";
let edad = 12;
let mostrarMensaje = true;

if(mostrarMensaje) {
    console.log(greet + "tengo" + edad + "años");
}

//2. arreglos

let numbers = [1,2,3,4,5 ];
let names  = ["ana", "Sara", "David"];

//3. Any

let hour:any;
let mostrarHora:boolean;

mostrarHora = true;
//Errorr ->
//mostrarHora = 33;

if(mostrarHora){
    hour = "5";
} else {
    hour = 5;
}

//4. noImplicitAny

function fn(s) {
    console.log(s.subtr(3));
}

//5. Anotaciones tipo en Variable

let radius: number = 3;
let selection: boolean = false;

//6. Funciones. Anotaciones de tipo parametro.

function Saludar(name: string) {
    console.log("Hola" + name.toUpperCase() + "!!");
}

//7. Funciones. Anotaciones de tipo retorno


let edadUsuario = 45;

function decirEdad(): number {
    return edadUsuario;
}

//8. Funciones anonimas

const differentNames = ["Ana", "San", "Eva"];

differentNames.forEach(function (s) {
    console.log(s.toUpperCase());
    });

//9. Objetos

function area(rect: {lenght: number; width: number}) {
    console.log("the lenght is" +rect.lenght);
    console.log("the widtht is" +rect.width);
}

area({ lenght: 10, width: 10});

//10. Propiedades opcionales

function printName(name: { first: string; last?: string }) {
    // ...
}
printName({ first: "Ana" });
printName({ first: "Maria", last: "Vargas" });

//11. Definicion de un tipo

function printAge(age: number | string) {
    console.log("Your age is: " + age);
}
printAge(30);
printAge("treinta");
// Error
printAge({ myAge: 22342 });

//12.  Trabajar con tipos de union

function printId(id: number | string) {
    if (typeof id === "string") {
        // En caso de que sea texto...
        console.log(id.toUpperCase());
    } else {
        // en caso de que sea numero
        console.log(id);
    }
}

// 13. Alias de tipo

type Rectangle= {
    height: number;
    width: number;
};

function printCoord(pt: Rectangle) {
    console.log("The height is " + pt.height);
    console.log("The width is " + pt.width);
}

printCoords({ height: 200, width: 100 });

//14. interfaces.

interface  rectArea {
    height: number;
    width: number ;
};

function printCoords(pt: Rectangle) {
    console.log("The height is " + pt.height);
    console.log("The width is " + pt.width);
}

printCoords({ height: 200, width: 100 });

