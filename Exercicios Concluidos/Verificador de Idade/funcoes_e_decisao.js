function identificar() {
    var txtano = window.document.querySelector('input#txtano')
    var anonasc = Number(txtano.value)
    var sex = window.document.getElementsByName('radsex')
    var side = window.document.querySelector('#side')
    var data = new Date()
    var anoatual = data.getFullYear()
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    var idade = anoatual - anonasc

    if (anonasc <= 0 && anonasc == ''){
        alert(`[ERRO] Ano de Nascimento Inválido, Tente Novamente!`)
    } else if (anonasc > anoatual) {
        alert(`[ERRO] Ano de Nascimento Inválido, Tente Novamente!`)
    } else {
        if (sex[0].checked){
            genero = 'Homem'
            if (idade < 7){
                genero = 'um Bebê'
                img.setAttribute('src','midias/homem-baby.png')
            } else if (idade >= 7 && idade <= 14){
                genero = 'um Menino'
                img.setAttribute('src','midias/homem-menino.png')
            } else if (idade < 21) {
                genero = 'um Jovem'
                img.setAttribute('src','midias/homem-jovem.png')
            } else if (idade <= 50) {
                genero = 'um Homem'
                img.setAttribute('src','midias/homem-adulto.png')
            } else {
                genero = 'um Idoso'
                img.setAttribute('src','midias/homem-idoso.png')
            }
        } else if (sex[1].checked){
            genero = 'Mulher'
            if (idade < 7) {
                genero = 'um Bebê'
                img.setAttribute('src','midias/mulher-baby.png')
            } else if (idade >= 7 && idade <= 14) {
                genero = 'uma Menina'
                img.setAttribute('src','midias/mulher-menina.png')
            } else if (idade < 21) {
                genero = 'uma Jovem'
                img.setAttribute('src','midias/mulher-jovem.png')
            } else if (idade <= 50) {
                genero = 'uma Mulher'
                img.setAttribute('src','midias/mulher-adulta.png')
            } else {
                genero = 'uma Idosa'
                img.setAttribute('src','midias/mulher-idosa.png')
            }
        }
        side.style.textAlign = 'center'
        side.innerHTML=`Identificamos ${genero} com ${idade} anos.`
        side.appendChild(img)
    }

}