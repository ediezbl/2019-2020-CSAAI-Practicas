
// JavaScript by Eduardo Diez Blanco

function cleanDisplay(calc){
  //Limpia el display
  calc.display.innerHTML = "0";
  //Aqui limpiaré los operadores
  calc.op1 = null,
  calc.op2 = null;
  calc.operacion = null;
  calc.resultado = null;
}
function operarIguales(calc){
  // Cuando op1 y op2 son iguales
  switch(calc.operacion){
    case "+":
      calc.resultado = Number(calc.op1) + Number(calc.op1);
    break;
    case "-":
      calc.resultado = Number(calc.op1) - Number(calc.op1);
    break;
    case "x":
      calc.resultado = Number(calc.op1) * Number(calc.op1);
    break;
    case "/":
      calc.resultado = Number(calc.op1) / Number(calc.op1);
    break;
  }
  calc.display.innerHTML = calc.resultado;
}
function operando(calc){
  //Operando la calculadora
  switch(calc.operacion){
    case "+":
      calc.resultado = Number(calc.op1) + Number(calc.op2);
    break;
    case "-":
        calc.resultado = Number(calc.op1) - Number(calc.op2);
    break;
    case "x":
      calc.resultado = Number(calc.op1) * Number(calc.op2);
    break;
    case "/":
      calc.resultado = Number(calc.op1) / Number(calc.op2);
    break;
  }
  calc.display.innerHTML = calc.resultado;
}
function operar(calc){
  // Funcion para indicar operaciones se van a realizar
  if(calc.op2 == ""){
    operarIguales(calc);
  } else {
    operando(calc);
  }
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
      if(calc.display.innerHTML == "0"){
        alert("Primero introduce un numero");
        cleanDisplay(calc);
      } else {
        calc.operacion = value;
        console.log(calc.operacion);
        calc.op1 = calc.display.innerHTML.split(value)[0];
        calc.display.innerHTML += value;
      }
      break;
      case "=":
        if(calc.display.innerHTML == "0"){
          alert("Primero introduce un numero");
          cleanDisplay(calc);
        } else {
          calc.op2= calc.display.innerHTML.split(value)[0].split(calc.op1)[1].replace(calc.operacion, "");
          console.log(calc.operacion);
          operar(calc);
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
      display: document.getElementById("display"),
      botones: document.getElementsByClassName("button"),
      op1: null,
      op2: null,
      operacion: null,
      resultado: null,
    }
      clickButtons(calc);
  }
