const on = document.getElementById('ligar')
const off = document.getElementById('desligar')
const lamp = document.getElementById('lampada')

function lampbroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function ligar(){
        if (!lampbroken()){
                lamp.setAttribute('src', 'imagens/ligada.png')
        } else{
                alert('ERROR: A lâmpada quebrou!')
        }
}
function  desligar(){
        if (!lampbroken()){
                lamp.setAttribute('src', 'imagens/apagada.png')
        } else{
                alert('ERROR: A lâmpada quebrou!')
        }
}
function quebrar(){
        if (!(lampbroken())){
                lamp.setAttribute('src', 'imagens/quebrada.png')
        } else{
                alert('ERROR: A lâmpada quebrou!')
        }
}

lamp.addEventListener('dblclick', quebrar)
on.addEventListener('click', ligar)
off.addEventListener('click', desligar)
lamp.addEventListener('mouseover', ligar)
lamp.addEventListener('mouseleave', desligar)