import {Empleado,PLUS} from "./Empleado";

export default class Repartidor extends Empleado{
    private Comision:number;

    constructor(Nombre:string,Edad:number,Salario:number,Comision:number){
        super(Nombre,Edad,Salario);
        this.Comision=Comision;
    }

public set setComision(Comision:number){
    this.Comision=Comision;
}

public get getComision():number{
    return this.Comision;
}

public plus():boolean{
    if(super.getEdad >=30 && this.Comision > 200){
        let nuevoSalario:number = super.getSalario + PLUS;
        super.setSalario=nuevoSalario;
        console.log(`Se le ha anadido el plus al empleado ${super.getNombre}`)
        return true;
    }else{
        return false;
    }
}


}