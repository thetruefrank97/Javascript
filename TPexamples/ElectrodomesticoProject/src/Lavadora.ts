import {Electrodomestico,COLOR_DEFECTO,CONSUMO_ENERGETICO,PRECIO_BASE,PESO_BASE} from "./Electrodomestico";

export const CARGA_BASE:number=5;

export class Lavadora extends Electrodomestico{
    private carga:number;

    constructor(precioBase:number,color:string,consumoEnergetico:string,peso:number,carga:number){
        super(precioBase,color,consumoEnergetico,peso);
        this.carga=carga;
    }

    static precioYpesoLavadora(precio:number,peso:number){
        return new Lavadora(precio,COLOR_DEFECTO,CONSUMO_ENERGETICO,peso,CARGA_BASE);
    }

    static defectoLavadora(){
        return new Lavadora(PRECIO_BASE,COLOR_DEFECTO,CONSUMO_ENERGETICO,PESO_BASE,CARGA_BASE);
    }

    public get getCarga():number{
        return this.carga;
    }

    public precioFinal():number{
        let plus:number=super.precioFinal();
        if(this.carga >= 30){
            plus = plus + 50;
        }

        
        return plus;
    }

  




}