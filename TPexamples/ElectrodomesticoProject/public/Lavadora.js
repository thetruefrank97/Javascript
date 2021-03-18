import { Electrodomestico, COLOR_DEFECTO, CONSUMO_ENERGETICO, PRECIO_BASE, PESO_BASE } from "./Electrodomestico.js";
export const CARGA_BASE = 5;
export class Lavadora extends Electrodomestico {
    constructor(precioBase, color, consumoEnergetico, peso, carga) {
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }
    static precioYpesoLavadora(precio, peso) {
        return new Lavadora(precio, COLOR_DEFECTO, CONSUMO_ENERGETICO, peso, CARGA_BASE);
    }
    static defectoLavadora() {
        return new Lavadora(PRECIO_BASE, COLOR_DEFECTO, CONSUMO_ENERGETICO, PESO_BASE, CARGA_BASE);
    }
    get getCarga() {
        return this.carga;
    }
    precioFinal() {
        let plus = super.precioFinal();
        if (this.carga >= 30) {
            plus = plus + 50;
        }
        return plus;
    }
}
