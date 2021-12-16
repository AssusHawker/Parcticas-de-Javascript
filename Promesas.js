
const promesa = new Promise( (resolve, reject) => {
     setTimeout( ()=>{
           // console.log( '2 segundos despues' ) 
           resolve();
         },2000)
});

/*
then se ejecuta cuando la promesa salio correcta (resolve)
catch se ejecuta cuando la promesa salio mal (reject)
finally se ejecuta siempre
*/



promesa.then( ()=>{
    console.log('then de la promesa')
} )
