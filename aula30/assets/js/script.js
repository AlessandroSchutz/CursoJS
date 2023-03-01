/*
const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemana (diaSemana){
    let diaSemanaTexto;
    
    switch (diaSemana){
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
            case 1:
                diaSemanaTexto = "Segunda-Feira";
                return diaSemanaTexto;
                case 2:
                    diaSemanaTexto = "Terça-Feira";
                    return diaSemanaTexto;
                    case 3:
                        diaSemanaTexto = "Quarta-Feira";
                        return diaSemanaTexto;
                        case 4:
                            diaSemanaTexto = "Quinta-Feira";
                            return diaSemanaTexto;
                            case 5:
                                diaSemanaTexto = "Sexta-Feira";
                                return diaSemanaTexto;
                                case 6:
                                    diaSemanaTexto = "Sábado";
                                    return diaSemanaTexto;
                                    default: 
                                    diaSemanaTexto = "";
                                }
                            }

function getNomeMes(numMes){
    let nomeMesTexto;
    
    switch(numMes){
        case 0:
            nomeMesTexto = "Janeiro"
            return nomeMesTexto;
            case 1:
                nomeMesTexto = "Fevereiro"
                return nomeMesTexto;
                case 2:
                    nomeMesTexto = "Março"
                    return nomeMesTexto;
                    case 3:
                        nomeMesTexto = "Abril"
                        return nomeMesTexto;
                        case 4:
                            nomeMesTexto = "Maio"
                            return nomeMesTexto;
                            case 5:
                                nomeMesTexto = "Junho"
                                return nomeMesTexto;
                                case 6:
                                    nomeMesTexto = "Julho"
                                    return nomeMesTexto;
                                    case 7:
                                        nomeMesTexto = "Agosto"
                                        return nomeMesTexto;
                                        case 8:
                                            nomeMesTexto = "Setembro"
                                            return nomeMesTexto;
                                            case 9:
                                                nomeMesTexto = "Outubro"
                                                return nomeMesTexto;
                                                case 10:
                                                    nomeMesTexto = "Novembro"
                                                    return nomeMesTexto;
                                                    case 11:
                                                        nomeMesTexto = "Dezembro"
                                                        return nomeMesTexto;
                                                        default:
                                                            return ""
    }
}

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data){
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemana(diaSemana);
    const nomeMes = getNomeMes(numeroMes)
    
    return (
        ` ${nomeDia}, dia ${data.getDate()} de ${nomeMes} de ${zeroAEsquerda(data.getFullYear())};<br>`+ ` São exatas ${zeroAEsquerda(data.getHours())}:${data.getMinutes()} minutos`
        );
    }; 
    
    h1.innerHTML = criaData(data);
*/   
const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleDateString("pt-br", { dateStyle: "full"})
  
   