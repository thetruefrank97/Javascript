const carrito = ["producto 1", "producto 2", "producto 3"];

const marcas = ["adidas", "nike", "lacoste"];

const persona = {
    nombre: "frank",
    edad: 23,
    profesion: "Developer"
}

console.log(Object.keys(persona));

carrito.forEach(producto => {
    console.log(producto);
})

marcas.map(marca => {
    console.log(marca);
})

// Spread operator
const lenguajes = ["java", "python", "javascript"];
const frameworks = ["springboot", "django", "angular"];

let combinacion = [...lenguajes, ...frameworks];
console.log(combinacion);


//metodos arreglos
const personas = [
    { nombre: "Geranimo", edad: 40, aprendiendo: "javascript" },
    { nombre: "Jurassiq", edad: 19, aprendiendo: "java" },
    { nombre: "Darko", edad: 40, aprendiendo: "python" }
]


const mayores = personas.filter(persona => {
    return persona.edad > 20
});

console.log(mayores);

const Jurassiq = personas.find(persona => {
    return persona.nombre === "Jurassiq";
});

console.log(Jurassiq);

let edadtotal = personas.reduce((total, persona) => {
    return total + persona.edad;
}, 0)

console.log(edadtotal);