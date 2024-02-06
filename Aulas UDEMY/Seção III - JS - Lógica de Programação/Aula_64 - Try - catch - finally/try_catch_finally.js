
//Tratando de erros - try /catch / finally

try {
    // executa quando não tem erro
} catch (erro){
    // executa quando o try ocorre erro
} finally {
    // executa sempre
}

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError ('Esperando instância de Date.');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-br', { 
        hour12:false,
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit"});
}

try {
    const data = new Date ('07-07-1996 13:00:07');
    const hora = retornaHora(data);
    console.log(hora);
} catch (e) {
    // Tratar erro
} finally {
    console.log ('Tenha um bom dia!');
}
    
