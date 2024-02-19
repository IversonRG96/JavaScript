

function relogio () {
    function criarHoraSegundos (segundos) { // função que formata a hora
        const data = new Date (segundos * 1000); // tranforma ms em s
        return data.toLocaleTimeString ('pt-BR', {hour12:false, timeZone: 'UTC'}) // UTC horario 00:00:00
    } // irá retornar a hora 00:00:00 + segundos

    const relogio = document.querySelector ('.relogio'); // seleciona o class relogio
    let segundos = 0;
    let timer;

    function iniciaRelogio() { // função de adicionar 1s a cada segundo
        timer = setInterval (function () {
            segundos++;
            relogio.innerHTML = criarHoraSegundos (segundos); 
        }, 1000); // a cada 1000ms ele repete a função
    }

    document.addEventListener('click', function (event){
        const elemento = event.target;

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer); // reseta o intervalo do timer antes de iniciar mas não os segundos salvos
            iniciaRelogio(); // inicia o relogio
        }

        if (elemento.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer); // reseta o intervalo (pausa o relogio)

        }

        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer); // reseta o intervalo
            relogio.innerHTML = '00:00:00'; // reescreve o valor de relogio
            segundos = 0; // reseta o valor de segundos
        }
    }); 
}

relogio ();