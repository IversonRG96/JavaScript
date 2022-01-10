function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12 ) {
        msg.innerHTML += ` Bom Dia!`
        img.src = '../Ex001/midias/manha.png'
        document.body.style.background = '#e5c000'
    } else if(hora >= 12 && hora < 18) {
        msg.innerHTML += ` Boa Tarde!`
        img.src = '../Ex001/midias/tarde.png'
        document.body.style.background = '#e87314'
    } else {
        msg.innerHTML += ` Boa Noite!`
        img.src = '../Ex001/midias/noite.png'
        document.body.style.background = '#2d2d2d'
    }
}