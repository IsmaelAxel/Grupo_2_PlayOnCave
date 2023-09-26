let ocultarTextoBtn = document.getElementById('ocultarTextoBtn')
let ocultarTexto = document.getElementById('ocultarTexto')
ocultarTextoBtn.addEventListener('click', toggleText)
function toggleText(){
    ocultarTexto.classList.toggle('product__main--infoJuego-mostrar');
    if(ocultarTexto.classList.contains('product__main--infoJuego-mostrar')){
        ocultarTextoBtn.innerHTML = 'LEER MENOS'
    }else{
        ocultarTextoBtn.innerHTML = 'LEER MÁS'
    }
}