
// videos
const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");
const video4 = document.getElementById("video4");

// botones
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const normal = document.getElementById("normal");
const auto = document.getElementById("auto");
const loop = document.getElementById("loop");
const noLoop = document.getElementById("noloop");

// variables
var normalState = false;
var modeLoop = false;
var num_vid = 1;
var auto_interval;
var loop_interval;

// funciones
function obtain_video_parameters(video, width, height){
  video.width = width;
  video.height = height;
  if(video == video1){
    video.poster = "barras.png";
  } else if (video == video2){
    video.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4" + "#t=0,10";
  } else if (video == video3){
    video.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4" + "#t=0,10";
  } else {
    video.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4" + "#t=0,10";
  }
}

function update_videos(video1,video2){
  video1.src = video2.src;
  video1.currentTime = video2.currentTime;
  video1.play();
}

function click_Botton(boton, video1, video2){
  boton.onclick = () => {
    if(normalState == true){
      update_videos(video1,video2);
    }
  };
}

function automatico(){
    if(num_vid == 1){
      update_videos(video1,video2);
      num_vid += 1;
    } else if (num_vid == 2){
      update_videos(video1,video3);
      num_vid += 1;
    } else {
      update_videos(video1,video4);
      num_vid = 1;
    }
  }

function loopLogic() {
    if (video1.currentTime > 5){
        video1.currentTime = 0;
      }
}

// Programa principal
obtain_video_parameters(video1, 600, 300);
obtain_video_parameters(video2, 200, 100);
obtain_video_parameters(video3, 200, 100);
obtain_video_parameters(video4, 200, 100);

click_Botton(boton1, video1, video2);
click_Botton(boton2, video1, video3);
click_Botton(boton3, video1, video4);

normal.onclick = () => {
  if(auto_interval != undefined){
    clearInterval(auto_interval);
    video1.src = null;
  }
  video2.play();
  video3.play();
  video4.play();
  normalState = true;
};

auto.onclick = () => {
  modeAuto = !normalState
  if(modeAuto){
    auto_interval = setInterval(function() {automatico()},2000);
    normalState = true;
    console.log(normalState);
  }
};

loop.onclick = () => {
  modeLoop = true;
  loop_interval = setInterval(function() {loopLogic()},20);
};

noLoop.onclick = () => {
  modeLoop = false;
  if(loop_interval != undefined){
    clearInterval(loop_interval);
  }
};
