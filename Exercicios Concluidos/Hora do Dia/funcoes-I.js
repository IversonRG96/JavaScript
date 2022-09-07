function cordodia() {
    var fulldia = new Date()
    var h = fulldia.getHours()
    var min = fulldia.getMinutes()
    var msg = window.document.querySelector(`#msg`)
    var img = window.document.querySelector(`#img`)
    msg.innerHTML= `Agora são <strong>${h}h</strong> e <strong>${min}min</strong>. `
    if (h >= 5 && h <= 12){ // das 6 as 12
        msg.innerHTML+=`<p>Bom Dia!</p>`
        img.src = 'midias/manha.png'
        document.body.style.background = '#e5c000'
    } else if (h > 12 && h <= 18) {
        msg.innerHTML+=`<p>Boa Tarde!</p>`
        img.src = 'midias/tarde.png'
        document.body.style.background='#e87314'
    } else {
        msg.innerHTML+=`<p>Boa Noite!</p>`
        img.src = 'midias/noite.png'
        document.body.style.background='#2d2d2d'
    }
}
    