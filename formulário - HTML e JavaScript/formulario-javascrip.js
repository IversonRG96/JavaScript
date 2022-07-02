function entrar() {
    var usuario = String(document.getElementById('txtusuario').value);
    var senha = Number(document.getElementById('txtsenha').value)

    if (usuario == 'Iverson' && senha == 123) {
        alert("Login realizado com sucesso!")    
    } else if (usuario == 'Iverson' && senha != 123) {
        alert("Senha Inválida!")
    } else if (usuario != 'Iverson' && senha == 123) {
        alert("Usuário Inválido!")
    } else if (usuario != 'Iverson' && senha != 123) {
        alert(" Usuário e Senha Inválidos!")
    } else {}
}