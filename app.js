// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    // Validar que el nombre solo contenga letras y espacios
    if (!/^[a-zA-Z\s]+$/.test(nombreAmigo)) {
        alert("Por favor, ingrese solo letras y espacios.");
        return;
    }

    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = '';
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let listItem = document.createElement('li');
        listItem.textContent = amigo;
        lista.appendChild(listItem);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. ¡Añade algunos!');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}