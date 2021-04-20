'use strict'

console.clear();

// FETCH

// http://jsonplaceholder.typicode.com/
// https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc


// EVENTOS

var btn_primerEjemplo = document.querySelector("#btn_prueba1");
btn_primerEjemplo.addEventListener('click', function(){

    var usuarios = [];
    fetch('http://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
            usuarios = data;
            console.log(usuarios);
        });

});


// PRUEBA 002
var btn_segundoEjemplo = document.querySelector("#btn_prueba2");
btn_segundoEjemplo.addEventListener('click', () => {

    var usuarios = [];
    fetch('https://reqres.in/api/users?page=2')
        .then(function(data){
            return data.json();
        })
        .then(data => {
            usuarios = data;
            console.log(usuarios); 
        });

});

// PRUEBA 003
var btn_tercerEjemplo = document.querySelector("#btn_print_list");
btn_tercerEjemplo.addEventListener('click', () => {

    var usuarios = [];

    var div_printcontainer = document.querySelector("#usuarios");
    var span_loading = document.querySelector(".Load");

    fetch('https://reqres.in/api/users?page=2')
        .then(function(data){
            return data.json();
        })
        .then(users => {

            usuarios = users.data;

            usuarios.map((user, i) => {

                var nombre_users = document.createElement('h3');
                nombre_users.innerHTML = i + ".- " + user.first_name + " " + user.last_name;

                div_printcontainer.appendChild(nombre_users);
                span_loading.style.display = 'none';

            })

        })
});