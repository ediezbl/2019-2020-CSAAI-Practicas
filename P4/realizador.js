
// video parameters
const video1 = document.getElementById("video1");
video1.width = 600;
video1.height = 300;
video1.poster = "barras.png";
const video2 = document.getElementById("video2");
video2.width = 200;
video2.height = 100;
video2.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4" + "#t=0,10";
const video3 = document.getElementById("video3");
video3.width = 200;
video3.height = 100;
video3.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4" + "#t=0,10";
const video4 = document.getElementById("video4");
video4.width = 200;
video4.height = 100;
video4.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4" + "#t=0,10";
// variables
var normalState = false;
var num_vid = 1;
// botones
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const normal = document.getElementById("normal");
const auto = document.getElementById("auto");

function automatico(){
    if(num_vid == 1){
      video1.src = video2.src;
      video1.currentTime = video2.currentTime;
      video1.play();
      num_vid += 1;
    } else if (num_vid == 2){
      video1.src = video3.src;
      video1.currentTime = video3.currentTime;
      video1.play();
      num_vid += 1;
    } else {
      video1.src = video4.src;
      video1.currentTime = video4.currentTime;
      video1.play();
      num_vid = 1;
    }
  }
// funcionamiento de botones
boton1.onclick = () => {
  if(normalState == true){
    video1.src = video2.src;
    video1.currentTime = video2.currentTime;
    video1.play();
  }
};
boton2.onclick = () => {
  if(normalState == true){
    video1.src = video3.src;
    video1.currentTime = video3.currentTime;
    video1.play();
  }
};
boton3.onclick = () => {
  if(normalState == true){
    video1.src = video4.src;
    video1.currentTime = video4.currentTime;
    video1.play();
  }
};
normal.onclick = () => {
  clearInterval(win);
  video1.src = null;
  video2.play();
  video3.play();
  video4.play();
  normalState = true;
};

auto.onclick = () => {
  modeAuto = !normalState
  if(modeAuto){
    win = setInterval(function() {automatico()},2000);
    normalState = true;
    console.log(normalState);
  }
};
