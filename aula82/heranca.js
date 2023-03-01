class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome +" já ligado");
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + " já desligado");
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { // extends => obrigatóriamente precisa usar a "class" 'SUPER', e dizer quais classes dejesa copiar da "class super"
    constructor(nome, cor, modelo){
        super(nome); // super => usado quando se usa extends, copia classes de outra classe já existente
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi= temWifi
    }

    ligar() {
        console.log("Olha, você alteirou o método ligar.")
    }
}

const s1 = new Smartphone("iPhone", "Preto", "iPhone-X");
console.log(s1);

const t1 = new Tablet("iPad", true);
