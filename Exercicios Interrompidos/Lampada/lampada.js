let on = document.getElementById('ligar')
let off = document.getElementById('desligar')
let lamp = document.getElementById('lampada')

function lampbroken(){
    return lamp.setAttribute.indexOf("quebrada") >- 1
}

function ligar(){
        let lamp = document.getElementById('lampada')
        lamp.setAttribute('src', 'imagens/ligada.png')
}
function desligar(){
        let lamp = document.getElementById('lampada')
        lamp.setAttribute('src', 'imagens/apagada.png')
}

function quebrar(){
        let lamp = document.getElementById('lampada')
        lamp.setAttribute('src', 'imagens/quebrada.png')
}

