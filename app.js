//Amigo Secreto
let amigos =[];
let lista = document.getElementById("listaAmigos");

function agregarAmigo(){
    let amigo=document.getElementById('amigo').value;
    let amigom=amigo.toLowerCase();
    console.log(amigom);
    if (amigo.trim() == ""){
        alert('Inserte un nombre');    
    }
    else{
        if(amigos.includes(amigom)){
        alert('Ya has ingresado a ese amigo, ingresa otro');
        }
        else{
        amigos.push(amigom);
        console.log(amigos);
        document.getElementById("amigo").value = "";
        actualizarListaAmigos();
        }
    }
    return;  
}

function actualizarListaAmigos() {
    //let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    for (let i = 0; i < amigos.length; i++) {
      let elemento = document.createElement("li");
      elemento.textContent = amigos[i];
      lista.appendChild(elemento);
    }
    return;  
}

function sortearAmigo() {
    if (amigos.length!==0){
        let indice=(Math.floor(Math.random()*amigos.length)+1)-1;
        console.log(indice);
        let resultado=amigos[indice];
        let texto=document.getElementById("resultado");
        texto.innerHTML=`El amigo secreto es ${resultado}. Ingrese otra lista de amigos para seguir jugando.`;
    }
    else{
        alert('Por favor, inserte un nombre');
    }
    //Condiciones iniciales para jugar nuevamente. Se recomienda agregar un botón "Reiniciar Juego" 
    amigos=[];
    lista.innerHTML="";
    return;
}
