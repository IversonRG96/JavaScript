

const paragrafos = document.querySelector('.paragrafos');// seleciono classe "paragrafos"
const ps = paragrafos.querySelectorAll('p'); // selecionou todos os "p" da classe "paragrafo"

const estilosBody = getComputedStyle(document.body); // busca todos os estilos computados
const backgroundColorBody = estilosBody.backgroundColor; // salva a cor do body em uma variável
console.log(backgroundColorBody); // mostra o valor da cor

for (let p of ps) { //estrai o valor do indice
    p.style.backgroundColor = backgroundColorBody; // muda a cor de fundo de "p" na cor do body salvo 
    p.style.color = '#FFFFFF'; // muda a cor de 'p' pra branco
}