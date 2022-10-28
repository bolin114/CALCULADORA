//Variables que se usaran para la impresion
var numero_1;
var numero_2;
var operacion;

function init(){
    // alert("Hola mundo");
    //Variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //Eventos
    uno.onclick = function(e){ //Cuando presionen el boton uno hara que se muestre en la pantallita, para todos los numeros
        //hara que la pantalla de resultados sea igual al que ya tenia + el numero 1, eso es igual con los demas numeros
        resultado.textContent = resultado.textContent  + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent  + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent  + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent  + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent  + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent  + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent  + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent  + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent  + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent  + "0";
    }
    reset.onclick = function(e){
        resetear(); /*Limpia todo*/
    }
    suma.onclick = function(e){
        numero_1 = resultado.textContent; /*Captura el dato y se guarda en la variable num_1*/
        operacion = "+"; /*Se guarda en una variable el operador seleccionado*/
        limpiar(); /*Limpia la pantalla para evitar el anomtonamiento de los numeros*/
    }
    resta.onclick = function(e){
        numero_1 = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        numero_1 = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        numero_1 = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        numero_2 = resultado.textContent; /*se guarda el numero 2 en la variable num_2*/
        resolver(); /*Cuando le de al igual llama la funcion para hacer la operacion*/
    }
}

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    numero_1 = 0;
    numero_2 = 0;
    operacion = "";
}

function resolver(){
    /*res es la variable donde se guardara el resultado de la operacion*/
    var res = 0;
    /*Depeende del boton que presione se hara la operacion con los 2 numeroq que tenga*/
    switch(operacion){
      case "+":
        res = parseFloat(numero_1) + parseFloat(numero_2); /*Hace la operacion de tipo flotante*/
        break;
      case "-":
          res = parseFloat(numero_1) - parseFloat(numero_2);
          break;
      case "*":
        res = parseFloat(numero_1) * parseFloat(numero_2);
        break;
      case "/":
        res = parseFloat(numero_1) / parseFloat(numero_2);
        break;
    }
    resetear();
    resultado.textContent = res; /*Da el resultado de la operacion, deontro del panel*/
  }