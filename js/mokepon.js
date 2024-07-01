const seccionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const seccionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const seccionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVictoriasJugador = document.getElementById('victorias-jugador')
const spanVictoriasEnemigo = document.getElementById('victorias-enemigo')

const seccionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorAtaques = document.getElementById('contenedor-ataques')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let opcionDeAtaques
let ataqueMokeponEnemigo
let inputHipodoge
let inputCapipepo
let inputRatigueya
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let mascotaJugador
let victoriasJugador = 0
let victoriasEnemigo = 0
// agregar la propiedad de tipo, para que dependiendo de la mascota que se elija, si es mas fuete que el oponente, tiene una ventaja
class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", './assets/mokepons_mokepon_hipodoge_attack.webp', 5)

let capipepo = new Mokepon("Capipepo", './assets/mokepons_mokepon_capipepo_attack.webp', 5)

let ratigueya = new Mokepon("Ratigueya", './assets/mokepons_mokepon_ratigueya_attack.webp', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
)

ratigueya.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

function iniciarJuego() {
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota"  id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
    })
    seccionSeleccionarAtaque.style.display = 'none'
    seccionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    seccionSeleccionarAtaque.style.display = 'flex'
    seccionSeleccionarMascota.style.display = 'none'
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        } 
    }
    mostrarAtques(ataques)
}

function mostrarAtques(ataques) {
    ataques.forEach((ataque) => {
        opcionDeAtaques = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += opcionDeAtaques
    })
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.firstChild.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#a94258'
                boton.disabled = true
            } else if (e.target.firstChild.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#a94258'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#a94258'
                boton.disabled = true
            }
            seleccionarAtaqueEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = aleatorio(0,mokepones.length-1) 
    spanMascotaEnemigo.innerHTML= mokepones[mascotaEnemigo].nombre
    ataqueMokeponEnemigo = mokepones[mascotaEnemigo].ataques
    secuenciaAtaque()
}

function seleccionarAtaqueEnemigo() {
    // cambiar el atque dependiendo de lo que eliga el enemigo
    let ataqueEnemigoAleatorio = aleatorio(0, ataqueMokeponEnemigo.length-1)
    if (ataqueEnemigoAleatorio == 0 || ataqueEnemigoAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueEnemigoAleatorio == 3 || ataqueEnemigoAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje('EMPATE 🤼‍♂️')
        } else if ((ataqueJugador[index] == 'FUEGO' && ataqueEnemigo[index] == 'TIERRA') || (ataqueJugador[index] == 'AGUA' && ataqueEnemigo[index] == 'FUEGO') || (ataqueJugador[index] == 'TIERRA' && ataqueEnemigo[index] == 'AGUA')) {
            indexAmbosOponentes(index, index)
            crearMensaje('GANASTE 🎉')
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje('PERDISTE 💀')
            victoriasEnemigo++
            spanVictoriasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVictorias()
}

function revisarVictorias() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("EMPATE 🤼‍♂️🤼‍♂️🤼‍♂️🤼‍♂️🤼‍♂️🤼‍♂️🤼‍♂️")
    } else  if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("GANASTE 🎉🎉🎉🎉🎉🎉🎉")
    } else {
        crearMensajeFinal("PERDISTE 💀💀💀💀💀💀💀")
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    seccionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    seccionMensajes.innerHTML = resultadoFinal
    seccionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)    
}

window.addEventListener('load', iniciarJuego)