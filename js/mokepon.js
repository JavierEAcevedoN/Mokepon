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

const seccionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

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
let mascotaJugadorObjeto
let mascotaTipoJugador
let mascotaTipoEnemigo
let mascotaEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
let AlturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoMapa = 800

if (anchoDelMapa > anchoMaximoMapa) {
    anchoDelMapa = anchoMaximoMapa - 20
}

AlturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = AlturaQueBuscamos

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)    
}

class Mokepon {
    constructor(nombre, foto, vida, tipo, fotoMapa = foto) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo
        this.ataques = []
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
        // hitbox
        lienzo.strokeRect(
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let hipodoge = new Mokepon("Hipodoge", './assets/mokepons_mokepon_hipodoge_attack.png', 5, "AGUA", './assets/hipodoge.png')
hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)
let hipodogeEnemigo = new Mokepon("Hipodoge", './assets/mokepons_mokepon_hipodoge_attack.png', 5, "AGUA", './assets/hipodoge.png')
hipodogeEnemigo.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

let capipepo = new Mokepon("Capipepo", './assets/mokepons_mokepon_capipepo_attack.png', 5, "TIERRA", './assets/capipepo.png')
capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)
let capipepoEnemigo = new Mokepon("Capipepo", './assets/mokepons_mokepon_capipepo_attack.png', 5, "TIERRA", './assets/capipepo.png')
capipepoEnemigo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

let ratigueya = new Mokepon("Ratigueya", './assets/mokepons_mokepon_ratigueya_attack.png', 5, "FUEGO", './assets/ratigueya.png')
ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)
let ratigueyaEnemigo = new Mokepon("Ratigueya", './assets/mokepons_mokepon_ratigueya_attack.png', 5, "FUEGO", './assets/ratigueya.png')
ratigueyaEnemigo.ataques.push(
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
let lasngostelvisEnemigo = new Mokepon("Langostelvis", './assets/mokepons_mokepon_langostelvis_attack.png', 6, "FUEGO", this.foto)
lasngostelvisEnemigo.ataques.push(
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
let pydosEnemigo = new Mokepon("Pydos", './assets/mokepons_mokepon_pydos_attack.png', 6, "AGUA",  this.foto)
pydosEnemigo.ataques.push(
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
let tucapalmaEnemigo = new Mokepon("Tucapalma", './assets/mokepons_mokepon_tucapalma_attack.png', 6, "TIERRA", this.foto)
tucapalmaEnemigo.ataques.push(
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
    seccionVerMapa.style.display = 'none'
    seccionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
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
        reiniciarJuego()
    }

    seccionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function reiniciarJuego() {
    location.reload()
}

function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota()
    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMovmiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        } 
    }
}

function pintarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    lasngostelvisEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()

    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(lasngostelvisEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(tucapalmaEnemigo)
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.ancho

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const izquierdaMascota = mascotaJugadorObjeto.x
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho

    if (abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
        ) {
        return;
    }

    detenerMovmiento()
    clearInterval(intervalo)
    seleccionarMascotaEnemigo(enemigo)
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverPersonajeArriba()            
            break
        case 'ArrowDown':
            moverPersonajeAbajo()
            break
        case 'ArrowLeft':
            moverPersonajeIzquierda()
            break
        case 'ArrowRight':
            moverPersonajeDerecha()
            break
        default:
            break
    }
}

function moverPersonajeArriba() {
mascotaJugadorObjeto.velocidadY = - 5  
}

function moverPersonajeAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
}

function moverPersonajeIzquierda() {
    mascotaJugadorObjeto.velocidadX = - 5 
}

function moverPersonajeDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}

function detenerMovmiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function seleccionarMascotaEnemigo(mascotaEnemigo) {
    seccionVerMapa.style.display = 'none'
    seccionSeleccionarAtaque.style.display = 'flex'

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

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje()
        } else if ((ataqueJugador[index] == 'FUEGO' && ataqueEnemigo[index] == 'TIERRA') || (ataqueJugador[index] == 'AGUA' && ataqueEnemigo[index] == 'FUEGO') || (ataqueJugador[index] == 'TIERRA' && ataqueEnemigo[index] == 'AGUA')) {
            indexAmbosOponentes(index, index)
            crearMensaje()
            victoriasJugador++
            spanVictoriasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje()
            victoriasEnemigo++
            spanVictoriasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    contenedorAtaques.style.display = 'none'

    revisarVictorias()
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
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

function crearMensaje() {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    seccionMensajes.innerHTML = resultadoFinal
    seccionReiniciar.style.display = 'block'
}

window.addEventListener('load', iniciarJuego)