//1. USUARIO ELIGE UNA OPCION
        //CAPTURAR RADIO BUTTONS

        //2 USUARIO PULSA EL BOTON ENVIAR RESPUESTA

            //EXTRAIGO VALOR DEL RADIO BUTTON ELEGIDO 
            //EVENTO CLICK
            // EXTRAIGO VALOR DEL RADIO BUTTON ELEGIDO
                //IF: SI EL VALOR ELEGIDO ES IGUAL AL QUE YO DDEFINO COMO CORRECTO PINTO RESULT OK
                //SI NO PINTO RESULT ERROR

        //3. SE PINTA SI ES CORRECT O NO
            //CAPTURAR SLOT PARA RESULTADO
            //PINTAR RESULTADO DEPENDIENDO DEL TIPO DE VALOR ELEGIDO




function verificarRespuesta() {

var respuestas = document.getElementById("respuestas");
var resultadoDiv = document.getElementById("resultado");

var opcionSeleccionada = respuestas.querySelector('input[name="opcion"]:checked');


if (opcionSeleccionada) {
    var respuestaCorrecta = "Messi"; 
    if (opcionSeleccionada.value === respuestaCorrecta) {
        console.log("respuesta correcta");
        resultadoDiv.textContent = "¡Respuesta Correcta!";

    } else {
        console.log("Respuesta Incorrecta");


    }

}
}