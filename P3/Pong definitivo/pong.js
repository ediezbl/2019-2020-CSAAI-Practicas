
console.log("Ejecutando JS...");
// Obtener el canvas del DOM
const canvas = document.getElementById("canvas");
// Obtener el contexto
const ctx = canvas.getContext("2d");
var marcador_J1 = 0;
var marcador_J2 = 0;
var rebote = document.getElementById("rebote");
var punto = document.getElementById("punto");
function getRandomInt(min, max){
  // Numero aleatorio que usare en la velocidad
  // y en la posicion inicial al inicial el juego
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomAplication (){
  // valores random despues de marcar el punto
  bola.x = getRandomInt(100, 200);
  bola.y = getRandomInt(200, 300);
  bola.vy = getRandomInt(-3, 3);
  bola.init();
  punto.play();
}
function valRebote () {
  // Valores que va a haber despues de un rebote
  bola.vx = bola.vx * -1;
  bola.vy = getRandomInt(-3, 3);
  rebote.play();
}
function valRebote_y () {
  bola.vy = bola.vy * -1;
  rebote.play();
}
function Punto () {
  // Que pasa cada vez que se marca un punto
  if(bola.x >= canvas.width){
    randomAplication();
    marcador_J1 += 1;
  } else if (bola.x <= 0) {
    randomAplication();
    bola.vx = bola.vx * -1;
    marcador_J2 += 1;
  }
}
function RaqLimite (){
  // Para que las raquetas no se salgan del canvas
    if(raqI.y >= 346){
      raqI.y = 346;
    } else if (raqI.y <= 0){
      raqI.y = 0;
    }
    if(raqD.y >= 357){
      raqD.y = 357;
    } else if (raqD.y <= 0){
      raqD.y = 0;
    }
  }

function Rebotes () {
  // rebote de la pelota
  if(bola.y >= canvas.height || bola.y <= 0){
    valRebote_y();
  }
  // Comprobar si hay colision raqueta izqda + drcha
  // Dentro de la funcion comprobar rebotes (depuracion )
  if(bola.x >= raqI.x && bola.x <= (raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <= (raqI.y + raqI.height)){
          valRebote();
          }
  if(bola.x >= raqD.x && bola.x <= (raqD.x + raqD.width)&&
     bola.y >= raqD.y && bola.y <= (raqD.y + raqD.height)){
       valRebote();
     }
}
function Key_Control () {
  window.onkeydown = (e) => {
    switch (e.key){
      case "a":
      raqI.v = raqI.v_ini;
      break;
      case "q":
      raqI.v = raqI.v_ini * -1;
      break;
      case "p":
      raqD.v = raqD.v_ini * -1;
      break;
      case "l":
      raqD.v = raqD.v_ini;
      break;
      case " ":
      bola.x = getRandomInt(100, 180);
      bola.y = getRandomInt(200, 280);
      bola.init();
      bola.vx = bola.vx_ini;
      bola.vy = getRandomInt(-3, 3);
    }
  }
  // Retrollamada de las teclas cuando dejan de ser pulsadas
  window.onkeyup = (e) => {
    if (e.key == "a" || e.key == "q"){
      raqI.v = 0;
    }
    if (e.key == "p" || e.key == "l"){
      raqD.v = 0;
    }
  }

}
function DrawLet(){
  ctx.beginPath();
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.moveTo(canvas.width/2, 0);
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();
}
function DrawScore() {
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(marcador_J1.toString(), 200, 80);
  ctx.fillText(marcador_J2.toString(), 340, 80);
}
function draw(){
  bola.draw();
  raqI.draw();
  raqD.draw();
  DrawLet();
  DrawScore();
}
function animacion(){
  // Actualiza la velocidad de la raqueta
  raqI.update();
  raqD.update();
  Punto();
  Rebotes();
  RaqLimite();
  //Actualizar la velocidad de la bola
  bola.update();
  // Borrar la pantalla
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Dibujar el nuevo frame
  draw();
}
// "Programa principal"
// Inicializar bola y raquetas
const bola = new Bola(ctx);
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);
// Cambiar las cordenadas de la raqueta derecha
// El resto de cosas son iguales
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();
// Arrancar la animacion
setInterval(() => {
  animacion();
},16);

Key_Control();
