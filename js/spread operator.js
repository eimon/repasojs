//spread operator

let lenguajes = ['JavaScript' , 'PHP' , 'Python'];

let [ultimo]=[...lenguajes].reverse();

console.log('la variable último tiene el valor: ' +ultimo);
console.log(lenguajes);

function Suma(a,b,c) {
    console.log(a+b+c)
}

Suma(1,2,3);

//function expression: sirve para que la función no pueda ser llamada antes de ser creada

const cliente = function(nombreCliente='Amon'){
    console.log('Mostrando: '+nombreCliente)
}

cliente('Juan');
cliente();
