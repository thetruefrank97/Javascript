import {Empleado,PLUS} from "./Empleado"

export default class Comercial extends Empleado{

    private Zona:string;


        constructor(Nombre:string,Edad:number,Salario:number,Zona:string){
            super(Nombre,Edad,Salario);
            this.Zona=Zona;
        }

        public set setZona(Zona:string){
            this.Zona=Zona;
        }

        public get getZona():string{
            return this.Zona=this.Zona;
        }

        public plus():boolean{
            if(super.getEdad > 25 && this.Zona === "Zona 3"){
                let nuevoSalario:number = super.getSalario + PLUS;
                super.setSalario=nuevoSalario;
                console.log(`Se le ha anadido el plus al empleado ${super.getNombre}`)
                return true;
            }else{
                return false;
            }
        }        
}