class Cuenta {
    constructor(titular, cantidad) {
        this._titular = titular;

        if (cantidad < 0) {
            this._cantidad = 0;
        } else {
            this._cantidad = cantidad;
        }
    }

    get getTitular() {
        return this._titular;
    }

    set setTitular(titular) {
        this._titular = titular
    }

    get getCantidad() {
        return this._cantidad;
    }

    set setCantidad(cantidad) {
        this._cantidad = cantidad;
    }

    ingresar(cantidad) {
        if (cantidad > 0) {
            this._cantidad = this._cantidad + cantidad;
        }
    }

    retirar(cantidad) {
        if (this._cantidad - cantidad < 0) {
            this._cantidad = 0;
        } else {
            this._cantidad = this._cantidad - cantidad;
        }
    }

    mostrar() {
        return `El titular de la cuenta se llama ${this._titular}  y tiene esta cantidad ${this._cantidad} pesos`
    }

}


let cuenta2 = new Cuenta();
cuenta2.setTitular = "Frank";
cuenta2.setCantidad = 40000;
console.log(cuenta2.mostrar());
cuenta2.retirar(20000);
console.log(cuenta2.mostrar());