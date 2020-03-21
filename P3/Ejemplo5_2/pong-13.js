
const bola = {
  size : 10, // tamaño de la bola
  x_ini : 100, // Posicion inicial de la bola eje x
  y_ini : 200, // Posicion inicial de la bola eje y
  x : 0, // Posicion generica de la bola eje x
  y : 0, // Posicion generica de la bola eje y
  vx_ini : 3, // Velocidad inicial de la bola eje x
  vy_ini : 3, // Velocidad inicial de la bola eje y
  vx : 0, // velocidad generica de la bola eje x
  vy : 0, // velocidad generica de la bola eje y
}

const raqI = {
  // Tamaños de la raqueta
  width: 10,
  height: 40,
  // Posiciones iniciales
  x_ini : 50,
  y_ini : 100,
  v_ini: 3, // velocidad inicial
  v : 0 // velocidad variable
}
function bola_draw(){
  //Dibuja la bola
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.rect(bola.x, bola.y, bola.size, bola.size);
  ctx.fill();
}
function bola_init(){
  // Bola a su posicion inicial
  bola.x = bola.x_ini;
  bola.y = bola.y_ini;
  bola.vx = bola.vx_ini;
  bola.vy = bola.vy_ini;
}
function bola_update(){
  bola.x += bola.vx;
  bola.y += bola.vy;
}
function raqI_init(){
  raqI.x = raqI.x_ini;
  raqI.y = raqI.y_ini;
}
function raqI_update(){
  raqI.y += raqI.v;
}
function raqI_draw(){
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.rect(raqI.x, raqI.y, raqI.width, raqI.height);
  ctx.fill();
}
// Rebote en la pared izquierda
// Pintar elementos en el canvas
console.log('Ejecutando JS...');
//Obtener el canvas del DOM
const canvas = document.getElementById('canvas');
// Añadirle el contexto para poder pintar
const ctx = canvas.getContext("2d");

var audio = document.getElementById("audio");
function draw(){
  bola_draw();
  raqI_draw();
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.rect(550, 300, 10, 40); // Derecha

  // Pintar todo de nuevo
  ctx.fill();

  // Dibujando la linea discontinua
  ctx.beginPath();
  ctx.setLineDash([10, 10]); //Distancia y separacion entre trazos
  ctx.strokeStyle = 'white'; //Define el estilo de la linea discontinua
  ctx.lineWidth = 2; //Define la anchura de la linea discontinua
  ctx.moveTo(canvas.width/2, 0);
  // Dibujar la linea hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  // Dibujar el marcador
  ctx.font = "100px Arial"; // Tamaño de la fuente
  ctx.fillStyle = "white"; // Estilo de la letra
  ctx.fillText("0", 200, 80); // posicion izquierda
  ctx.fillText("0", 340, 80); // posicion derecha

}

// Bucle principal de animacion
function animacion(){
  // Meter la variable bola_x en animacion es lo que hace
  // que haya animacion ya que funciona en "bucle"
  raqI_update();
  // Establecer una condicion para cuando la bola_x
  // sea mayor que la anchura del canvas esta misma rebote
  // Rebote en la raqueta izqda
  if(bola.x >= canvas.width || bola.x <= 0){
    bola.vx = bola.vx * -1;
    audio.play()
  } else if (bola.y >= canvas.height|| bola.y <= 0) {
      bola.vy = bola.vy * -1;
      audio.play()
  }
// Colision con la raqueta izquierda
if(bola.x >= raqI.x && bola.x <= (raqI.x + 10)
    && bola.y >= raqI.y && bola.y <= (raqI.y +40)){
      bola.vx = bola.vx * -1;
      bola.vy = bola.vy * -1;
      audio.play();
    }
    console.log(raqI.y)
  if(raqI.y >= canvas.height || raqI.y <= 0){
    raqI.y = raqI.y_ini;
  }
  bola_update();
  // Para animar hay que borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //LLamar a la funcion draw para dibujar el siguiente frame
  draw();

}
bola_init();
raqI_init();
// Repetir la funcion de animacion cada cierto tiempo
// con la funcion setInterval
setInterval(() => {
  animacion();
}, 16);
// Obtener el boton del reset del DOM como siempre
const saque = document.getElementById("saque");
// Funcion de retrollamada cada vez que pulso espacio saca
window.onkeydown = (e) => {
  //Establece las condiciones cada vez que se pulse una tecla
  // de momento solo para el espacio
  switch (e.key) {
    case " ":
    bola_init();
    break;
    case "a":
    raqI.v = raqI.v_ini;
    break;
    case "q":
    raqI.v = raqI.v_ini * -1;
  }
}
window.onkeyup = (e) => {
  if(e.key == "a" || e.key == "q"){
    // Quitar la velocidad de la raqueta
    raqI.v = 0;
  }
}
