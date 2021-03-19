export const HORAS_ESTIMADAS = 10;
export const MAYOR = 1;
export const MENOR = -1;
export const IGUAL = 0;
export class Videojuego {
    constructor(titulo, horasEstimadas, genero, compania) {
        this.titulo = titulo;
        this.horasEstimadas = horasEstimadas;
        this.genero = genero;
        this.entregado = false;
        this.compania = compania;
    }
    static por_defecto() {
        return new Videojuego("", HORAS_ESTIMADAS, "", "");
    }
    static titulo_horas_defecto(titulo, horasEstimadas) {
        return new Videojuego(titulo, horasEstimadas, "", "");
    }
    set setTitulo(titulo) {
        this.titulo = titulo;
    }
    get getTitulo() {
        return this.titulo;
    }
    set setHorasEstimadas(horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    }
    get getHorasEstimadas() {
        return this.horasEstimadas;
    }
    set setGenero(genero) {
        this.genero = genero;
    }
    get getGenero() {
        return this.genero;
    }
    set setCompania(compania) {
        this.compania = compania;
    }
    get getCompania() {
        return this.compania;
    }
    toString() {
        return `return "Informacion del videojuego: \n
        \tTitulo: ${this.titulo}\n 
        \tHoras estimadas: ${this.horasEstimadas}\n
        \tGenero: ${this.genero}\n" 
        \tCompania: ${this.compania}`;
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
        if (this.horasEstimadas > ref.getHorasEstimadas) {
            estado = MAYOR;
        }
        else if (this.horasEstimadas === ref.getHorasEstimadas) {
            estado = IGUAL;
        }
        return estado;
    }
}
