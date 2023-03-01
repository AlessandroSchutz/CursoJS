// Getters e Setters
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, "estoque", {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== "number"){
                throw new TypeError("Mensagem de ERRO") // Esse comando irá aparecer como um erro caso o valor adicionado não seja um número
                return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
p1.estoque = 14
console.log(p1.estoque);



function criaProduto(nome) {
    return {
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace("coisa.", ""); // .replace => Apaga parte da frase desejada
            nome = valor;
        }
    };
}

console.log("_________________________________");
console.log("")

const p2 = criaProduto("Camiseta");
p2.nome = "Qualquer coisa."
console.log(p2.nome);
