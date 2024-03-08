



const inputTarefa = document.querySelector('.input-tarefa');
const bntTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criarLi(){
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus(); // faz o cursor de texto do mouse ficar focado e piscando mesmo q saia
}

function criaBotaoApagar (li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar'); //adiciona 'classe' 'apagar'
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); //adiciona 'titulo' 'Apagar esta tarefa'
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criarLi ();
    li.innerText = textoInput; // cria um li e adiciona o texto do input
    tarefas.appendChild(li); // o li criado é movido pra ul (tarefas)
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

document.addEventListener('click', function (event){
    const elemento = event.target;

    if (elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefas(); // apaga da memória do navegador
    }
})

bntTarefa.addEventListener('click', function (){
    if (!inputTarefa.value) return; // Se 'inputTarefa' estiver vazio retornar nada
    criaTarefa(inputTarefa.value);
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim;
        listaDeTarefas.push(tarefaTexto);
    }
}

    const tarefasJSON = JSON.stringify(listaDeTarefas); // converte elemneto js para uma string
    localStorage.setItem('tarefas', tarefasJSON); // o que quer salvar ('nomederecuperação', variavelSalva);
                                                  // so pode salvar string em ('', variavelSalva);

//Obs.: caminho pra ver onde foi salvo no navegador => devtools >> Application >> Storage >> Local Storage

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse (tarefas); // converte uma string em elemento js
    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();