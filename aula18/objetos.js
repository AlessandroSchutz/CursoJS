function criaPessoa (nome, sobrenome, idade){
    return {
        nome, sobrenome, idade
    };
}

const pessoa1 = criaPessoa("Alesandro", "Schutz", 20);
const pessoa2 = criaPessoa("Marcos", "Almeida", 25);
const pessoa3 = criaPessoa("Marieli", "Petrovic", 30);
const pessoa4 = criaPessoa("Tiago", "Santos", 33);
console.log(pessoa4)

console.log("-------------------------------------------------")

const pessoa = {
    nome: "Luiz",
    sobrenome: "Miranda",
    idade: 25,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incremantaIdade(){
        this.idade++;
    }
};

pessoa.fala();
pessoa.incremantaIdade();
pessoa.fala();