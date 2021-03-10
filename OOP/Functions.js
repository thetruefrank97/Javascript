function saludar() {
    console.log("saludar");
}
saludar();

// function expression 

const cliente = function (nombre) {
    console.log(nombre)
}
cliente("Frank");


//Arrow function
const cliente2 = (nombre2) => {
    console.log(nombre2);
}
cliente2("Franko");

// export functions for helper files
function suma(a, b) {
    let suma = a + b;
    return suma;
}

let addition = suma(30, 50);
console.log(addition);
