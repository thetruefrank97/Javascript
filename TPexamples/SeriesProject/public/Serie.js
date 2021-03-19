export const NUM_TEMPORADAS_DEFECTO = 3;
export const MAYOR = 1;
export const MENOR = -1;
export const IGUAL = 0;
export class Serie {
    constructor(titulo, numTemporadas, genero, creador) {
        this.titulo = titulo;
        this.numTemporadas = numTemporadas;
        this.genero = genero;
        this.creador = creador;
        this.entregado = false;
    }
    static defecto() {
        return new Serie("", NUM_TEMPORADAS_DEFECTO, "", "");
    }
    static titulo_creador_defecto(titulo, creador, genero) {
        if (genero) {
            return new Serie(titulo, NUM_TEMPORADAS_DEFECTO, genero, creador);
        }
        else {
            return new Serie(titulo, NUM_TEMPORADAS_DEFECTO, "", creador);
        }
    }
    set setTitulo(titulo) {
        this.titulo = titulo;
    }
    get getTitulo() {
        return this.titulo;
    }
    set setNumTemporadas(numTemporadas) {
        this.numTemporadas = numTemporadas;
    }
    get getNumTemporadas() {
        return this.numTemporadas;
    }
    set setGenero(genero) {
        this.genero = genero;
    }
    get getGenero() {
        return this.genero;
    }
    set setCreador(creador) {
        this.creador = creador;
    }
    get getCreador() {
        return this.creador;
    }
    toString() {
        return `return "Informacion de la Serie: \n
         \tTitulo: ${this.titulo}\n 
         \tNumero de temporadas: ${this.numTemporadas}\n
         \tGenero: ${this.genero}\n" 
         \tCreador: ${this.creador}`;
    }
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        if (this.entregado) {
            return true;
        }
        return false;
    }
    compareTo(a) {
        let estado = MENOR;
        let ref = a;
        if (this.numTemporadas > ref.getNumTemporadas) {
            estado = MAYOR;
        }
        else if (this.numTemporadas === ref.getNumTemporadas) {
            estado = IGUAL;
        }
        return estado;
    }
}
