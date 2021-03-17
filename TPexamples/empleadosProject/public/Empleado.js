export const PLUS = 300;
export class Empleado {
    constructor(Nombre, Edad, Salario) {
        this.Nombre = Nombre;
        this.Edad = Edad;
        this.Salario = Salario;
    }
    set setNombre(Nombre) {
        this.Nombre = Nombre;
    }
    get getNombre() {
        return this.Nombre;
    }
    set setEdad(Edad) {
        this.Edad = Edad;
    }
    get getEdad() {
        return this.Edad;
    }
    set setSalario(Salario) {
        this.Salario = Salario;
    }
    get getSalario() {
        return this.Salario;
    }
    toString() {
        return `Nombre = ${this.Nombre}, Edad=${this.Edad},Salario=${this.Salario} `;
    }
}
