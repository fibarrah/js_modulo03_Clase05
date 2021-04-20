'use strict'

console.clear();

// SINCRONIA


// EVENTOS
var btn_sinc = document.querySelector("#btn_sync");
btn_sinc.addEventListener('click', function(){

    alert("Inicio del evento click");

    var elementoP = document.createElement('p');
    elementoP.textContent = "Parrafo Agregado";
    document.body.appendChild(elementoP);

});