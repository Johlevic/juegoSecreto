let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10 + 1);
    console.log(listaNumerosSorteados);

    console.log("Número generado:", numeroGenerado);
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function verificarIntento() {
    const numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextElemento('p', `¡Acertaste el valor! en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').disabled = false;
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextElemento('p', 'El número es menor');
        } else {
            asignarTextElemento('p', 'El número es mayor');
        }

        intentos++;
        limpiarCampoEntrada();
    }
}

function reiniciarJuego() {
    listaNumerosSorteados = [];
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    limpiarCampoEntrada();
    asignarTextElemento('p', 'Indica el número entre 1 y 10');
    document.getElementById('reiniciar').disabled = true;
}

function limpiarCampoEntrada() {
    document.querySelector('#valorUsuario').value = '';
}

function asignarTextElemento(elemento, texto) {
    const elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

// Configuración inicial
asignarTextElemento('h1', 'Juego del número secreto');
asignarTextElemento('p', 'Indica el número entre 1 y 10');

