export class Persona {
    constructor(nombre, edad, sexo, peso, altura) {
        this._nombre = nombre;
        this._edad = edad;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._DNI = this.generarDNI();
        this.comprobarSexo();
        this.calcularIMC();
        this.esMayorEdad();
    }



    static nombreEdadySexo(nombre, edad, sexo) {
        return new Persona(nombre, edad, 0, sexo, 0);
    }

    static todoPorDefecto() {
        return new Persona("", 0, 0, "H", 0, 0);
    }


    comprobarSexo() {
        if (this.sexo != "H" && this.sexo != "M") {
            this._sexo = "H";
        }
    }

    generarDNI() {
        const divisor = 23;

        //generar numero de 8 digitos
        let numDNI = (Math.floor(Math.random() * (100000000 - 10000000) + 10000000));
        let res = numDNI - (numDNI / divisor * divisor);

        //Calcular letra del DNI
        let letraDNI = this.generaLetraDNI(res)


        //Pasar el DNI  a string
        let dni = numDNI.toString() + letraDNI;

        return dni;

    }

    generaLetraDNI(res) {
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y',
            'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z',
            'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        return letras[res];
    }

    set setNombre(nombre) {
        this._nombre = nombre;
    }

    set setEdad(edad) {
        this._edad = edad;
    }

    set setSexo(sexo) {
        this._sexo = sexo;
    }

    set setPeso(peso) {
        this._peso = peso;
    }

    set setAltura(altura) {
        this._altura = altura;
    }




    calcularIMC() {
        const INFRAPESO = -1;
        const PESO_IDEAL = 0;
        const SOBREPESO = 1;
        let pesoActual = this._peso / (Math.pow(this._altura, 2));

        if (pesoActual >= 20 && pesoActual <= 25) {
            return PESO_IDEAL;
        } else if (pesoActual < 20) {
            return INFRAPESO;
        } else {
            return SOBREPESO;
        }
    }

    esMayorEdad() {
        let mayor = false;
        if (this._edad >= 18) {
            mayor = true
        }
        return mayor;
    }

}

