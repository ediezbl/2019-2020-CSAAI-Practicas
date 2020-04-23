console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
var video1 = document.getElementById("video1")
video1.width=600;  //-- Tamaño de la pantalla de video
video1.height=300;
video1.poster = "barras.png"

var video2 = document.getElementById("video2");
video2.width = 200;
video2.height = 100;
video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";


var video3 = document.getElementById("video3");
video3.width = 200;
video3.height = 100;
video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";

var video4 = document.getElementById("video4");
video4.width = 200;
video4.height = 100;
video4.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";

var boton1 = document.getElementById("boton1");
var boton2 = document.getElementById("boton2");
var boton3 = document.getElementById("boton3");
