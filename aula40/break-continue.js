const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue -> Continua para a próxima iteração
// Break -> Sai do laço

let i = 0;
while(i < numeros.length){
    let numero = numeros[i];

    if (numero === 2){
        console.log("Pulei este Nº");
        i++;
        continue;
    }
    console.log(numero);
    if (numero === 8) {
        console.log("Nº encontrado, saindo...")
        i++;
        break;
    }
    
    i++
}