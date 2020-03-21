
console.log("Ejecutando JS...");
// Obtener el display de DOM
const display = document.getElementById("display");
//Mostrar la informacion de la tecla pulsada
window.onkeydown = (e) => {
  display.innerHTML = `Tecla: ${e.key}. Código: ${e.keyCode}`
}

//Liberar la tecla cuando se deje de pulsar
window.onkeyup = (e) => {
  display.innerHTML = "";
}
