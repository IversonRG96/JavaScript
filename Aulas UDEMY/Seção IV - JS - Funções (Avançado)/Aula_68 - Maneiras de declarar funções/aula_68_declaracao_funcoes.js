
// First-class Objetcs (Objetos de primeira classe) = a função é um dado de classe1
// Declaração de função (Function hoisting)

function nomeFuncao () {
    console.log ('ação');
}

nomeFuncao();

// First-class Objetcs (Objetos de primeira classe) = a função é um dado de classe1
// Function expression

const constFuncao = function() {
    console.log('Fui executado e sou um dado');
}

function executarUmaFuncao (funcao) {
    funcao();
}

executarUmaFuncao(constFuncao);

// First-class Objetcs (Objetos de primeira classe) = a função é um dado de classe1
// Function expression
//Arrow function

const funcaoArrow = (x,y) => {
    console.log(x+y);
}

funcaoArrow(10,5);

// First-class Objetcs (Objetos de primeira classe) = a função é um dado de classe1
// Function expression
// Dentro de um Objeto

const obj = {
    falar() {
        console.log ('Estou falando...');
    }
}

obj.falar();