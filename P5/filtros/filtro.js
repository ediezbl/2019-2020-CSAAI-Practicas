
console.log("Ejecutando JS....");

// constantes
const canvas = document.getElementById('canvas');
const img1 = document.getElementById("imagesrc");
const img2 = document.getElementById("imagesrc2");
const ctx = canvas.getContext('2d');
const deslizadorRojo = document.getElementById('deslizadorRojo');
const deslizadorVerde = document.getElementById("deslizadorVerde");
const deslizadorAzul = document.getElementById("deslizadorAzul");
const izquierda = document.getElementById("izquierda");
const derecha = document.getElementById("derecha");
const color = document.getElementById("colores");
const gris = document.getElementById("grises");
const especular = document.getElementById("especular");
const abajo = document.getElementById("abajo");
const range_value_Rojo = document.getElementById('range_value_Rojo');
const range_value_Verde = document.getElementById("range_value_Verde");
const range_value_Azul = document.getElementById("range_value_Azul");

// variables
var colores = false;
var img = null;
// funciones
function loadImage(src, imagen){
  imagen.onload = function () {
    if(imagen == "imagen1"){
      canvas.width = img1.width;
      canvas.height = img1.height;
      console.log("Imagen lista...");
    } else {
      img2.width = img1.width - 40;
      img2.height = img2.height - 40;
      canvas.width = img1.width;
      canvas.height = img1.width;
      console.log("imagen lista...");
    }
  };
}

function elegirImagen(boton,src){
  boton.onclick = () => {
    if(src == "izquierda"){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      img = img1;
      ctx.drawImage(img, 0, 0);
    } else {
      img = img2;
      ctx.drawImage(img, 0, 0);
    }
  };
}
function elegirFiltro(boton, src){
  boton.onclick = () => {
    if(src == "color"){
      filtroColores();
    } else if (src == "gris"){
      filtroGris();
    } else if (src == "especular"){
      filtroEspecular();
    } else if (src == "abajo"){
      filtroAbajo();
    }
  };
}

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
    if(data[i + 1] > umbral){
      data[i + 1] = umbral;
    }
    if(data[i] > deslizadorRojo.value){
      data[i] = deslizadorRojo.value;
    }
    if(data[i + 2] > deslizadorAzul.value){
      data[i + 2] = deslizadorAzul.value;
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
function filtroColores(){
  colores = true;
  ctx.drawImage(img, 0,0);
  deslizador("rojo", deslizadorRojo, range_value_Rojo);
  deslizador("verde", deslizadorVerde, range_value_Verde);
  deslizador("azul", deslizadorAzul, range_value_Azul);
}

function filtroGris(){
  colores = false;
  if(!colores){
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;
    ctx.drawImage(img, 0,0);
    for (let i = 0; i < data.length; i+=4) {
      brillo = (3 * data[i] + 4 * data[i + 1] + data[i + 2])/8
      data[i] = brillo;
      data[i + 1] = brillo;
      data[i + 2] = brillo;
    }
    ctx.putImageData(imgData, 0, 0);
  }
};

function filtroEspecular(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(2*(canvas.width/2),0);
  ctx.scale(-1,1);
  ctx.drawImage(img, 0, 0);
}

function filtroAbajo(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(0,2*(canvas.height/2));
  ctx.scale(1,-1);
  ctx.drawImage(img, 0, 0);
}

function deslizador(color, deslizador, range_value){
    deslizador.oninput = () => {
      if(colores){
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
        }
      };
}

 loadImage("imagen1", img1);
 loadImage("imagen2", img2);
 elegirImagen(izquierda, "izquierda");
 elegirImagen(derecha, "derecha");
 elegirFiltro(color,"color");
 elegirFiltro(gris,"gris");
 elegirFiltro(especular,"especular");
 elegirFiltro(abajo,"abajo");
console.log("Fin...");
