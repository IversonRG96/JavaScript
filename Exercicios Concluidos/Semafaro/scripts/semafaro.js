const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let corIndex = 0;
let interID;

const trafego = (event) => {
    stopauto();
    semafaro[event.target.id]();
}

const nextcor = () => {
    if (corIndex < 2){
        corIndex++
    }else{
        corIndex = 0;
    }
}

const trocacores = () => {
    const cores = ['vermelho','amarelo','verde']
    const cor = cores[corIndex];
    semafaro[cor]();
    nextcor();
}

const stopauto =() => {
    clearInterval(interID)
}

const semafaro = {
    'vermelho': () => img.src='../Semafaro/imagens/vermelho.png',
    'amarelo': () =>  img.src='../Semafaro/imagens/amarelo.png',
    'verde': () =>    img.src='../Semafaro/imagens/verde.png',
    'automatico': () => interID = setInterval(trocacores,1000)

}

buttons.addEventListener('click', trafego);