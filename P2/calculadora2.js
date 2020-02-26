function cleanDisplay(calc){
  //Limpia el display
  calc.display.innerHTML = "0";
  //Aqui limpiaré los operadores
  calc.op1 = null;
  calc.op2 = null;
  calc.operacion = null;
}
function accionBotones(value, calc){
  // Defino lo que va a pasar una vez se clicken los botones
  switch(value){
    case "C":
      cleanDisplay(calc);
      break;
    case "/":
    case "x":
    case "+":
    case "-":
      if(calc.display.innerHTML == 0){
        alert("Primero introduce un numero");
        cleanDisplay(calc);
      } else {
        calc.op1 = calc.display.innerHTML.split(value)[0];
        calc.display.innerHTML += value;
      }
      break;
    default:
        if(calc.display.innerHTML == "0"){
          calc.display.innerHTML = calc.display.innerHTML.replace("0",value);
        } else {
          calc.display.innerHTML += value;
        }
        break;
      }
}
function clickButtons(calc){
    for(i = 0; i < calc.botones.length; i++){
        calc.botones[i].onclick = (ev) => {
        accionBotones(ev.target.value, calc);
      }
    }
  }
  function main(){
    var calc = {
      // display
      display: document.getElementById("display"),
      botones: document.getElementsByClassName("button"),
      op1: null,
      op2: null,
      operacion: null,
    }
      clickButtons(calc);
  }
