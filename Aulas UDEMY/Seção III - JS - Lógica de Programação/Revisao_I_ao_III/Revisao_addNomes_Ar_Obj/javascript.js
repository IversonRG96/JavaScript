function escopoExecuta(){

    const formulario = document.querySelector(".formulario");

    function addPessoasLista(event){
        event.preventDefault();
        const form = event.target;
        
        const nome = formulario.querySelector("#nome");
        const sobreNome = formulario.querySelector("#sobreNome");
        const email = formulario.querySelector("#email");
        const telefone = formulario.querySelector("#telefone");
        const cep = formulario.querySelector("#cep");
        const numero = formulario.querySelector("#numero");
        let mostraNomes = formulario.querySelector(".mostraNomes");
        let mostraErros = formulario.querySelector(".mostraErros");

        const boxNull = (nome, sobreNome, email, telefone, cep, numero) => nome.value === '' || sobreNome.value === '' || email.value === '' || telefone.value === '' || cep.value === '' || numero.value === '';
        const numerosTrue = (telefone, cep, numero) => !isNaN(telefone.value) && !isNaN(cep.value) && !isNaN(numero.value);

        function addRemoveClass(local) {
            local.classList.add('erroBorderRed');
            mostraErros.style.color = 'red';
            setTimeout(function(){ local.classList.remove('erroBorderRed'); mostraErros.innerHTML = '';}, 10000);
        }

        mostraErros.innerHTML = '';

        if (boxNull (nome, sobreNome, email, telefone, cep, numero) == false && numerosTrue (telefone, cep, numero) == true ) {

            const nomePessoas = []; // array [0,1.2.3,...]

            nomePessoas.push ({ // add um objeto dentro do array
            nome: nome.value,
            sobreNome: sobreNome.value,
            email: email.value,
            telefone: telefone.value,
            cep: cep.value,
            numero: numero.value
        })
            for (let i in nomePessoas){ // Mostra no console de acordo com os indices
                console.log(nomePessoas[i].nome, nomePessoas[i].sobreNome, nomePessoas[i].email, nomePessoas[i].telefone, nomePessoas[i].numero);
        }
   
            mostraNomes.innerHTML += `<p> Seu ${nome.value} ${sobreNome.value}, ${email.value}, ${telefone.value}, ${cep.value}, ${numero.value}</p>`;

        } else if (boxNull(nome,sobreNome,email,telefone,cep,numero) == true){
            
            if (nome.value == '') {
                mostraErros.innerHTML += `<p>ERRO: Nome Inválido!</p>`;
                addRemoveClass(nome);
            }

            if (sobreNome.value == '') {
                mostraErros.innerHTML += `<p>ERRO: Sobre Nome Inválido!</p>`;
                addRemoveClass(sobreNome);
            }

            if (email.value == '') {
                mostraErros.innerHTML += `<p>ERRO: E-mail Inválido!</p>`;
                addRemoveClass(email);
            }
            if (telefone.value == '') {
                mostraErros.innerHTML += `<p>ERRO: Telefone Inválido!</p>`;
                addRemoveClass(telefone);
            }
            if (cep.value == '') {
                mostraErros.innerHTML += `<p>ERRO: CEP Inválido!</p>`;
                addRemoveClass(cep);
            }
            if (numero.value == '') {
                mostraErros.innerHTML += `<p>ERRO: Nº Inválido!</p>`;
                addRemoveClass(numero);
            }

        } else if (numerosTrue(telefone, cep, numero) == false) {

            if (!isNaN(telefone.value) == false) {
                mostraErros.innerHTML += `<p> Telefone: Digite apenas números! </p>`;
                addRemoveClass(telefone);
            }
            
            if (!isNaN(cep.value) == false) {
                mostraErros.innerHTML += `<p> CEP: Digite apenas números! </p>`;
                addRemoveClass(cep);
            }

            if (!isNaN(numero.value) == false) {
                mostraErros.innerHTML += `<p> Nº: Digite apenas números! </p>`;
                addRemoveClass(numero);
            }

        } else {}
    }
    
    formulario.addEventListener('submit', addPessoasLista);
}

escopoExecuta();