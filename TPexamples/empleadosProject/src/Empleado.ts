   export const PLUS:number=300;

  export abstract class Empleado{
    private Nombre:string;
    private Edad:number;
    private Salario:number;

    constructor(Nombre:string,Edad:number,Salario:number){
        this.Nombre=Nombre;
        this.Edad=Edad;
        this.Salario=Salario;
    }

    public set setNombre(Nombre:string){
        this.Nombre=Nombre;
    }

    public get getNombre():string{
        return this.Nombre;
    }

    public set setEdad(Edad:number){
        this.Edad=Edad;
    }

    public get getEdad():number{
        return this.Edad;
    }

    public set setSalario(Salario:number){
        this.Salario=Salario;
    }

    public get getSalario():number{
        return this.Salario;
    }

    public toString():string{
        return `Nombre = ${this.Nombre}, Edad=${this.Edad},Salario=${this.Salario} `
    }

    public abstract plus():boolean;

}

