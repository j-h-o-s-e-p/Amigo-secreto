// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    limpiarElemento("resultado");
    let amigo = document.getElementById('amigo').value;
    if(amigo == ""){
        alert('Por favor, inserte un nombre');
    }else{
        amigos.push(amigo);
    }
    console.log(amigos);
    limpiarCaja();
    mostrarLista()
}

function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    limpiarElemento("listaAmigos");
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function limpiarElemento(elemento){
    let muestra = document.getElementById(elemento);
    muestra.innerHTML = "";
}

function sortearAmigo(){
    let indiceRamdom = Math.floor(Math.random() * amigos.length);
    let nombreAmigo = amigos[indiceRamdom];
    document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es : " + nombreAmigo;
    limpiarElemento("listaAmigos");   
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

