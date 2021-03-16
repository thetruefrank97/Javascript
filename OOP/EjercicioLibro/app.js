import { Libro } from "./Libro.js";


let libro1 = new Libro(11111, "LUKE", "SKYWALKER", 444);
let libro2 = new Libro(1234, "Anakin", "George", 666);

console.log(libro1.toString())
console.log(libro2.toString())

if (libro1.getNumPaginas >= libro2.getNumPaginas) {
    console.log(`El libro ${libro1.getTitulo} tiene mas paginas que el libro ${libro2.getTitulo}`);
} else {
    console.log(`El libro ${libro2.getTitulo} tiene mas paginas`)
}