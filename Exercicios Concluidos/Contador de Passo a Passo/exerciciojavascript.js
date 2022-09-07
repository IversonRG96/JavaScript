function calcular() {
    var inicio = window.document.querySelector('#txtinicio')
    var fim = window.document.querySelector('#txtfim')
    var passo = window.document.querySelector('#txtpasso')
    var inicio = Number (inicio.value)
    var fim = Number (fim.value)
    var passo = Number (passo.value)
    var c = 0

    if (inicio == ''){
        res.innerHTML = `Impossivel Contar!`
    } else if (fim == '') {
        alert(`[ERRO] - "FIM" Inválido, Tente Novamente`)
    } else if (passo == '' && passo <= 0){
        alert(`[ERRO] - "PASSO" Inválido, Passo receberá o valor de 1`)
        passo = 1
        res.innerHTML = '<p>Contando:</p>'
        for(c =inicio;c <= fim; c =c + passo){
            res.innerHTML += ` ${c} `
            res.innerHTML += String.fromCodePoint(0x1F449);
        }
        res.innerHTML+= String.fromCodePoint(0x1F3C1)
    } else {
        res.innerHTML = '<p>Contando:</p>'
        for(c =inicio;c <= fim; c =c + passo){
            res.innerHTML += ` ${c} `
            res.innerHTML += String.fromCodePoint(0x1F449);
        }
        res.innerHTML+= String.fromCodePoint(0x1F3C1)
    }
}