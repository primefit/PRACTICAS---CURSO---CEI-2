 
 
 
 var fotosMatrix = [
    { foto: 'morpheo.webp'},
    { foto: 'trinity.jpeg'},
    { foto: 'neo.jpg'}

];





function mostrarFotoSeleccionada() {
 
    const selector = document.getElementById("selectorFotos");
    const fotoContainer = document.getElementById("fotoContainer");

    const indiceSeleccionado = selector.value;

    
    const fotoSeleccionada = fotosMatrix[indiceSeleccionado].foto;

  
    fotoContainer.innerHTML = `<img src="${fotoSeleccionada}" alt="Foto de Matrix">`;
}




