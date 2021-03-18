import { Electrodomestico, COLOR_DEFECTO, CONSUMO_ENERGETICO, PRECIO_BASE, PESO_BASE } from "./Electrodomestico.js";
export const RESOLUCION_BASE = 20;
export const SINTONIZADOR_TDT_BASE = false;
export class Television extends Electrodomestico {
    constructor(precioBase, color, consumoEnergetico, peso, resolucion, sintonizador_TDT) {
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion;
        this.sintonizador_TDT = sintonizador_TDT;
    }
    static TelevisionDefecto() {
        return new Television(PRECIO_BASE, COLOR_DEFECTO, CONSUMO_ENERGETICO, PESO_BASE, RESOLUCION_BASE, SINTONIZADOR_TDT_BASE);
    }
    static precioYpesoLavadora(precio, peso) {
        return new Television(precio, COLOR_DEFECTO, CONSUMO_ENERGETICO, peso, RESOLUCION_BASE, SINTONIZADOR_TDT_BASE);
    }
    get getResolucion() {
        return this.resolucion;
    }
    get getSintonizadorTDT() {
        return this.sintonizador_TDT;
    }
    precioFinal() {
        let plus = super.precioFinal();
        if (this.resolucion >= 40) {
            plus = plus + super.getPrecioBase * 0.3;
        }
        if (this.sintonizador_TDT) {
            plus = plus + 50;
        }
        return plus;
    }
}
