// Parâmetros
// arguments de uma função recebe todos os parametros enviados em forma de indice []
// não funciona em arrow function

function funcao (a,b,c) {
    console.log(a,b,c);
}
funcao(1,2,3);

// Parâmentros
// quando não informar todos os valores dos parâmetros
// podemos deixar um valor predefinido pra b e c;

function funcao2 (a,b = 3,c = 6) {
    console.log(a+b+c);
}
funcao2(5);

// Parâmentros
// quando precisamos pular um paramentro e usar o predefinido
// podemos deixar um valor predefinido pra a, b e c;

function funcao2 (a, b = 3,c = 6) {
    console.log(a+b+c);
}
funcao2(5, undefined, 10);

// Parâmetros
// parâmetros de um objeto

function funcao3 ({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade); //abreviação via desestroturação
}
funcao3({nome:'Bruna', sobrenome:'Ferreira', idade:32});

// Parâmetros
// parâmetros de um array

function funcao4 ([numero1, numero2, numero3]) {
    console.log(numero1, numero2, numero3); //abreviação via desestroturação
}
funcao4(['Palavra', 45258, 'Pala123']);

// Parâmetros 
// exemplo de função responsavel por calcular

function calculadora(operador, resultado, ...numeros){
    // of pega o valor e in pega o indice           
    for (let numero of numeros) {
        if (operador === '+') resultado += numero;
        if (operador === '-') resultado -= numero;
        if (operador === '/') resultado /= numero;
        if (operador === '*') resultado *= numero;
    }

    console.log(resultado);
}

calculadora('*', 5, 50, 30, 100);