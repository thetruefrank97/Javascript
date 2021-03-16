export class Password {
    constructor(longitud) {
        this.longitud = longitud;
        this.contrasena = this.generaPassword();
    }

    static contrasenaAlAzar() {
        return new Password()
    }

    get getLongitud() {
        return this.longitud;
    }

    set setlongitud(longitud) {
        this.longitud = longitud;
    }

    get getContrasena() {
        return this.contrasena;
    }

    generaPassword() {
        let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (let i = 0, n = charset.length; i < this.longitud; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }

    esFuerte() {
        let cuentaNumeros = 0;
        let cuentaMinusculas = 0;
        let cuentaMayusculas = 0;

        for (let x = 0; x < this.getContrasena.length; x++) {
            if (this.getContrasena.charAt(x) >= 97 && this.getContrasena.charAt(x) <= 122) {
                cuentaMinusculas = cuentaMinusculas + 1;
            } else {
                if (this.getContrasena.charAt(x) >= 65 && this.getContrasena.charAt(x) <= 90) {
                    cuentaMayusculas = cuentaMayusculas + 1;
                } else {
                    cuentaNumeros = cuentaNumeros + 1;
                }
            }
        }

        if (cuentaNumeros >= 5 && cuentaMinusculas >= 1 && cuentaMayusculas >= 2) {
            return true;
        } else {
            return false;
        }
    }

}