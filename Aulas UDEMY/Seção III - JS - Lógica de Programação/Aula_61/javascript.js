

// Escreva uma função chamada ePaisagem 
// que recebe dois argumentos: largura e altura de uma imagem(number)
// Retorne true se a imagem estiver no modo paisagem

    let larg = 700;
    let alt = 500;

    const ePaisagem = (larg, alt) => larg > alt? true : false; // ? true : false pode ser removido
    console.log(ePaisagem(larg, alt));
