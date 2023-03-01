function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana){
        case 0 : 
            diaSemanaTexto = "Domingo";
        return diaSemanaTexto;
        case 1 : 
            diaSemanaTexto = "Segunda";
        return diaSemanaTexto;
        case 2 : 
            diaSemanaTexto = "Terça";
        return diaSemanaTexto;
        case 3 : 
            diaSemanaTexto = "Quarta";
        return diaSemanaTexto;
        case 4 : 
            diaSemanaTexto = "Quinta";
        return diaSemanaTexto;
        case 5 : 
            diaSemanaTexto = "Sexta";
        return diaSemanaTexto;
        case 6 : 
            diaSemanaTexto = "Sábado";
        return diaSemanaTexto;
        default:
            diaSemanaTexto = "";
    }
}
const data = new Date("1987-04-15 00:00:00");
const diaSemana = data.getDay()
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)
/*
if(diaSemana === 0){
    diaSemadaTexto = "Domingo";
}else if (diaSemana === 1){
    diaSemadaTexto = "Segunda"
}else if (diaSemana === 2){
    diaSemadaTexto = "Terça"
}else if (diaSemana === 3){    
    diaSemadaTexto = "Quarta"
}else if (diaSemana === 4){
    diaSemadaTexto = "Quinta"
}else if (diaSemana === 5){
    diaSemadaTexto = "Sexta"
}else if (diaSemana === 6){
    diaSemanaTexto = "Sábado"
} else {
    diaSemanaTexto = "Dia Inválido"
}
*/
console.log(diaSemana, diaSemanaTexto);