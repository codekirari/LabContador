//valor inicial
let conteo = 0

//para obtener las referencias de los elementos html con getElement

const contadorElemento = document.getElementById('contador');
const btnIncrementar = document.getElementById('btnIncrementar');
const btnDecrementar = document.getElementById('btnDecrementar');

//funcion para hacer el cambio de valor y color
function actualizarContador(incremento) {
    conteo += incremento;
 // Actualizar el texto en la pantalla
    contadorElemento.textContent = conteo; 
    
    //  cambiar el color cuando llega a 10
    if (conteo >= 10) {
        contadorElemento.classList.add('limite'); //añadiria una clase css para tema de color
    } else {
        contadorElemento.classList.remove('limite'); //aqui eliminaria esa clase css si es menor
    }
}


// agregar el evento 
btnIncrementar.addEventListener('click', function() {
    actualizarContador(1); 
});

btnDecrementar.addEventListener('click', function() {
    actualizarContador(-1);
});