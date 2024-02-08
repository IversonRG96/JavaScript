
// setInterval e setTimeout

// Sintaxe:

function hora(){
    let data = new Date();
    return data.toLocaleTimeString ('pt-BR', {hour12:false});
}
//salvando em uma variavel | FUNCTION nao pode ser nomeada
// variavel              função interna   exibir/função       tempo
const relogio = setInterval(function(){ console.log(hora());}, 1000);

//       função interna  limpador    função     tempo
setTimeout(function(){clearInterval(relogio);}, 10000)
