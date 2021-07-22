let video = document.getElementById("video1")
let controls = document.querySelector("div.controle")
let controls2 = document.querySelector("div.btn")

function retroceder() {
    video.currentTime -= 15
}
function avancar() {
    video.currentTime += 15
}
function aumentarVelocidade() {
    video.playbackRate += 0.5
}
function diminuirVelocidade() {
    video.playbackRate -= 0.5
}
function play() {
    video.play();
    video.playbackRate = 1
    
}
function pause() {
    video.pause()
    
}
function stop() {
    video.pause()
    video.currentTime = 0
    video.playbackRate = 1
}

function sair(){
    controls.style.opacity = "0"
    //console.log("Saiu")
}

function entra(){
    controls.style.opacity = "1"
    //console.log("entra")
}

