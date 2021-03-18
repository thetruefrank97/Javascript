export const COLOR_DEFECTO = "blanco";
export const CONSUMO_ENERGETICO = "F";
export const PRECIO_BASE = 100;
export const PESO_BASE = 5;
export class Electrodomestico {
    constructor(precioBase, color, consumoEnergetico, peso) {
        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
    }
    static porDefecto() {
        return new Electrodomestico(PRECIO_BASE, COLOR_DEFECTO, CONSUMO_ENERGETICO, PESO_BASE);
    }
    static precioYpeso(precioBase, peso) {
        return new Electrodomestico(precioBase, COLOR_DEFECTO, CONSUMO_ENERGETICO, peso);
    }
    get getPrecioBase() {
        return this.precioBase;
    }
    get getColor() {
        return this.color;
    }
    get getConsumoEnergetico() {
        return this.consumoEnergetico;
    }
    get getPeso() {
        return this.peso;
    }
    comprobarConsumoEnergetico(consumoEnergetico) {
        if (consumoEnergetico.charCodeAt(0) >= 65 && consumoEnergetico.charCodeAt(0) <= 70) {
            this.consumoEnergetico = consumoEnergetico;
        }
        else {
            this.consumoEnergetico = CONSUMO_ENERGETICO;
        }
    }
    comprobarColor(color) {
        let colores = ["blanco", "negro", "rojo", "azul", "gris"];
        let encontrado = false;
        for (let x = 0; x < colores.length && !encontrado; x++) {
            if (colores[x] === color) {
                encontrado = true;
            }
        }
        if (encontrado) {
            this.color = color;
        }
        else {
            this.color = COLOR_DEFECTO;
        }
    }
    precioFinal() {
        let plus = 0;
        switch (this.consumoEnergetico) {
            case "A":
                plus = plus + 100;
            case "B":
                plus = plus + 80;
            case "C":
                plus = plus + 60;
            case "D":
                plus = plus + 50;
            case "E":
                plus = plus + 30;
            case "F":
                plus = plus + 10;
        }
        if (this.peso >= 0 && this.peso <= 19) {
            plus = plus + 10;
        }
        else if (this.peso >= 20 && this.peso <= 49) {
            plus = plus + 50;
        }
        else if (this.peso >= 50 && this.peso <= 79) {
            plus = plus + 80;
        }
        else if (this.peso >= 80) {
            plus = plus + 100;
        }
        return this.precioBase + plus;
    }
}
