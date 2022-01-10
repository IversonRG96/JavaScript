function verificar() {
    var data = new Date() //Pega a data e hora atual
    var ano = data.getUTCFullYear() //seleciona o ano
    var fano = document.querySelector('input#txtano') //id txtano =  var fano
    var res = document.querySelector('div#res') //div res =  var res
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') //seletor por nome
        var idade = ano - Number(fano.value) //calculo ano mesmo idade nasc.
        var genero = ''
        var img = document.createElement('img') //cria uma imagem 
        img.setAttribute('id', 'foto') //atribui identificador id com nome foto
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) { //Criança
                genero = 'um Menino'           
                img.setAttribute('src', '../Ex002/midias/homem-baby.png')
            } else if (idade < 21) { //Jovem
                genero = 'um Jovem'
                img.setAttribute('src', '../Ex002/midias/homem-jovem.png')
            } else if (idade < 50 ) { //Adulto
                genero = 'um Homem'
                img.setAttribute('src', '../Ex002/midias/homem-adulto.png')
            } else { //Idoso
                genero = 'um Idoso'
                img.setAttribute('src', '../Ex002/midias/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) { //Criança
                genero = 'uma Menina'
                img.setAttribute('src', '../Ex002/midias/mulher-baby.png')
            } else if (idade < 21) { //Jovem
                genero = 'uma Jovem'
                img.setAttribute('src', '../Ex002/midias/mulher-jovem.png')
            } else if (idade < 50 ) { //Adulto
                genero = 'uma Mulher'
                img.setAttribute('src', '../Ex002/midias/mulher-adulta.png')
            } else { //Idoso
                genero = 'uma Idosa'
                img.setAttribute('src', '../Ex002/midias/mulher-idosa.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
       
    }
}