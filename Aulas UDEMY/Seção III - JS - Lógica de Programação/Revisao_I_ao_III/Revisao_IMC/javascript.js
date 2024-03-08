const botao = document.querySelector('.btn-calcular');

function classificacao(resultado) {
    if (resultado < 18.5) { return `<strong>Abaixo do Peso</strong>` }
    if (resultado >= 18.5 && resultado <= 24.9) { return `<strong>Peso Normal</strong>` }
    if (resultado >= 25 && resultado <=29.9) { return `<strong>Sobrepeso</strong>` }
    if (resultado >= 30 && resultado <= 34.9) { return `<strong>Obesidade I</strong>` }
    if (resultado >= 35 && resultado <= 39.9) { return `<strong>Obesidade II</strong>` }
    if (resultado > 40) { return `<strong>Obesidade III</strong>` }
}


function teste () {
    let peso = Number.parseFloat(document.querySelector('#peso').value);
    let altura = Number.parseFloat(document.querySelector('#altura').value);
    let escreverTela = document.querySelector('.resultado');
    
    let result = peso/(altura*altura);

    if (peso === "" && peso === 0 && isNaN(peso) === false && altura === "" && altura === 0 && isNaN(altura) === false) {
        escreverTela.innerHTML = `<p><strong>ERRO encontrado, tente novamente!</strong></p>`;
    } else if (result < 18.5){
        escreverTela.innerHTML = `<p>Seu IMC é igual a <strong>${result.toFixed(2)}</strong>, e sua classificação é ${classificacao(result)}</p>`
    } else if (result >= 18.5 && result <= 24.9){
        escreverTela.innerHTML = `<p>Seu IMC é igual a <strong>${result.toFixed(2)}</strong>, e sua classificação é ${classificacao(result)}</p>`
    } else if (result >= 25 && result <=29.9){
        escreverTela.innerHTML = `<p>Seu IMC é igual a <strong>${result.toFixed(2)}</strong>, e sua classificação é ${classificacao(result)}</p>`
    } else if (result >= 30 && result <= 34.9){
        escreverTela.innerHTML = `<p>Seu IMC é igual a <strong>${result.toFixed(2)}</strong>, e sua classificação é ${classificacao(result)}</p>`
    } else if (result >= 35 && result <= 39.9){
        escreverTela.innerHTML = `<p>Seu IMC é igual a <strong>${result.toFixed(2)}</strong>, e sua classificação é ${classificacao(result)}</p>`
    } else if (result > 40){
        escreverTela.innerHTML = `<p>Seu IMC é igual a <strong>${result.toFixed(2)}</strong>, e sua classificação é ${classificacao(result)}</p>`
    }
}

botao.addEventListener('click', teste);

