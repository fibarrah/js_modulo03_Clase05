'use strict'

console.clear();

// PROGRAMACION FUNCIONAL

// EVENTOS

var btn_porDefecto = document.querySelector("#btn_pordefecto");
btn_porDefecto.addEventListener('click', () => {

    byDefect();

});

var btn_porPGRFUNC = document.querySelector("#btn_pgrfuncional");
btn_porPGRFUNC.addEventListener('click', () => {

    usingCompose();

});

// FUNCIONES

function byDefect(){

    const misNumeros = [1, 2, 3, 4];
    var AlDoble = [];

    for(var i = 0; i < misNumeros.length; i++){
        AlDoble.push(misNumeros[i] * 2);
    }

    console.log(AlDoble); // >> 2, 4, 6, 8

}

// PROGRAMACION FUNCIONAL 
function usingCompose(){
    var numeros = [1, 2, 3, 4];
    var AlDoble = numeros.map(n => n * 2);

    console.log(AlDoble);
}