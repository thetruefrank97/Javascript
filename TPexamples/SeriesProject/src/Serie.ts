import {Entregable} from "./Entregable";

 export const NUM_TEMPORADAS_DEFECTO:number=3;
 export const MAYOR = 1;
export const MENOR = -1;
export const IGUAL = 0;
 
 
 export class Serie implements Entregable{
     private titulo:string;
     private numTemporadas:number;
     private entregado:boolean;
     private genero:string;
     private creador:string;

     constructor(titulo:string,numTemporadas:number,genero:string,creador:string){
         this.titulo=titulo;
         this.numTemporadas=numTemporadas;
         this.genero=genero;
         this.creador=creador;
         this.entregado=false;
     }

     static defecto(){
         return new Serie("",NUM_TEMPORADAS_DEFECTO,"","");

     }

     static titulo_creador_defecto(titulo:string,creador:string,genero?:string){
         if(genero){
            return  new Serie(titulo,NUM_TEMPORADAS_DEFECTO,genero,creador);
         }else{
            return  new Serie(titulo,NUM_TEMPORADAS_DEFECTO,"",creador);
         }
     }

     public set setTitulo(titulo:string){
         this.titulo=titulo
     }

     public get getTitulo():string{
         return this.titulo
     }

     public set setNumTemporadas(numTemporadas:number){
         this.numTemporadas=numTemporadas;
     }

     public get getNumTemporadas():number{
         return this.numTemporadas;
     }

     public set setGenero(genero:string){
         this.genero=genero;
     }

     public get getGenero():string{
         return this.genero;
     }


     public set setCreador(creador:string){
         this.creador=creador;
     }

     public get getCreador():string{
         return this.creador;
     }


     public toString():string{
         return `return "Informacion de la Serie: \n
         \tTitulo: ${this.titulo}\n 
         \tNumero de temporadas: ${this.numTemporadas}\n
         \tGenero: ${this.genero}\n" 
         \tCreador: ${this.creador}`
     }

     public entregar(){
         this.entregado=true;
     }

     public devolver(){
         this.entregado=false;
     }

     public isEntregado():boolean{
         if(this.entregado){
             return true;
         }

         return false;
     }

     public compareTo(a:Object):number{
         let estado = MENOR;
         let ref:Serie=<Serie>a;

         if(this.numTemporadas > ref.getNumTemporadas){
             estado = MAYOR;
         }else if(this.numTemporadas === ref.getNumTemporadas){
             estado = IGUAL;
         }

         return estado;
     }


 }