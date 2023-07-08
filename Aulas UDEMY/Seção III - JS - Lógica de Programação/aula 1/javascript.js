let calcular = document.getElementById('calcular');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');

function calcularImc() {
    let resultado = peso.value/(altura.value*altura.value);

    if (peso.value == '' && peso.value == 0 || altura.value == '' && altura.value == 0) {
        alert(`ERRO: Dados incompletos`);
    } else if(resultado < 18.5){
        alert(`Seu IMC é igual a ${resultado.toFixed(2)}, você está classificado como Abaixo do Peso!`);
    } else if (resultado >= 18.5 && resultado <= 24.99){
        alert(`Seu IMC é igual a ${resultado.toFixed(2)}, você está classificado como Peso Normal!`);
    } else if (resultado >= 25 && resultado <=29.99){
        alert(`Seu IMC é igual a ${resultado.toFixed(2)}, você está classificado como Sobrepeso!`);
    } else if (resultado >= 30 && resultado <= 34.99) {
        alert(`Seu IMC é igual a ${resultado.toFixed(2)}, você está classificado como Obesidade 1!`);
    } else if (resultado >= 35 && resultado <= 39.99){
        alert(`Seu IMC é igual a ${resultado.toFixed(2)}, você está classificado como Obesidade 2!`);
    } else if (resultado > 40){
        alert(`Seu IMC é igual a ${resultado.toFixed(2)}, você está classificado como Obesidade 3!`);
    } else {}
}

calcular.addEventListener('click',calcularImc);