function ePaisagem(largura, altura){
    return largura >= altura;
}

console.log(ePaisagem(1080, 1920));

const ePaisagem2 = (largura, altura) => largura >= altura;

console.log(ePaisagem2(1920, 1080));