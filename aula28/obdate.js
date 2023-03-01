// const tresHoras = 60 * 60 * 3 *1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 3); // new Date(ano, mes, dia, hora, minuto, segundos, milésimos)
/*
const data = new Date("2019-04-20 20:15:59");
console.log("Dia", data.getDate());
console.log("Mês", data.getMonth() + 1); // Mês começa do zero
console.log("Ano", data.getFullYear());
console.log("Hora", data.getHours());
console.log("Min", data.getMinutes());
console.log("Seg", data.getSeconds());
console.log("ms", data.getMilliseconds());
console.log(`Dia ${data.getDay()} da semana`); // 0 - Domingo, 6- Sábado
console.log(Date.now()); // Essa sequência equivale a mesma data que está la, porem em milésimos de segundos
console.log(data.toString());
*/
function zeroAEsquerda (num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return ` ${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}
const data  = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);