function calcular(){
    let usuario = document.getElementById('nome')
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    let resultado = document.getElementById('resultado')
    let imc

    imc = peso/(altura*altura)

    if (usuario!='' && peso!='' && altura!=''){

        if(imc<=18.49){
            resultado.innerHTML=``
            resultado.innerHTML = `${usuario.value}, o seu IMC é igual a ${imc.toFixed(2)}. Segundo a classificação do IMC, você está Abaixo do Peso.`
        }
        else if (imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML=``
            resultado.innerHTML = `${usuario.value}, o seu IMC é igual a ${imc.toFixed(2)}. Segundo a classificação do IMC, você está com o Peso Normal.`
        }
        else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML=``
            resultado.innerHTML = `${usuario.value}, o seu IMC é igual a ${imc.toFixed(2)}. Segundo a classificação do IMC, você está com Sobrepeso.`
        }
        else if (imc >= 30 && imc <= 34.9){
            resultado.innerHTML=``
            resultado.innerHTML = `${usuario.value}, o seu IMC é igual a ${imc.toFixed(2)}. Segundo a classificação do IMC, você está com Obesidade I.`
        }
        else if (imc >= 35 && imc <= 39.9){
            resultado.innerHTML=``
            resultado.innerHTML = `${usuario.value}, o seu IMC é igual a ${imc.toFixed(2)}. Segundo a classificação do IMC, você está com Obesidade II.`
        }
        else {
            resultado.innerHTML=``
            resultado.innerHTML = `${usuario.value}, o seu IMC é igual a ${imc.toFixed(2)}. Segundo a classificação do IMC, você está com Obesidade III.`
        }
    } else {
        alert('Preencha todos os campos!')
    }
}