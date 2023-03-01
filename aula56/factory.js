// Factory function -> Função fábrica
function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        
        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        
        // Setter
        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(" ");
        },

        fala: function(assunto = "está falando sobre NADA"){
            return `${this.nome} está ${assunto}.`;
        },
        
        altura: altura,
        peso: peso,
        
        get imc(){ //get -> Getter -> irá fingir ser um atributo da classe mesmo ele sendo uma função;
            const indice = (this.peso / this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa("Alessadro", "Schutz", 1.80, 90);
console.log(p1.imc); // Para chamar a função usando "get", deve chama-la como se fosse um atributo (sem os parenteses);
const p2 = criaPessoa("Maria", "Joaquina", 1.6, 63);
console.log(p2.imc);
console.log(p2.fala("falando sobre JS"));

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);
console.log(p1.imc);
p1.nomeCompleto = "Maria Oliveira Silva";
console.log(p1.nomeCompleto);