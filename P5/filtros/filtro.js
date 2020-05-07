
console.log("Ejecutando JS....")

const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');
const deslizadorRojo = document.getElementById('deslizadorRojo');
const deslizadorVerde = document.getElementById("deslizadorVerde");
const deslizadorAzul = document.getElementById("deslizadorAzul");
const range_value_Rojo = document.getElementById('range_value_Rojo');
const range_value_Verde = document.getElementById("range_value_Verde");
const range_value_Azul = document.getElementById("range_value_Azul");

img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

deslizadorRojo.oninput = () => {
  range_value_Rojo.innerHTML = deslizadorRojo.value;
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data;
  umbralRojo = deslizadorRojo.value
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbralRojo){
        data[i] = umbralRojo;
      }
    if(data[i + 1] > deslizadorVerde.value){
      data[i + 1] = deslizadorVerde.value;
    }
    if(data[i + 2] > deslizadorAzul.value){
      data[i + 2] = deslizadorAzul.value;
    }
  }
    ctx.putImageData(imgData, 0, 0);
  };

deslizadorVerde.oninput = () => {
  range_value_Verde.innerHTML = deslizadorVerde.value;
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data;
  umbralVerde = deslizadorVerde.value
  for (let i = 0; i < data.length; i+=4) {
    if (data[i + 1] > umbralVerde){
      data[i + 1] = umbralVerde;
    }
    if(data[i] > deslizadorRojo.value){
      data[i] = deslizadorRojo.value;
    }
    if(data[i + 2] > deslizadorAzul.value){
      data[i + 2] = deslizadorAzul.value;
    }
  }
  ctx.putImageData(imgData, 0, 0);
};

deslizadorAzul.oninput = () => {
  range_value_Azul.innerHTML = deslizadorAzul.value;
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data;
  umbralAzul = deslizadorAzul.value
  for (let i = 0; i < data.length; i+=4) {
    if(data[i + 2] > umbralAzul){
      data[i + 2] = deslizadorAzul;
    }
    if(data[i] > deslizadorRojo.value){
      data[i] = deslizadorRojo.value;
    }
    if(data[i] > deslizadorVerde.value){
      data[i + 1] = deslizadorVerde.value;
    }
  }
  ctx.putImageData(imgData, 0, 0);
};

console.log("Fin...");
