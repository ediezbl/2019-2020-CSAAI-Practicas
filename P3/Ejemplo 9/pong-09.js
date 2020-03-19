// Pintar elementos en el canvas
console.log('Ejecutando JS...');
//Obtener el canvas del DOM
const canvas = document.getElementById('canvas');
// Añadirle el contexto para poder pintar
const ctx = canvas.getContext("2d");

let bola_x = 50; //Posicion inicial de la bola en el eje x
let bola_vx = 0; // Velocidad inicial de la bola
function draw(){
 // Dibujo la bola
  ctx.beginPath(); // Para empezar a dibujar
  ctx.fillStyle = 'white'; // Define el color que va a tener la bolita
  //  En este orden x, y, anchura y altura
  // ctx.rect es una funcion que dibujara el cuadrado que hace de bolita
  ctx.rect(bola_x, 200, 10, 10);
  ctx.fill(); // Junta todo y dibuja

  //Dibujando las raquetas
  ctx.beginPath(); //Para empezar a dibujar de nuevo

  // Como son rectangulos todas se van a dibujar con ctx.rect
  // x, y , anchura y altura
  ctx.rect(50, 100, 10, 40); // Izquierda
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
// Declarar el evento onclick que dira que va a pasar con la bolita
saque.onclick = () => {
  // Incrementar la posicion de la bola_x
  bola_x = 50;
  bola_vx = 3;
  console.log("Saque!");
}
