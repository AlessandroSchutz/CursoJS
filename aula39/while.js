function randon(min, max){
    const r = Math.random()* (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = randon(min, max)

while (rand !== 10){
    rand = randon(min, max);
    console.log(rand);
}

console.log("___________")

do {
    rand = randon(min, max);
    console.log(rand);
} while(rand !== 10);