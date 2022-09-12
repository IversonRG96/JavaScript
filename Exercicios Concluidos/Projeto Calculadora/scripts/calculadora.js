function ligar() {
    telacalc.style.background="white";
    telacalc.style.color="black";
    avisold2.style.background="#008000b9";
    avisold.style.background="#ffffff32";
    document.getElementById('textotela').innerHTML='';
    document.getElementById('avisold2').innerHTML='ON';
    document.getElementById('avisold').innerHTML='';

}

function desligar() {
    telacalc.style.background="black";
    telacalc.style.font="black";
    avisold.style.background="#a90909ad";
    avisold2.style.background="#ffffff32";
    document.getElementById('textotela').innerHTML='';
    document.getElementById('avisold').innerHTML='OFF';
    document.getElementById('avisold2').innerHTML='';
}

function caracter(escrita){
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

