
// For in (mostra os indices de acordo com o tamanho .lenght) sintaxe:

const cores = ['Azul', 'Branco', 'Vermelho'];

//         var     object
for (let palheta in cores){ // Array
   console.log(cores[palheta]);
}

const roupa = {tipo: 'calça', cor:'verde', tamanho:'GG'}

//            var          array
for (let caracteristica in roupa){
    console.log(caracteristica, roupa[caracteristica]);
}

