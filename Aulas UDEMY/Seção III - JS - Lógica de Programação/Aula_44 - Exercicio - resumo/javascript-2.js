
let peso = document.querySelector('#peso');
let altura = document.querySelector('#altura');
let calcular = document.querySelector('#calcular');
let textoResult = document.querySelector('.textResult'); 

function calcularIMC(evento){
    evento.preventDefault();
    let resultado = (peso.value)/(altura.value*altura.value);
    if (altura.value == '' || peso.value == ''){
        alert("ERRO: Dados Incompletos");
    } else if (resultado < 18.5){
        textoResult.innerHTML = `O seu IMC é igual a <strong>${resultado.toFixed(2)}</strong>. Você está <strong>Abaixo do Peso</strong>!`;
    } else if (resultado >= 18.5 && resultado <= 24.9){
        textoResult.innerHTML = `O seu IMC é igual a <strong>${resultado.toFixed(2)}</strong>. Você está com o <strong>Peso Normal</strong>!`;
    } else if (resultado >= 25 && resultado <= 29.9){
        textoResult.innerHTML = `O seu IMC é igual a <strong>${resultado.toFixed(2)}</strong>. Você está com <strong>Sobrepeso</strong>!`;
    } else if (resultado >= 30 && resultado <= 34.9){
        textoResult.innerHTML = `O seu IMC é igual a <strong>${resultado.toFixed(2)}</strong>. Você está com <strong>Obesidade 1</strong>!`;
    } else if (resultado >= 35 && resultado <= 39.9){
        textoResult.innerHTML = `O seu IMC é igual a <strong>${resultado.toFixed(2)}</strong>. Você está com <strong>Obesidade 2</strong>!`;
    } else if (resultado >= 40){
        textoResult.innerHTML = `O seu IMC é igual a <strong>${resultado.toFixed(2)}</strong>. Você está com <strong>Obesidade 3</strong>!`;
    } else {}
}

calcular.addEventListener('click', calcularIMC);