export class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numPaginas = numPaginas;
    }

    set setISBN(ISBN) {
        this.ISBN = ISBN;
    }

    get getISBN() {
        return this.ISBN;
    }

    set setTitulo(titulo) {
        this.titulo = titulo;
    }

    get getTitulo() {
        return this.titulo;
    }

    set setAutor(autor) {
        this.autos = autor;
    }

    get getAutos() {
        return this.autor;
    }

    set setNumPaginas(numPaginas) {
        this.numPaginas = numPaginas;
    }

    get getNumPaginas() {
        return this.numPaginas;
    }

    toString() {
        return `El libro con ${this.ISBN} creado por el ${this.autor} tiene este numero de paginas ${this.numPaginas}`
    }

}