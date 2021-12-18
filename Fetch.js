//Fetch que trae una imagen al azar de la web de giphy y la muestra en pantalla 
const apiKey = '4FyY08380xDweUCeLPCSxz8J6Wc0HyRX';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

//promesa encadenada
peticion
  .then(resp =>resp.json())
  .then(({ data }) =>{ 
  //console.log(data.images.original.url)
  const { url } = data.images.original;
  const img = document.createElement('img');
  img.src = url;

  document.body.append( img );


})

.catch( console.warn )
