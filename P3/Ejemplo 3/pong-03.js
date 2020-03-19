// Pintar elementos en el canvas
console.log('Ejecutando JS...');
//Obtener el canvas del DOM
const canvas = document.getElementById('canvas');
// Añadirle el contexto para poder pintar
const ctx = canvas.getContext("2d");
 // Dibujo la bola

ctx.beginPath(); // Para empezar a dibujar
ctx.fillStyle = 'white'; // Define el color que va a tener la bolita

//  En este orden x, y, anchura y altura
// ctx.rect es una funcion que dibujara el cuadrado que hace de bolita
ctx.rect(100, 200, 10, 10);
ctx.fill(); // Junta todo y dibuja

//Dibujando las raquetas
ctx.beginPath(); //Para empezar a dibujar de nuevo

// Como son rectangulos todas se van a dibujar con ctx.rect
// x, y , anchura y altura
ctx.rect(50, 100, 10, 40); // Izquierda
ctx.rect(550, 300, 10, 40); // Derecha

// Pintar todo de nuevo
ctx.fill();
