function cadastro() {
    
    function pessoas(nome, sobrenome, idade, peso){
        return {nome, sobrenome, idade, peso};
    }

    const pessoa1 = pessoas('Maria', 'Alves', 25, 65);

    console.log(`${pessoa1.nome} ${pessoa1.sobrenome} tem ${pessoa1.idade} anos e ${pessoa1.peso}kg.`);
}

cadastro();