import { Password } from "./Password.js";

let tamanio = parseInt(prompt("Introduce el tamanio del array"));

let longitud = parseInt(prompt("Introduce la longitud del password"));

let fortalezaPassword = [];
let listaPassword = [];
listaPassword.length = tamanio;
fortalezaPassword.length = tamanio;



for (let x = 0; x < listaPassword.length; x++) {
    listaPassword[x] = new Password(longitud);
    fortalezaPassword[x] = listaPassword[x].esFuerte();
    console.log(listaPassword[x].getContrasena + " " + fortalezaPassword[x]);
}