export const COLOR_DEFECTO:string= "blanco";
export const CONSUMO_ENERGETICO:string="F";
export const PRECIO_BASE:number=100;
export const PESO_BASE:number=5;


export class Electrodomestico{
    private precioBase:number;
    private color:string;
    private consumoEnergetico:string;
    private peso:number;

    constructor(precioBase:number,color:string,consumoEnergetico:string,peso:number){
        this.precioBase=precioBase;
        this.color=color;
        this.consumoEnergetico=consumoEnergetico;
        this.peso=peso;
    }

    static porDefecto(){
        return new Electrodomestico(PRECIO_BASE,COLOR_DEFECTO,CONSUMO_ENERGETICO,PESO_BASE);
    }

   static precioYpeso(precioBase:number,peso:number){
       return new Electrodomestico(precioBase,COLOR_DEFECTO,CONSUMO_ENERGETICO,peso);
   }

   public get getPrecioBase():number{
       return this.precioBase;
   }

   public get getColor():string{
       return this.color;
   }

   public get getConsumoEnergetico():string{
       return this.consumoEnergetico;
   }

   public get getPeso():number{
       return this.peso;
   }

   public comprobarConsumoEnergetico(consumoEnergetico:string){
       if(consumoEnergetico.charCodeAt(0)>=65 && consumoEnergetico.charCodeAt(0) <=70){
            this.consumoEnergetico=consumoEnergetico;
       }else{
           this.consumoEnergetico = CONSUMO_ENERGETICO;
       }
   }

   private comprobarColor(color:string){
       let colores:string[]=["blanco","negro","rojo","azul","gris"];
       let encontrado:boolean=false;

       for(let x=0;x<colores.length && !encontrado;x++){
           if(colores[x] === color){
               encontrado=true;
           }
       }

       if(encontrado){
           this.color=color;
       }else{
           this.color=COLOR_DEFECTO;
       }
   }

   public precioFinal(){
       let plus:number=0;
       switch(this.consumoEnergetico){
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
                plus =  plus + 10;
       }

       if(this.peso >= 0 && this.peso <=19){
           plus = plus + 10;
       }else if(this.peso >= 20 && this.peso <= 49){
           plus = plus +50;
       }else if(this.peso >= 50 && this.peso <=79){
           plus = plus + 80;
       }else if(this.peso >= 80){
           plus = plus + 100;
       }

       return this.precioBase + plus;
   }

    }