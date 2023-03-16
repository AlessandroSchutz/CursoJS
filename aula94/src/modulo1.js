export const nome = "Luiz";
export const sobrenome = "Miranda";
export const idade = 30;

export default function soma(x, y){ // default => Variável "padrão".
    return x + y;
}
// export => é usado para exportar uma constante de um módulo para outro ele pode ser usado de diversas formas.
// export { nome, sobrenome, idade, soma };

export class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

}

// export default (x, y) => x* y;