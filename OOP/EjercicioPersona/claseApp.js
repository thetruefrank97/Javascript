import { Persona } from "./Persona.js";

let nombre = prompt("Cual es tu nombre");

let edad = parseInt(prompt("Cual es tu edad"));

let sexo = prompt("Introduce el sexo").charAt(0);

let peso = parseInt(prompt("Introduce tu peso"));

let altura = parseInt(prompt("Introduce tu altura"));


console.log("Persona");
const persona1 = new Persona(nombre, edad, sexo, peso, altura);
muestraMensajePeso(persona1);
muestraMayorEdad(persona1);
console.log(persona1)


function muestraMensajePeso(persona) {
    // let IMC = persona.calcularIMC();
    if (persona.calcularIMC() === -1) {
        console.log("La persona esta por debajo de su peso");
    } else if (persona.calcularIMC() === 1) {
        console.log("La persona esta por arriba de su peso ");
    } else {
        console.log("La persona esta en su peso ideal");
    }
    // switch (IMC) {
    //     case persona.PESO_IDEAL:
    //         console.log("La persona esta en su peso ideal");
    //         break;
    //     case persona.INFRAPESO:
    //         console.log("La persona esta por debajo de su peso ideal");
    //         break;
    //     case persona.SOBREPESO:
    //         console.log("La persona esta por encima de su peso ideal");
    //         break;

}

function muestraMayorEdad(persona) {
    if (persona.esMayorEdad()) {
        console.log("La persona es mayor de edad");
    } else {
        console.log("La persona es menor de edad");
    }
}