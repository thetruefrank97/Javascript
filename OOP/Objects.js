// Objetos
// function mostrarInformacionTarea(tarea, prioridad) {
//     return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
// }

// Object Literal

const persona = {
    persona: "Frank",
    profesion: "web Developer"
}

console.log(persona);

//Object constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

Tarea.prototype.mostrarInformacion = function (tarea, prioridad) {
    return `la tarea ${tarea} tiene una prioridad de ${prioridad}`;
}


const tarea1 = new Tarea("Aprender javascript", "urgente");

const mostrarInfo = tarea1.mostrarInformacion(tarea1.nombre, tarea1.urgencia);
console.log(mostrarInfo);