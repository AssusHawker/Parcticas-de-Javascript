// Importacion , exportacion y funciones de arreglos comunes 

// export const heroes = [
//     {
//         id: 1,
//         name: 'Batman',
//         owner: 'DC'
//     },
//     {
//         id: 2,
//         name: 'Spiderman',
//         owner: 'Marvel'
//     },
//     {
//         id: 3,
//         name: 'Superman',
//         owner: 'DC'
//     },
//     {
//         id: 4,
//         name: 'Flash',
//         owner: 'DC'
//     },
//     {
//         id: 5,
//         name: 'Wolverine',
//         owner: 'Marvel'
//     },
// ];


import { heroes } from './data/heroes';

//import { heroes } from './data/heroes'

console.log( heroes );

//Ejercicio con FIND
//Buscar con find un id de un personaje
const getHeroeById = (id)=>{
    return heroes.find( personaje => personaje.id === id )
}
console.log( getHeroeById(1) );


//Terea 2, hacer funcionar la seguiente instruccion utilizando Filter
// const getHeroesByOwner = (owner) => heroes.find( personaje => personaje.id === id )


//respuesta:
const getHeroesByOwner = (owner) => heroes.filter( personaje => personaje.owner === owner )

console.log( getHeroesByOwner('Marvel') )
