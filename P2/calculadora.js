// JavaScript by Eduardo Diez Blanco

function cleanDisplay(calc){
  //Limpia el display
  calc.display.innerHTML = "0";
  //Aqui limpiaré los operadores
// Eventos, ¿qué va a ocurrir cuando yo pulse los botones?
}
function clickButtons(calc){
  calc.boton9.onclick = () => {
    if(calc.display.innerHTML == "0"){
      calc.display.innerHTML = calc.display.innerHTML.replace("0","9");
    } else {
      let nextNumber = "9";
      calc.display.innerHTML += nextNumber;
    }
  }
  calc.boton8.onclick = () => {
    if(calc.display.innerHTML == "0"){
      calc.display.innerHTML = calc.display.innerHTML.replace("0","8");
    } else {
      let nextNumber = "8";
      calc.display.innerHTML += nextNumber;
    }
  }
  calc.boton7.onclick = () => {
    if(calc.display.innerHTML == "0"){
      calc.display.innerHTML = calc.display.innerHTML.replace("0","7");
    } else {
      let nextNumber = "7";
      calc.display.innerHTML += nextNumber;
    }
  }
  calc.botonC.onclick = () => {
    cleanDisplay(calc);
  }
  calc.botonDiv.onclick = () => {
    if(calc.display.innerHTML == "0"){
      alert("Primero introduce un numero")
      cleanDisplay(calc);
    } else {
      let nextOperator = "/";
      calc.display.innerHTML += nextOperator;
    }
  }
  calc.boton6.onclick = () => {
    if(calc.display.innerHTML == "0"){
      calc.display.innerHTML = calc.display.innerHTML.replace("0","6");
    } else {
      let nextNumber = "6";
      calc.display.innerHTML += nextNumber
    }
  }
  calc.boton5.onclick = () => {
    if(calc.display.innerHTML == "0"){
      calc.display.innerHTML == calc.display.innerHTML.replace("0","5");
    } else {
      let nextNumber = "5";
      calc.display.innerHTML += nextNumber;
    }
  }
  calc.boton4.onclick = () => {
    if(calc.display.innerHTML == "0"){
      calc.display.innerHTML = calc.display.innerHTML.replace("0","4");
    } else {
      let nextNumber = "4";
      calc.display.innerHTML += nextNumber;
    }
  }
  calc.botonMul.onclick = () => {
    if(calc.display.innerHTML == "0"){
      alert("Primero introduce un numero");
      cleanDisplay(calc);
    } else{
      let nextOperator = "x";
      calc.display.innerHTML += nextOperator
    }
  }
}
  function main(){
    var calc = {
      //Cinco primeros botones + display
      display: document.getElementById("display"),
      boton9: document.getElementById("boton9"),
      boton8: document.getElementById("boton8"),
      boton7: document.getElementById("boton7"),
      botonC: document.getElementById("botonC"),
      botonDiv: document.getElementById("botonDiv"),
      // Los segundos cinco botones
      boton6: document.getElementById("boton6"),
      boton5: document.getElementById("boton5"),
      boton4: document.getElementById("boton4"),
      botonMul: document.getElementById("botonMul"),
      botonSum: document.getElementById("botonSum"),
      // Los terceros cinco botones
      boton3: document.getElementById("boton3"),
      boton2: document.getElementById("boton2"),
      boton1: document.getElementById("boton1"),
      botonMenos: document.getElementById("botonMenos"),
      botonIgual: document.getElementById("BotonIgual"),
      //El cero y el punto
      boton0: document.getElementById("boton0"),
      botonPunto: document.getElementById("BotonPunto"),
    }
      clickButtons(calc);
  }
