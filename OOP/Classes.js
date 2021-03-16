import { crearTarea } from "./Helpers.js";



// Escribir classes


class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar() {
        return (`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        return `La compra de ${this.nombre} tiene una prioridad ${this.prioridad} y se deben comprar ${this.cantidad} de estos objetos`
    }
}

//Crear los objetos
let tarea1 = new Tarea("Aprender javascript", "Alta");

//Compras
let compra1 = new ComprasPendientes("jabon", "Alta", 400);
let comprar2 = crearTarea("Aprender a nada", "Urgente");

console.log(compra1.mostrar());
console.log(comprar2);