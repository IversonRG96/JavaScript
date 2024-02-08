
// escreva uma função que receba 2 números e retorne o maior deles

let num1 = 5;
let num2 = 3;

function numMaior(num1,num2) {
    if (num1 > num2){
        console.log(`O número ${num1} é maior`);
    } else if (num1 < num2){
        console.log(`O número ${num2} é maior`);
    } else if (num1 = num2){
        console.log(`Ambos os números possuem o mesmo valor`);
    } else{}
}

numMaior(num1, num2);

// Forma simplificada (arrow function)

const numMaior2 = (x, y) => x > y ? x : y;
console.log(numMaior2(10,5));