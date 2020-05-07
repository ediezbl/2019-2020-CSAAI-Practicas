
console.log("Ejecutando JS....");

// constantes
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');
const deslizadorRojo = document.getElementById('deslizadorRojo');
const deslizadorVerde = document.getElementById("deslizadorVerde");
const deslizadorAzul = document.getElementById("deslizadorAzul");
const range_value_Rojo = document.getElementById('range_value_Rojo');
const range_value_Verde = document.getElementById("range_value_Verde");
const range_value_Azul = document.getElementById("range_value_Azul");

// funciones
function filtroRojo(data){
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral){
        data[i] = umbral;
      }
    if(data[i + 1] > deslizadorVerde.value){
      data[i + 1] = deslizadorVerde.value;
    }
    if(data[i + 2] > deslizadorAzul.value){
      data[i + 2] = deslizadorAzul.value;
    }
  }
}

function filtroVerde(data){
  for (let i = 0; i < data.length; i+=4) {
    if(data[i + 2] > umbral){
      data[i + 2] = umbral;
    }
    if(data[i] > deslizadorRojo.value){
      data[i] = deslizadorRojo.value;
    }
    if(data[i] > deslizadorVerde.value){
      data[i + 1] = deslizadorVerde.value;
    }
  }
}

function filtroAzul(data){
  for (let i = 0; i < data.length; i+=4) {
    if(data[i + 2] > umbral){
      data[i + 2] = umbral;
    }
    if(data[i] > deslizadorRojo.value){
      data[i] = deslizadorRojo.value;
    }
    if(data[i] > deslizadorVerde.value){
      data[i + 1] = deslizadorVerde.value;
    }
  }
}

function deslizador(color, deslizador, range_value){
  deslizador.oninput = () => {
    range_value.innerHTML = deslizador.value;
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;
    umbral = deslizador.value;
    // aqui es donde le paso el color
    if(color == "rojo"){
      filtroRojo(data);
    } else if (color == "verde"){
      filtroVerde(data);
    } else if(color == "azul"){
      filtroAzul(data);
    }
      ctx.putImageData(imgData, 0, 0);
    };
}
img.onload = function () {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

deslizador("rojo", deslizadorRojo, range_value_Rojo);
deslizador("verde", deslizadorVerde, range_value_Verde);
deslizador("azul", deslizadorAzul, range_value_Azul);

console.log("Fin...");
