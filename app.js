let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //En caso de que no haya asertado en el intento 
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");  
        }else {
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los número pomedos cerrar el juego
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //si el número generado está en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = " ";
}

function reiniciarJuego(){
    //Necesito re star o (limpiar la caja) el juego 
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //generar el número aleatorio 
   //inicializar el número de intentos
   condicionesIniciales();
    //deshabilitar el botón del nuevo juego
    //Para finalizar, debemos colocar una acción para quitar el atributo
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


