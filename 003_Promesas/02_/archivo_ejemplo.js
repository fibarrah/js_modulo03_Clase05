'use strict'

console.clear();

// OTRO DE PROMESAS

function getComentarios(){

    return new Promise(function(resolve,reject){

        var request_ = new XMLHttpRequest();
        request_.open('GET','https://jsonplaceholder.typicode.com/posts');

        request_.onload = function(){

            if(request_.status == 200){
                resolve(JSON.parse(request_.response));
            }else{
                reject(); // ERROR
            }

        };

        request_.send();

    });

}

var miPromesas = [

    getComentarios(),
    getComentarios()

];

Promise.all(miPromesas).then(resultado => {
    console.log(resultado);
})
