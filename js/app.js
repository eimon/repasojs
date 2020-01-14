//Escribir clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }
    
    mostrar() {
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`
    }
}

// crear objetos

let tarea1 = new Tarea('Aprender Javascript','Alta');
let tarea2 = new Tarea('Darle de comer a Dulci','Baja');
let tarea3 = new Tarea('Hacer unas pajillas','Media');
let tarea4 = new Tarea('Fumar un pitillo','Urgente');
let tarea5 = new Tarea('Cocinar','Meh');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());
console.log(tarea5.mostrar());