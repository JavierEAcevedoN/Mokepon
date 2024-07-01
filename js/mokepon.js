let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    
    let botonFuego = document.getElementById('boton-fuego')
    let botonAgua = document.getElementById('boton-agua')
    let botonTierra = document.getElementById('boton-tierra')
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if (mascotaEnemigo == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaEnemigo == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (mascotaEnemigo == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    seleccionarAtaqueEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    seleccionarAtaqueEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    seleccionarAtaqueEnemigo()
}

function seleccionarAtaqueEnemigo() {
    let ataqueEnemigoAleatorio = aleatorio(1,3)

    if (ataqueEnemigoAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueEnemigoAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else if (ataqueEnemigoAleatorio == 3) {
        ataqueEnemigo = 'TIERRA'
    }

    battalla()
}

function battalla() {
    let spanAtaqueJugador = document.getElementById('atque-jugador')
    let spanAtaqueEnemigo = document.getElementById('ataque-enemigo')
    let spanResultado = document.getElementById('resultado')
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    spanAtaqueJugador.innerHTML = ataqueJugador
    spanAtaqueEnemigo.innerHTML = ataqueEnemigo

    if (ataqueJugador == ataqueEnemigo) {
        spanResultado.innerHTML = 'EMPATE 🤼‍♂️'
    } else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'AGUA')||(ataqueJugador == 'AGUA' && ataqueEnemigo == 'TIERRA')||(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'FUEGO')) {
        spanResultado.innerHTML = 'GANASTE 🎉'
        spanVidasEnemigo.innerHTML = spanVidasEnemigo.innerHTML - 1
    } else {
        spanResultado.innerHTML = 'PERDISTE 💀'
        spanVidasJugador.innerHTML = spanVidasJugador.innerHTML - 1
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)    
}

window.addEventListener('load', iniciarJuego)