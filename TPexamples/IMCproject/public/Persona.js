export const SEXO_DEFECTO = "H";
export const SOBREPESO = 1;
export const PESO_IDEAL = 0;
export const INFRAPESO = -1;
export class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = this.generarDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.comprobarSexo;
        this.altura = altura;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    setSexo(sexo) {
        this.sexo = sexo;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    static PersonaDefecto() {
        new Persona("", 0, "", 0, 0);
    }
    static nombreEdadSexoDefecto(nombre, edad, sexo) {
        new Persona(nombre, edad, sexo, 0, 0);
    }
    esMayorDeEdad() {
        if (this.edad >= 18) {
            return true;
        }
        return false;
    }
    calcularIMC() {
        let pesoActual = this.peso / (Math.pow(this.altura, 2));
        if (pesoActual >= 20 && pesoActual <= 25) {
            return PESO_IDEAL;
        }
        else if (pesoActual < 20) {
            return INFRAPESO;
        }
        else {
            return SOBREPESO;
        }
    }
    comprobarSexo() {
        if (this.sexo !== "H" && this.sexo !== "M") {
            this.sexo = SEXO_DEFECTO;
        }
    }
    generarDNI() {
        const divisor = 23;
        let numDNI = (Math.floor(Math.random() * (100000000 - 10000000) + 10000000));
        let res = numDNI - (numDNI / divisor * divisor);
        let letraDNI = this.generarLetraDNI(res);
        return numDNI.toString() + letraDNI;
    }
    generarLetraDNI(res) {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y',
            'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
            'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
        return letras[res];
    }
    toString() {
        let sexo;
        if (this.sexo === "H") {
            sexo = "Hombre";
        }
        else {
            sexo = "Mujer";
        }
        return `Informacion de la persona: \n
            Nombre: ${this.nombre} \n
            Sexo: ${sexo} \n
            Edad: ${this.edad} anos \n
            DNI: ${this.DNI} \n
            Peso: ${this.peso} kg \n
            Altura: ${this.altura} metros\n
        `;
    }
}
