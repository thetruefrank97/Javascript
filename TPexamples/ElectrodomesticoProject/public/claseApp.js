import { Lavadora } from "./Lavadora.js";
import { Television } from "./Television.js";
import { Electrodomestico } from "./Electrodomestico.js";
let listaElectrodomesticos = new Array(10);
listaElectrodomesticos[0] = new Electrodomestico(400, "Verde", "C", 50);
listaElectrodomesticos[1] = Lavadora.precioYpesoLavadora(150, 30);
listaElectrodomesticos[2] = new Television(500, "Negro", "F", 20, 10, false);
listaElectrodomesticos[3] = Electrodomestico.porDefecto();
listaElectrodomesticos[4] = new Electrodomestico(600, "Gris", "A", 15);
listaElectrodomesticos[5] = new Lavadora(5000, "Verde", "E", 80, 40);
listaElectrodomesticos[6] = Television.precioYpeso(50000, 20);
listaElectrodomesticos[7] = new Lavadora(100, "Oxidado", "A", 100, 5);
listaElectrodomesticos[8] = new Television(60000, "Metalico", "F", 20, 50, true);
listaElectrodomesticos[9] = Electrodomestico.precioYpeso(400, 15);
let sumaElectrodomesticos = 0;
let sumaLavadoras = 0;
let sumaTelevisiones = 0;
for (let x = 0; x < listaElectrodomesticos.length; x++) {
    if (listaElectrodomesticos[x] instanceof Electrodomestico) {
        sumaElectrodomesticos = sumaElectrodomesticos + listaElectrodomesticos[x].precioFinal();
    }

    if (listaElectrodomesticos[x] instanceof Lavadora) {
        sumaLavadoras = sumaLavadoras + listaElectrodomesticos[x].precioFinal();
    }

    if (listaElectrodomesticos[x] instanceof Television) {
        sumaTelevisiones = sumaTelevisiones + listaElectrodomesticos[x].precioFinal();
    }
}
console.log("La suma del precio de los electrodomesticos es de " + sumaElectrodomesticos);
console.log("La suma del precio de las lavadoras es de " + sumaLavadoras);
console.log("La suma del precio de las televisiones es de " + sumaTelevisiones);
