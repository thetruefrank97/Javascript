import { Persona } from "./Persona";
let nombre = prompt("Cual es tu nombre");
let edad = Number(prompt("Cual es tu edad"));
let sexo = prompt("Introduce el sexo").charAt(0);
let peso = Number(prompt("Introduce tu peso"));
let altura = Number(prompt("Introduce tu altura"));
let persona1 = Persona.PersonaDefecto();
let persona2 = Persona.nombreEdadSexoDefecto(nombre, edad, sexo);
let persona3 = new Persona(nombre, edad, sexo, peso, altura);
