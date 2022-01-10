function calcular() {
    var ctxt = window.document.querySelector('#ctxt').value
    var ctxt = ''
    var num = window.document.querySelector('#txtnum')
    var num = Number(num.value)
    var c = 0
    if (num == ""){
        alert('[ERRO] - Número Inválido, Tente Novamente!')
    } else {
        for (c = 0; c==10; c++){
            var calculo = num * c
            document.getElementById('ctxt') += `${num} X ${c} = ${calculo}` 
        }
    }
}