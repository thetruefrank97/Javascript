import {Electrodomestico,COLOR_DEFECTO,CONSUMO_ENERGETICO,PRECIO_BASE,PESO_BASE} from "./Electrodomestico";

export const RESOLUCION_BASE:number=20;
export const SINTONIZADOR_TDT_BASE:boolean = false;

export class Television extends Electrodomestico{
    private resolucion:number;
    private sintonizador_TDT:boolean;


    constructor(precioBase:number,color:string,consumoEnergetico:string,peso:number,resolucion:number,sintonizador_TDT:boolean){
        super(precioBase,color,consumoEnergetico,peso)
        this.resolucion=resolucion;
        this.sintonizador_TDT=sintonizador_TDT;
    }

    static TelevisionDefecto(){
        return new Television(PRECIO_BASE,COLOR_DEFECTO,CONSUMO_ENERGETICO,PESO_BASE,RESOLUCION_BASE,SINTONIZADOR_TDT_BASE)
    }

    static precioYpesoLavadora(precio:number,peso:number){
        return new Television(precio,COLOR_DEFECTO,CONSUMO_ENERGETICO,peso,RESOLUCION_BASE,SINTONIZADOR_TDT_BASE);
    }

    public get getResolucion():number{
        return this.resolucion;
    }

    public get getSintonizadorTDT():boolean{
        return this.sintonizador_TDT;
    }

    public precioFinal():number{
        let plus = super.precioFinal();

        if(this.resolucion >= 40 ){
            plus=plus+super.getPrecioBase*0.3;
        }

        if(this.sintonizador_TDT){
            plus=plus+50;
        }

        return plus;
    }





}