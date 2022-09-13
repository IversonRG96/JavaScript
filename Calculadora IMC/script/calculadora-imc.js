function calcular(){
    let usuario = document.getElementById('nome');
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let resultado = document.getElementById('resultado');
    let imc;
    let status;

   imc = peso/(altura*altura);

   if (usuario!='' && peso!='' && altura!=''){

        if (imc>=18.5 && imc<=24.9){
            resultado.innerHTML='';
            resultado.innerHTML = `${usuario.value}, o seu IMC é igual a ${imc.toFixed(2)}. Segundo a classificação no IMC, você está com o Peso Normal.`;
        }
        if (condition) {
            elseif
        } else {
            
        } (imc>=25 && imc<=29.99){
            resultado.innerHTML='';
            resultado.innerHTML = `${usuario.value}, o seu IMC é igual a ${imc.toFixed(2)}. Segundo a classificação no IMC, você está com o Sobrepeso.`;
        }
        elseif (imc>=30 && imc<=39.99){
            resultado.innerHTML='';
            resultado.innerHTML = `${usuario.value}, o seu IMC é igual a ${imc.toFixed(2)}. Segundo a classificação no IMC, você está com Obesidade.`;
        }
        else (imc>=40){
            resultado.innerHTML='';
            resultado.innerHTML = `${usuario.value}, o seu IMC é igual a ${imc.toFixed(2)}. Segundo a classificação no IMC, você está com Obesidade Grave.`;
        }

    } else {
        alert('Preencha todos os campos!')
    }  
}

