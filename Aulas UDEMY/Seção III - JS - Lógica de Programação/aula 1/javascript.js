let calcular = document.getElementById('calcular');
let peso = document.getElementById('peso');
let altura = document.getElementById('altura');

function calcularImc() {
    alert(`Seu peso é ${peso.value} e sua altura ${altura.value}`);
}

calcular.addEventListener('click',calcularImc);