'use strict'

console.clear();

// PROGRAMACION FUNCIONAL


// EVENTOS

var btn_funcionPura = document.querySelector("#btn_functionPuras");
btn_funcionPura.addEventListener('click', () => {

    var valOrigen = [3,2];

    console.log(agregarSumaNumeros(valOrigen));
    console.log(agregarSumaNumeros(valOrigen));
    console.log(agregarSumaNumeros(valOrigen));

    console.log(agregarSumaNumerosCorrecta(valOrigen));
    console.log(agregarSumaNumerosCorrecta(valOrigen));
    console.log(agregarSumaNumerosCorrecta(valOrigen));
    
});


// FUNCION IMPURA
function agregarSumaNumeros(arreglo){

    var total = arreglo.reduce((acumulador, valor) => acumulador + valor);
    arreglo.push(total);

    return arreglo;
}

function agregarSumaNumerosCorrecta(arreglo){

    var total = arreglo.reduce((acumulador, valor) => acumulador + valor);
    var resultado = arreglo.concat(total);

    return resultado;
}

