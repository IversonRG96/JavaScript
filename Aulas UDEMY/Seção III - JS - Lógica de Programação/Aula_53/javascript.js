
// Array em seguida objetos
const elementos = [
    {tag: 'p', texto: 'Frase 1'},//0
    {tag: 'div', texto: 'Frase 2'},//1
    {tag: 'footer', texto: 'Frase 3'},//2
    {tag: 'section', texto: 'Frase 4'}//3
]

const container = document.querySelector('.container');//seleciono a marcador "container"
const div = document.createElement('div'); // criou uma div

for (let i = 0; i < elementos.length; i++){
    // desestruturação  Seleciona o indice [i]
    let { tag, texto} = elementos[i];
//  let     tag   = document.createElement(nomeTag)
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto; //dentro da tagCriada colocar o texto
    div.appendChild(tagCriada); //coloca  a tagCriada dentro de uma div ja criada
}

container.appendChild(div); // coloca a div dentro do container ja criado