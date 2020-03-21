
console.log("Ejecutando JS...");
// Acceder a los elementos del DOM por orden, devuelve uyn array con todos sus elementos
//Solo hay uno pero hay que indicarle la posicion por eso [0]
body = document.getElementsByTagName('body')[0];

// Funcion de retrollamada, en ella se definira todo lo que
// ocurrira en el programa cada vez que se pulse la tecla de espacio
window.onkeydown = (e) => {
  if(e.key == " "){
    //Accede al css y lo colorea con el color especificado en el
    // fichero css
    body.classList.toggle("color");
  }
}
