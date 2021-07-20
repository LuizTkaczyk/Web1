// function mudarCor(){
//     let h = document.getElementsByTagName("h1")[0]
//     h.style.color = "blue"

// }

var numero = 0
var interval


function atualizar() {
    let h = document.getElementsByTagName("h1")[0]
    h.innerHTML += " " + numero
    numero++
}


function iniciar() {
    // let h = document.getElementsByTagName("h1")[0]
    // h.innerHTML = "Novo título"

    //Recebe dois argumentos, o primeiro é a funcão a ser executada e o segundo é o tempo que irá demorar para executar
    // window.setTimeout(mudarCor,1000)

    //interval = setInterval(atualizar, 300)

    interval = setTimeout(atualizar, 300)
}
function parar() {

    clearTimeout(interval)
    //clearInterval(interval)
}