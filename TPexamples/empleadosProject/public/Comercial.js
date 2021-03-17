import { Empleado, PLUS } from "./Empleado.js";
export default class Comercial extends Empleado {
    constructor(Nombre, Edad, Salario, Zona) {
        super(Nombre, Edad, Salario);
        this.Zona = Zona;
    }
    set setZona(Zona) {
        this.Zona = Zona;
    }
    get getZona() {
        return this.Zona = this.Zona;
    }
    plus() {
        if (super.getEdad > 25 && this.Zona === "Zona 3") {
            let nuevoSalario = super.getSalario + PLUS;
            super.setSalario = nuevoSalario;
            console.log(`Se le ha anadido el plus al empleado ${super.getNombre}`);
            return true;
        }
        else {
            return false;
        }
    }
}
