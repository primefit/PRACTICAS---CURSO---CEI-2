
//1.CAPTURAR ELEMENTOS 

const poster = document.querySelector(".wally__poster");

const wally = document.querySelector(".wally");


//2 CREAR FUNCIONES CUANDO HAGA CLICK

function mensajeError(){
    console.log("Ahi no esta Wally");
}

//CREAR EVENTO

poster.addEventListener('click', mensajeError);

//CREAR FUNCION QUE VA A ACTUAR CUANDO HAGA CLICK

function mensajeAcierto(e){
    e.stopPropagation();  //PARA QUE NO SALGA X2 EL MENSAJE
   
    const coordenadas = [e.pageX, e.pageY];
    coordenadas.push("Enhorabuena ahi esta Wally");
    console.log("Enhorabuena ahi esta Wally");

    const mensajeFinal = `${coordenadas[2]} tus coordenadas son {coordenadas[0]}, ${coordenadas[1]}`;
    console.log(mensajeFinal);
    
}


//CREAR EVENTO
wally.addEventListener('click', mensajeAcierto);