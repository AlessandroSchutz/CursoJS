try {
    // É executada quando não há erros
} catch(e) {
    // É executada quando há erros
} finally {
    // Sempre será executado
}

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError ("Esperando instância de Date.");
    }

    if (! data){
        data = new Date();
    }

    return data.toLocaleTimeString("pt-br",{        
    })
}


try { 
    const data = new Date ("01-01-1970 12:58:22");
    const hora  = retornaHora();
    console.log(hora);
} catch(e){
    //Tratar erro
} finally {
    console.log("Tenha um bom dia.")
}