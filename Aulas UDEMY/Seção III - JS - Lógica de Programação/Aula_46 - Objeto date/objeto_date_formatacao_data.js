

function addZero (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = addZero(data.getDate());
    const mes = addZero(data.getMonth() +1);
    const ano = addZero(data.getFullYear());
    const hora = addZero(data.getHours());
    const min = addZero(data.getMinutes());
    const seg = addZero(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData (data);
console.log (dataBrasil);



