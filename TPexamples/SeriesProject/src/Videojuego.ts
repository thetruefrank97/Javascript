import {Entregable} from "./Entregable";

export const HORAS_ESTIMADAS:number = 10;
export const MAYOR = 1;
export const MENOR = -1;
export const IGUAL = 0;


export class Videojuego implements Entregable{
    private titulo:string;
    private horasEstimadas:number;
    private entregado:boolean;
    private genero:string;
    private compania:string;

    constructor(titulo:string,horasEstimadas:number,genero:string,compania:string){
        this.titulo=titulo;
        this.horasEstimadas=horasEstimadas;
        this.genero=genero;
        this.entregado=false;
        this.compania=compania;
    }

    static por_defecto(){
       return  new Videojuego("",HORAS_ESTIMADAS,"","");
    }

    static titulo_horas_defecto(titulo:string,horasEstimadas:number){
       return  new Videojuego(titulo,horasEstimadas,"","");
    }

    public set setTitulo(titulo:string){
        this.titulo=titulo;
    }

    public get getTitulo():string{
        return this.titulo;
    }

    public set setHorasEstimadas(horasEstimadas:number){
        this.horasEstimadas=horasEstimadas;
    }

    public get getHorasEstimadas():number{
        return this.horasEstimadas;
    }

    public set setGenero(genero:string){
        this.genero=genero;
    }

    public get getGenero():string{
        return this.genero;
    }

    public set setCompania(compania:string){
        this.compania=compania;
    }

    public get getCompania():string{
        return this.compania;
    }

    public toString():string{
        return `return "Informacion del videojuego: \n
        \tTitulo: ${this.titulo}\n 
        \tHoras estimadas: ${this.horasEstimadas}\n
        \tGenero: ${this.genero}\n" 
        \tCompania: ${this.compania}`
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
        let estado: number = MENOR;

       let ref:Videojuego=<Videojuego>a;

       if(this.horasEstimadas > ref.getHorasEstimadas){
           estado = MAYOR;
       }else if(this.horasEstimadas === ref.getHorasEstimadas){
           estado = IGUAL;
       }

       return estado;


    }


}