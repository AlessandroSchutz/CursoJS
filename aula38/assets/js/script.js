const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroungColorBody = estilosBody.backgroundColor;
console.log(backgroungColorBody)

for (let p of ps){
    p.style.backgroundColor = backgroungColorBody;
    p.style.color = "white";
}