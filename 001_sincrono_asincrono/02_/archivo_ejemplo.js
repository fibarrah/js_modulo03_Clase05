'use strict'

console.clear();

// ASINCRONIA


// EJEMPLO 001
var btn_asincorniauno = document.querySelector("#btn_async_uno");
btn_asincorniauno.addEventListener('click', function(){

    fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'a=1&b=1'
    })
    .then(function(response){
        console.log('response =', response);
        return response.json();
    })
    .then(function(data){
        console.log('data = ', data);
    })
    .catch(function(err){
        console.log(err);
    })

});

// EJEMPLO 02
var btn_asincorniados = document.querySelector("#btn_async_dos");
btn_asincorniados.addEventListener('click', function(){

    loadIMG('pexels-photo-340152.jpeg','blob', mostrarImagen)

})

// APARATDO FUNCIONES

function loadIMG(url, tipo, funcion_llamada){

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.responseType = tipo;

    xhr.onload = function(){
        funcion_llamada(xhr.response);
    };

    xhr.send();

}

function mostrarImagen(data_img){
    var objURL = URL.createObjectURL(data_img);

    var image = document.createElement('img');
    image.src = objURL;
    document.body.appendChild(image);

}