//local storage

//window.localStorage.setItem("nome", "Luiz Antonio");

// let n = localStorage.getItem("nome");
// console.log(n)

// localStorage.removeItem("nome")

/* 
localStorage.getItem();
localStorage.removeItem();
 */
//********************************************************************** */
// onload = function (){
//     let nome = localStorage.getItem("nome")
//     let h1 = this.document.getElementById("nome")
//     h1.innerHTML = nome
// }

// function atualizar(elemento) { 
//     let valor = elemento.value
//     console.log(valor)

//     let h1 = document.getElementById('nome')
//     h1.innerHTML = valor

//     localStorage.setItem("nome", valor)
//  }

//********************************************************************** */

//Numeros no console do chrome são sempre azul !!!!!!!!!!!!!!!!!!!! e strings pretas

// let aluno = {nome : "Luiz" , n1 : 9.7}
// localStorage.setItem("aluno", JSON.stringify(aluno))

let a = localStorage.getItem("aluno")
console.log(JSON.parse(a))
localStorage.clear();
// localStorage.setItem("numero", 50)
// let n = localStorage.getItem("numero")
// console.log(n)
