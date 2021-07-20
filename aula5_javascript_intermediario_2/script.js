function loaded() {
    let t = document.getElementById("titulo")
    //t.onclick = mudarTexto;
    t.addEventListener("click", mudarTexto)
    t.addEventListener("mouseover", mudarTexto)
    t.addEventListener("mouseout", mouseOut)
}

function mudarTexto() {
    this.innerHTML = "Novo texto";
}

function mouseOut(){
    this.innerHTML = "Teste"
}

/*************************************************************************** */

let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");

t1.onclick = colocarEmMaiusculo;
t2.onclick = colocarEmMaiusculo;

function colocarEmMaiusculo(){
    this.innerHTML = this.innerHTML.toUpperCase();
}