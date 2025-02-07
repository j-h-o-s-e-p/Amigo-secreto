// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
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
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo(){
    let indiceRamdom = Math.floor(Math.random() * amigos.length);
    let nombreAmigo = amigos[indiceRamdom];
    document.getElementById("resultado").innerHTML = nombreAmigo;
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

