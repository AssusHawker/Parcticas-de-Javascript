//USO DEL ASYNC AWAIT
//CON TRY CATCH 

const getImage = async () => {
  try {
    const apiKey = "4FyY08380xDweUCeLPCSxz8J6Wc0HyRX";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);


  } catch (error) {

    //manejo del error
    console.error(error);

  }
};

getImage();
