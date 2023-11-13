
// continue (pula o resultado):

const numeros = [1,2,3,4,5,6,7,8,9];

for (let num of numeros){

    if (num%2 === 0){
        continue;
    }

    console.log(num);
}

// break (quando achar o resultado, sai do código) sintaxe:

for (let num of numeros){

    if (num === 8 ){
        break;
    }

    console.log(num);
}

