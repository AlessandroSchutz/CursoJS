// defineProperty - defineProperties

function Produto(nome, preco, estoque){

    Object.defineProperty(this, "estoque", {
        enumerable: true, // Mostra a chave
        value: estoque, // Valor 
        writable: false, // Pode alterar o valor
        configurable: false // Pode reconfigurar a chave 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // Mostra a chave
            value: nome, // Valor 
            writable: true, // Pode alterar o valor
            configurable: true // Pode reconfigurar a chave 
        },
        preco: {
            enumerable: true, // Mostra a chave
            value: preco, // Valor 
            writable: true, // Pode alterar o valor
            configurable: true // Pode reconfigurar a chave 
        },
    });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);

for(let chave in p1){
    console.log(chave);
}