
//1. captura de elementos

const startBtn = document.querySelector('.no-me-fio__start');
const subItems = document.querySelectorAll('.no-me-fio__item');

//2.Generacion de evento sobre la variable capturada

startBtn.addEventListener('click', moveItems );



//3.Declaro la funcion que va a suceder cuando haga click en el boton

function moveItems(){
    subItems.forEach(item => {
        item.classList.toggle('play');
    })
}
    

   
    