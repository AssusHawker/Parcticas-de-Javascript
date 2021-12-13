//Asignacion desectructurante o Desestructuracion de arreglos


const personajes = ['Goku','Vegeta','Trunks'];
//metodo anterior
//console.log(personajes[0]);
//console.log(personajes[1]);
//console.log(personajes[2]);

//desestructuracion
const [ , , personaje3 ] = personajes;
console.log ( personaje3 );

///
const retornaArreglo = () =>{
    return ['ABC',123];
}

const [letras , numeros] = retornaArreglo();

console.log(letras,numeros);


//Tarea 
//1. El primer valor del Arr se mmalara nombre
//2. El segundo valor se llamara setNombre
const personaje = ( valor ) =>{
return [ valor, ()=>{ console.log('Hola Mundo')}];
}

const [nombre , setNombre] = personaje( 'Goku' );
console.log(nombre);
setNombre();