// Arreglos y map

const carrito= ['Producto 1', 'Producto 2', 'Producto 3'];

console.log(carrito);

//Pasar arreglo al contenido html

let html = '<ul>';
const appContenedor = document.querySelector('#app');
carrito.forEach(producto => {
    html += `<li>${producto}</li>`;
})
html += '</ul>'

appContenedor.innerHTML = html;

// map: sirve para crear un arreglo nuevo a partir de otro

carrito2= ['Producto 1', 'Producto 2', 'Producto 3'];

carrito2= carrito.map(producto => {
    return 'El producto es ' + producto;
})
console.log(carrito2);

const persona = {
    nombre : 'Amon',
    profesion : 'Desarrollador de plenus',
    edad: 31
}

//Object key

console.log(Object.keys(persona));

//Métodos en arreglos

const personas =[
    {nombre: 'Amon', edad:31, aprendiendo: 'Javascript'},
    {nombre: 'Juan', edad:22, aprendiendo: 'PHP'},
    {nombre: 'Manuela', edad:27, aprendiendo: 'A rascarse el higo'},
    {nombre: 'Miguel', edad:44, aprendiendo: 'ReactJS'}
    {nombre: 'Adriana', edad:35, aprendiendo: 'Adobe'},
]

console.log(personas);

//Mayores de 28 años
//Filter va a devolver un arreglo del mismo tipo que fue llamado, que cumple la condicion

const mayores = personas.filter(persona => {
    return persona.edad >28;
})

console.log(mayores);

//Cómo agregar elementos a un arreglo
let arreglonombres = [];
personas.forEach(element => {
    arreglonombres.push(element.nombre);
});

console.log (arreglonombres);

//que parende alejandra y su edad. Find devuelve el primer elemento que cumple con la condición

const adriana = personas.find(persona => {
    return persona.nombre ==='Adriana';
})

console.log('Adriana está aprendiendo: '+adriana.aprendiendo);

//reduce=inject. se usa para sumar elementos particulares de el arreglo

let total = personas.reduce((edadTotal, persona) =>{
    return edadTotal + persona.edad;
}, 0)

console.log(total /personas.length);




//promises



const aplicardescuento  = new Promise ((resolve, reject) => {
    setTimeout ( () => {
        let descuento = false;

        if (descuento) {
            resolve ('Descuento Aplicado')
        }

        else {
            reject ('No se pudo aplicar descuento')
        }
    }, 3000);
});

aplicardescuento.then ( resultado => {
    console.log (resultado);
}).catch (mensajedeerror => {
    console.log ('El error es: ' + mensajedeerror);
});


//Promise con api JSON

const descargarUsuarios = cantidad => new Promise((resolve,reject) => {
    //pasar la cantidad a la api

    const api =`https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamado a ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexión
    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve( JSON.parse(xhr.responseText).results );
        } else {
            reject(Error(xhr.statusText));
        }
    }

    //error (Opcional)
    xhr.onerror = (error) => reject(error);

    //send
    xhr.send();
})

descargarUsuarios(20)
    .then(
        miembros => console.log(miembros),
        error => console.error(
            new Error('Hubo un error')
        )
    );

function imprimirHTML(usuarios){
    let html ='';
    usuarios.forEach(usuario => {
        html+= `
            <div style="border:1px;border-style:solid;border-radius:10px;">    
              <p>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                <br />
                Pais: ${usuario.nat}
                <br />
                Imagen:
                    <img src="${usuario.picture.medium}">
              </p>
            </div>`;
    });
 
    const contenedorHTML= document.querySelector('#app');
    contenedorHTML.innerHTML = html;
}