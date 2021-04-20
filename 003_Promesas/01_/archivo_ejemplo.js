'use strict'

console.clear();


// EVENTOS


// EVENTOS

var btn_segundoEjemplo = document.querySelector("#btn_prueba1");
btn_segundoEjemplo.addEventListener('click', () => {
    
    getUsuarios()
        .then(data => data.json())
        .then(users => {
            printListado(users.data);

            return getUsuarioJanet();
        })
        .then(data => data.json())
        .then(user => {
            mostrarJanet(user.data);

            return miPromesa();
        })
        .then(data => {
            console.log(data);
        })

});


// FUNCIONES

// ******* APARTADO DE LA PROMESA ******

function miPromesa(){

    //  valor JSON
    var miUsuario = {
        nombre: 'miNombre',
        apellidos: 'MisApellidos',
        url: 'https://google.com.mx'
    };

    // REALIZAR MI PROMESA
    return new Promise((resolve, reject) => {

        var miUsario_cadena = JSON.stringify(miUsuario);

        if(typeof miUsario_cadena != 'string'){
            return reject('Error al leer la cadena');
        }else{
            return resolve(miUsario_cadena);
        }

    });

}

// funcion para hacer peticion

function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}

function printListado(usuarios){

    var div_printcontainer = document.querySelector("#usuarios");
    var span_loading = document.querySelector(".Load");

    usuarios.map((user, i) => {
        var nombre_users = document.createElement('h3');
        nombre_users.innerHTML = i + ".- " + user.first_name + " " + user.last_name;
        div_printcontainer.appendChild(nombre_users);

        span_loading.style.display = 'none';
    });


}

// PETICION USUARIO JANET

function getUsuarioJanet(){
    return fetch('https://reqres.in/api/users/2');
}

function mostrarJanet(user){

    var div_printcontainer = document.querySelector("#janet_usuario");
    var span_loading = document.querySelector("#janet_usuario .Load");

    var nombre_janet = document.createElement('h4');
    // CARGAR UN CONTROL DE IMAGEN
    var avatar_janet = document.createElement('img');
    avatar_janet.src = user.avatar;
    avatar_janet.width = '100';

    nombre_janet.innerHTML = user.first_name + " " + user.last_name;

    div_printcontainer.appendChild(nombre_janet);
    div_printcontainer.appendChild(avatar_janet);

    span_loading.style.display = 'none';

}