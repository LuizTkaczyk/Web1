function primeiraFuncao(){
    alert("Primeira função")
}

function changeH1(i){
    let h1 = document.getElementsByTagName("h1")[0]
    //let input = document.getElementById()
    h1.innerText = i.value
    
}

function changeH2(i){
    let h2 = document.getElementsByTagName("h2")[0]
    //let input = document.getElementById()
    h2.innerText = i.value
    
}

function hideH1(){
    let h1 = document.getElementsByTagName("h3")[0]
    h1.style.display = "none"
}

function onOver(elemento){
    elemento.style.backgroundColor = "yellow"
    ele = document.getElementById("elemento")
    ele.style.color = "black"
}

function onOut(elemento){
    elemento.style.backgroundColor = "black"
    ele = document.getElementById("elemento")
    ele.style.color = "white"
}

