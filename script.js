// papel = 1 - tesoura = 2 - pedra = 3
var texto = document.getElementById('texto')
let pontosJogador = 0
let pontosComputador = 0

function atualizarPlacarJogador(){
    pontosJogador++
    document.getElementById('placarJogador').innerHTML = `Você: ${pontosJogador}`
}
function atualizarPlacarComputador(){
    pontosComputador++
    document.getElementById('placarComputador').innerHTML = `Computador: ${pontosComputador}`
}


function tesoura() {
    let jogo = Math.floor(Math.random() * 3) + 1

    const computadorDiv = document.getElementById('jogadaComputador')
    computadorDiv.innerHTML = ''
    const imgComputador = document.createElement('img')
    imgComputador.style.width = '120px'
    imgComputador.style.height = '120px'

    if (jogo == 1) {
        imgComputador.src = 'img/papel.png'
        computadorDiv.appendChild(imgComputador)
    } else if (jogo == 2) {
        const imgComputador = document.createElement('img')
        imgComputador.src = 'img/tesoura.png'
        imgComputador.style.width = '120px'
        imgComputador.style.height = '120px'
        computadorDiv.appendChild(imgComputador)
    } else {
        imgComputador.src = 'img/pedra.png'
        computadorDiv.appendChild(imgComputador)
    }

    let jogador = 2

    if (jogo == jogador) {
        texto.innerHTML = "EMPATE"
    } else if (jogo == 3) {
        texto.innerHTML = 'VOCÊ PERDEU!'
        atualizarPlacarComputador()
    } else {
        texto.innerHTML = 'VOCÊ VENCEU!'
        atualizarPlacarJogador()
    }

    const jogadorDiv = document.getElementById('jogadaJogador')
    jogadorDiv.innerHTML = ''
    const imgJogador = document.createElement('img')
    imgJogador.src = 'img/tesoura.png'
    imgJogador.style.width = '120px'
    imgJogador.style.height = '120px'
    jogadorDiv.appendChild(imgJogador)
}

function papel() {
    let jogo = Math.floor(Math.random() * 3) + 1

    const computadorDiv = document.getElementById('jogadaComputador')
    computadorDiv.innerHTML = ''
    const imgComputador = document.createElement('img')
    imgComputador.style.width = '120px'
    imgComputador.style.height = '120px'

    if (jogo == 1) {
        imgComputador.src = 'img/papel.png'
        computadorDiv.appendChild(imgComputador)
    } else if (jogo == 2) {
        const imgComputador = document.createElement('img')
        imgComputador.src = 'img/tesoura.png'
        imgComputador.style.width = '120px'
        imgComputador.style.height = '120px'
        computadorDiv.appendChild(imgComputador)
    } else {
        imgComputador.src = 'img/pedra.png'
        computadorDiv.appendChild(imgComputador)
    }

    let jogador = 1

    if (jogo == jogador) {
        texto.innerHTML = "EMPATE"
    } else if (jogo == 2) {
        texto.innerHTML = 'VOCÊ PERDEU!'
        atualizarPlacarComputador()
    } else {
        texto.innerHTML = 'VOCÊ VENCEU!'
        atualizarPlacarJogador()
    }

    const jogadorDiv = document.getElementById('jogadaJogador')
    jogadorDiv.innerHTML = ''
    const imgJogador = document.createElement('img')
    imgJogador.src = 'img/papel.png'
    imgJogador.style.width = '120px'
    imgJogador.style.height = '120px'
    jogadorDiv.appendChild(imgJogador)
}

function pedra() {
    let jogo = Math.floor(Math.random() * 3) + 1

    const computadorDiv = document.getElementById('jogadaComputador')
    computadorDiv.innerHTML = ''
    const imgComputador = document.createElement('img')
    imgComputador.style.width = '120px'
    imgComputador.style.height = '120px'

    if (jogo == 1) {
        imgComputador.src = 'img/papel.png'
        computadorDiv.appendChild(imgComputador)
    } else if (jogo == 2) {
        const imgComputador = document.createElement('img')
        imgComputador.src = 'img/tesoura.png'
        imgComputador.style.width = '120px'
        imgComputador.style.height = '120px'
        computadorDiv.appendChild(imgComputador)
    } else {
        imgComputador.src = 'img/pedra.png'
        computadorDiv.appendChild(imgComputador)
    }

    let jogador = 3

    if (jogo == jogador) {
        texto.innerHTML = "EMPATE"
    } else if (jogo == 1) {
        texto.innerHTML = 'VOCÊ PERDEU!'
        atualizarPlacarComputador()
    } else {
        texto.innerHTML = 'VOCÊ VENCEU!'
        atualizarPlacarJogador()
    }

    const jogadorDiv = document.getElementById('jogadaJogador')
    jogadorDiv.innerHTML = ''
    const imgJogador = document.createElement('img')
    imgJogador.src = 'img/pedra.png'
    imgJogador.style.width = '120px'
    imgJogador.style.height = '120px'
    jogadorDiv.appendChild(imgJogador)
}

document.getElementById('tesoura').addEventListener('click', tesoura)
document.getElementById('papel').addEventListener('click', papel)
document.getElementById('pedra').addEventListener('click', pedra)