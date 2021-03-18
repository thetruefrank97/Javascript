
export const SEXO_DEFECTO: string = "H";
export const SOBREPESO:number = 1;
export const PESO_IDEAL:number = 0;
export const INFRAPESO:number = -1;

export class Persona{
    private nombre:string;
    private edad:number;
    private DNI:string;
    private sexo: string;
    private peso:number;
    private altura: number;

    constructor(nombre:string,edad:number,sexo:string,peso:number,altura:number){
            this.nombre=nombre;
            this.edad=edad;
            this.DNI=this.generarDNI();
            this.sexo=sexo;
            this.peso=peso;
            this.comprobarSexo;
            this.altura=altura;
    }

    public setNombre(nombre:string){
        this.nombre=nombre;
    }

    public setEdad(edad:number){
        this.edad=edad;
    }

    public setSexo(sexo:string){
        this.sexo=sexo;
    }

    public setPeso(peso:number){
        this.peso=peso;
    }

    public setAltura(altura:number){
        this.altura=altura;
    }

    static PersonaDefecto(){
        new Persona("",0,"",0,0);
    }

    static nombreEdadSexoDefecto(nombre:string,edad:number,sexo:string){
        new Persona(nombre,edad,sexo,0,0);
    }

    public esMayorDeEdad():boolean{
        if(this.edad >=18){
            return true;
        }
        return false;

    }

    public calcularIMC():number{
        let pesoActual = this.peso/(Math.pow(this.altura,2));

        if(pesoActual >= 20 && pesoActual <=25){
            return PESO_IDEAL;
        }else if(pesoActual < 20){
            return INFRAPESO;
        }else{
            return SOBREPESO;
        }

    }

    private comprobarSexo(){
        if(this.sexo !== "H" && this.sexo !== "M"){
            this.sexo = SEXO_DEFECTO;
        }
    }

    private generarDNI():string{
        const divisor:number = 23;

        let numDNI:number = (Math.floor(Math.random() * (100000000 - 10000000) + 10000000));
        let res: number = numDNI - (numDNI/divisor*divisor);

        let letraDNI:string = this.generarLetraDNI(res);

        return numDNI.toString() + letraDNI;
    }

    private generarLetraDNI(res:number):string{
        let letras:string[] = ['T', 'R', 'W', 'A', 'G', 'M', 'Y',
            'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
            'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        return letras[res];
    }

    public toString():string{
        let sexo;
        if(this.sexo === "H"){
            sexo="Hombre";
        }else{
            sexo="Mujer";
        }

        return `Informacion de la persona: \n
            Nombre: ${this.nombre} \n
            Sexo: ${sexo} \n
            Edad: ${this.edad} anos \n
            DNI: ${this.DNI} \n
            Peso: ${this.peso} kg \n
            Altura: ${this.altura} metros\n
        `
    }

}