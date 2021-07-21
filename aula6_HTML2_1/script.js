// let image = document.getElementById("like")

// image.addEventListener("click", function(){
//     //ao clicar a imagem muda

//     //image.src = "./img/imagem2.png"
//     // let lastImage = image.getAttribute("src")
//     // image.setAttribute("src", "./img/imagem2.png")

//     // console.log(lastImage)

//     //alterando atributos na imagem nesse exempo 
//     //image.setAttribute("cor", "verde")




// })

//********************************************* */

//uso do dataset
let lista = document.getElementById("lista")

lista.dataset.n = "5"

let id = parseInt(lista.dataset.id)
console.log(id)

let num = parseInt(lista.dataset.n)

//console.log(lista.dataset.num)

let conteudo = ""

for (let index = 1; index <= num; index++) {
    conteudo += "<li>" + index + "</li>"

}

lista.innerHTML = conteudo