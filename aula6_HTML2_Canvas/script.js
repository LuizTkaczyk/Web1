let tela = document.getElementById("tela")

let context = tela.getContext("2d")

//desenhando uma linha
// context.moveTo(0,0)

// context.lineTo(250,250)
// context.lineTo(500,0)
// context.lineWidth = 5
// context.strokeStyle = "yellow"
// context.stroke()


// context.fillStyle = "black"
// context.fillRect(10,10,100,200)

// context.beginPath();
// context.lineWidth = 4
// context.strokeStyle = "red"
// context.moveTo(10, 10)
// context.lineTo(400, 300)
// context.stroke()

// context.beginPath();
// context.lineWidth = 4
// context.strokeStyle = "white"
// context.moveTo(50,10)
// context.lineTo(300, 300)
// context.stroke()

// let x = 250
// let y = 250
// let raio = 100
// let inicio = 0
// let fim = 2 * Math.PI

// context.beginPath()
// context.strokeStyle ="red"
// context.fillStyle = "yellow"
// context.arc(x, y, raio, inicio, fim)

// context.fill()
// context.stroke()

let circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0
}

function desenhaCirculo(c) {
    context.beginPath()
    context.rect(0,0,500,500)
    context.fillStyle = "blue"
    context.fill()

    context.beginPath()
    context.strokeStyle = "red"
    context.fillStyle = "yellow"
    context.arc(c.x, c.y, c.raio, c.inicio, c.fim)

    context.fill()
    context.stroke()
}

setInterval(function () {

    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.5
        circle.x +=10
    }
    desenhaCirculo(circle)

}, 50)