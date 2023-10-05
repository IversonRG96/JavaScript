const h1 = document.querySelector('.container h1');
const data = new Date();

function criaData (data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemana (diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} 
            ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`);
}

function getDiaSemana (diaSemana) {
    const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
    return diasSemana[diaSemana];
}

function getNomeMes (numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 
    'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num: `0${num}`;
}

h1.innerHTML = criaData(data);