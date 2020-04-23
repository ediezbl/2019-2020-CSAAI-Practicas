
console.log("Ejecutando JS...");

// Declarando los videos
var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var video3 = document.getElementById("video3");
var video4 = document.getElementById("video4");

// Declarando los botones
var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
var auto = document.getElementById("auto");
var num_vid = 1;
// funcion para obtener los parametros del video
function video_Parameters (video, width, height) {
  video.width = width;
  video.height = height;
  if(video == video1){
    video.poster = "barras.png";
  } else if (video == video2){
    video.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4" + "#t=0,3";
  } else if (video == video3){
    video.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4" + "#t=0,3";
  } else {
    video.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4" + "#t=0,3";
  }
}

// Funcion que definira lo que haran los botones
function click_Botton(boton, video1, video2){
  boton.onclick = () => {
    video1.src = video2.src;
    video1.currentTime = video2.currentTime;
    video1.play();
  };
}

function automatico(video1,video2,video3,video4){
  if(num_vid == 1){
    video1.src = video2.src;
    video1.currentTime = video2.currentTime;
    video1.play();
    num_vid = 2;
  } else if (num_vid == 2){
    video1.src = video3.src;
    video1.currentTime = video3.currentTime;
    video1.play();
    num_vid = 3;
  } else{
    video1.src = video4.src;
    video1.currentTime = video4.currentTime;
    video1.play();
    num_vid = 1;
  }
}
// Obteniendo los parametros del video
video_Parameters(video1, 600, 300);
video_Parameters(video2, 200, 100);
video_Parameters(video3, 200, 100);
video_Parameters(video4, 200, 100);

auto.onclick = () => {
  automatico(video1,video2,video3,video4)
  window.setInterval('automatico(video1,video2,video3,video4)',2000);
};
/* // LLamando a la funcion de click_Botton
click_Botton(boton1, video1, video2);
click_Botton(boton2, video1, video3);
click_Botton(boton3, video1, video4);
*/
