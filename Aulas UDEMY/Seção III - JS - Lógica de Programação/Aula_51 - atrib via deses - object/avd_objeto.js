
// Atribuição via desestruturação:

const pessoa = {nome: 'Iverson', sobrenome: 'Rômulo', idade: 27, endereco: {rua: 'Dep Pinheiro Júnior', numero: 12345}};
const {nome: newNome, sobrenome, idade} = pessoa; // nomear e renomear varialvel ao atribuir o valor do objeto
console.log(newNome, sobrenome, idade);

// Para acessar um objeto dentro de outro objeto (avd):

const {endereco: {rua: r, numero}, endereco} = pessoa; // estrair o valor parcial ou completo de determinado objeto | renomear variavel

console.log(r, numero, endereco);

// Podemos usar o ... rest para pegar as informações não extraidas