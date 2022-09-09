function ligar() {
    telacalc.style.background="white";
    telacalc.style.color="black";
    document.getElementById('textotela').innerHTML='';
}

function desligar() {
    telacalc.style.background="black";
    telacalc.style.font="black";
    document.getElementById('textotela').innerHTML='';
}

function insert(escrita){
    let textotela = document.getElementById('textotela').innerHTML;
    document.getElementById('textotela').innerHTML = textotela + escrita;
}

function apagar(){
    document.getElementById('textotela').innerHTML='';
}

function calcraiz(escrita) {
    let textotela = document.getElementById('textotela').innerHTML;
    document.getElementById('textotela').innerHTML=Math.sqrt(textotela);
}

function calcular() {
    let textotela = document.getElementById('textotela').innerHTML;

    if (textotela) {
        document.getElementById('textotela').innerHTML=eval(textotela);
    } else {}
}

