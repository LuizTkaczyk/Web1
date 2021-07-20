let pessoas = ["Luiz", "Marta", "Chico-Pinico", "Ivonete"]


function sortear(){
    let numroPessoas = pessoas.length
    let numeroSortedo = Math.floor(Math.random() * numroPessoas)
    
    document.getElementById('display').innerHTML = pessoas [numeroSortedo]
}