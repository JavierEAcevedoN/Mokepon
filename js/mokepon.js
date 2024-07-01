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
let inputLasngostelvis
let inputPydos
let inputTucapalma
let botonesAtaques = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let mascotaJugador
let mascotaTipoJugador
let mascotaTipoEnemigo
let mascotaEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0

class Mokepon {
    constructor(nombre, foto, vida, tipo) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo
        this.ataques = []
    }
}

let hipodoge = new Mokepon("Hipodoge", './assets/mokepons_mokepon_hipodoge_attack.png', 5, "AGUA")
hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

let capipepo = new Mokepon("Capipepo", './assets/mokepons_mokepon_capipepo_attack.png', 5, "TIERRA")
capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

let ratigueya = new Mokepon("Ratigueya", './assets/mokepons_mokepon_ratigueya_attack.png', 5, "FUEGO")
ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)

let lasngostelvis = new Mokepon("Langostelvis", './assets/mokepons_mokepon_langostelvis_attack.png', 6, "FUEGO")
lasngostelvis.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
)

let pydos = new Mokepon("Pydos", './assets/mokepons_mokepon_pydos_attack.png', 6, "AGUA")
pydos.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🔥', id: 'boton-fuego'},
)

let tucapalma = new Mokepon("Tucapalma", './assets/mokepons_mokepon_tucapalma_attack.png', 6, "TIERRA")
tucapalma.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

mokepones.push(hipodoge, capipepo, ratigueya, lasngostelvis, pydos, tucapalma)

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
    inputLasngostelvis = document.getElementById('Langostelvis')
    inputPydos = document.getElementById('Pydos')
    inputTucapalma = document.getElementById('Tucapalma')
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
    } else if (inputLasngostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLasngostelvis.id
        mascotaJugador = inputLasngostelvis.id
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else {
        alert('Selecciona una mascota')
        location.reload()
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoriaEnemigo = aleatorio(0,mokepones.length-1) 
    mascotaEnemigo = mokepones[mascotaAleatoriaEnemigo]
    spanMascotaEnemigo.innerHTML = mascotaEnemigo.nombre
    ataqueMokeponEnemigo = mascotaEnemigo.ataques
    mascotaTipoEnemigo = mascotaEnemigo.tipo
    extraerAtaques(mascotaJugador)
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
            mascotaTipoJugador = mokepones[i].tipo
        } 
    }
    comprobarMascota(ataques)
}

function comprobarMascota(ataques) {
    if (mascotaTipoJugador === "FUEGO" && mascotaTipoEnemigo === "TIERRA") {
        ataques.push({nombre: '🔥', id: 'boton-fuego'},)
    } else if (mascotaTipoJugador === "TIERRA" && mascotaTipoEnemigo === "FUEGO") {
        ataqueMokeponEnemigo.push({nombre: '🔥', id: 'boton-fuego'},)
    }
    if (mascotaTipoJugador === "AGUA" && mascotaTipoEnemigo === "FUEGO") {
        ataques.push({nombre: '💧', id: 'boton-agua'},)
    } else if (mascotaTipoJugador === "FUEGO" && mascotaTipoEnemigo === "AGUA") {
        ataqueMokeponEnemigo.push({nombre: '💧', id: 'boton-agua'},)
    }
    if (mascotaTipoJugador === "TIERRA" && mascotaTipoEnemigo === "AGUA") {
        ataques.push({nombre: '🌱', id: 'boton-tierra'},)
    } else if (mascotaTipoJugador === "AGUA" && mascotaTipoEnemigo === "TIERRA") {
        ataqueMokeponEnemigo.push({nombre: '🌱', id: 'boton-tierra'},)
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
    botonesAtaques = document.querySelectorAll('.BAtaque')
    secuenciaAtaque()
}

function secuenciaAtaque() {
    botonesAtaques.forEach((boton) => {
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

function seleccionarAtaqueEnemigo() {
    let ataqueEnemigoAleatorio = aleatorio(0, ataqueMokeponEnemigo.length-1)
    let ataqueSeleccionado = ataqueMokeponEnemigo[ataqueEnemigoAleatorio].nombre
    if (ataqueSeleccionado === '🔥') {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueSeleccionado === '💧') {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }    
    ataqueMokeponEnemigo.splice(ataqueEnemigoAleatorio,1)
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
    contenedorAtaques.style.display = 'none'
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