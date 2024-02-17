
// Escreva uma função que recebe um número e
// retorn o seguinte:
// Numero é divisivel por 3 = Fizz
// Numero é divisivel por 5 = Buzz
// Numero é divisivel por 3 e 5 = FizzBuzz
// Numero NÃO é divisivel por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um numero
// Use a função com números de 0 a 100

function divisivel(num){

    const divTres = (num) => num % 3 === 0; // true or false
    const divCinco = (num) => num % 5 === 0;
    const eNumber = (num) => !isNaN(num);
    const tresDigitos = (num) => num >= 0 && num <= 100;

    if (tresDigitos(num) === true && eNumber(num) === true) {
        if (divTres(num) === true && divCinco(num) === true) {
        console.log('FizzBuzz');
        } else if (divCinco(num) === true) {
            console.log('Buzz');
        } else if (divTres(num) === true) {
            console.log('Fizz');
        } else {
            console.log(num);
        }
    } else {
        console.log('ERROR : Número invalido');
    }
}

divisivel(55);
