class Serie {
    constructor(titulo, genero, creador) {
        this.titulo = titulo;
        this.numTemporadas = 3;
        this.entregado = false;
        this.genero = genero;
        this.creador = creador;
    }

    static tituloCreador(titulo, creador) {
        new Serie(titulo, 3, false, "", creador);
    }

    set setTitulo(titulo) {
        this.titulo = titulo;
    }

    get getTitulo(titulo) {
        return this.titulo;
    }

    set setTemporadas(numTemporadas) {
        this.numTemporadas = numTemporadas;
    }

    get getTemporadas() {
        return this.numTemporadas;
    }

    set setEntregado(entregado) {
        this.entregado = entregado;
    }

    set setGenero(genero) {
        this.genero = genero;
    }

    get getGenero() {
        return this.genero
    }

    set setCreador(creador) {
        this.creador = creador;
    }

    get getCreador() {
        return this.creador = creador;
    }

    toString() {
        return `${this.titulo} ${this.numTemporadas} ${this.entregado} ${this.genero} ${this.creador}`;
    }







}