// Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. 
let amigo = [];
//console.log(amigo);

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreDelAmigo = inputAmigo.value;
    
    if (!nombreDelAmigo) {
        alert("Por favor, ¡inserta el nombre de un amigo!");
        return;
    }
    amigo.push(nombreDelAmigo);  
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}
//console.log(amigo);
function renderizarAmigos() {
    let listaDeAmigos = document.getElementById("listaAmigos");
    listaDeAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigo[i];
    listaDeAmigos.appendChild(item);
    }
}
//console.log(amigo);




