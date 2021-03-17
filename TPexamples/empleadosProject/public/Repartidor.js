import { Empleado, PLUS } from "./Empleado.js";
export default class Repartidor extends Empleado {
    constructor(Nombre, Edad, Salario, Comision) {
        super(Nombre, Edad, Salario);
        this.Comision = Comision;
    }
    set setComision(Comision) {
        this.Comision = Comision;
    }
    get getComision() {
        return this.Comision;
    }
    plus() {
        if (super.getEdad >= 30 && this.Comision > 200) {
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
