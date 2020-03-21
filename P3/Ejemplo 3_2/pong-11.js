// Rebote en la pared izquierda
// Pintar elementos en el canvas
console.log('Ejecutando JS...');
//Obtener el canvas del DOM
const canvas = document.getElementById('canvas');
// Añadirle el contexto para poder pintar
const ctx = canvas.getContext("2d");

let bola_x = 50; //Posicion inicial de la bola en el eje x
let bola_y = 200; //Posicion inicial de la bola en el eje y
let raqI_x = 50;
let raqI_y = 100;
let raqI_v = 0;
let  bola_vx = 0; // Velocidad inicial de la bola en el eje x
let  bola_vy = 0; // Velocidad inicial de la bola en el eje y
var audio = document.getElementById("audio");
function draw(){
 // Dibujo la bola
  ctx.beginPath(); // Para empezar a dibujar
  ctx.fillStyle = 'white'; // Define el color que va a tener la bolita
  //  En este orden x, y, anchura y altura
  // ctx.rect es una funcion que dibujara el cuadrado que hace de bolita
  ctx.rect(bola_x, bola_y, 10, 10);
  ctx.fill(); // Junta todo y dibuja

  //Dibujando las raquetas
  ctx.beginPath(); //Para empezar a dibujar de nuevo

  // Como son rectangulos todas se van a dibujar con ctx.rect
  // x, y , anchura y altura
  ctx.rect(raqI_x, raqI_y, 10, 40); // Izquierda
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
  bola_x += bola_vx;
  bola_y += bola_vy;
  raqI_y += raqI_v;
  // Establecer una condicion para cuando la bola_x
  // sea mayor que la anchura del canvas esta misma rebote
  // Rebote en la raqueta izqda
  if(bola_x >= canvas.width || bola_x <= 0){
    bola_vx = bola_vx * -1;
    audio.play()
  } else if (bola_y >= canvas.height|| bola_y <= 0) {
      bola_vy = bola_vy * -1;
      audio.play()
  }

  // Para animar hay que borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //LLamar a la funcion draw para dibujar el siguiente frame
  draw();
  console.log("Frame!");
}

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
    bola_x = 50;
    bola_y = 200;
    bola_vx = 3;
    bola_vy = 3;
    break;
    case "a":
    raqI_v = 3;
    break;
    case "q":
    raqI_v = -3;
  }
}
window.onkeyup = (e) => {
  if(e.key == "a" || e.key == "q"){
    // Quitar la velocidad de la raqueta
    raqI_v = 0;
  }
}
