let canvas = document.getElementById("myCanvas")
let contexto = canvas.getContext("2d")

//ceu
contexto.fillStyle = "lightcyan"
contexto.fillRect(0, 0, canvas.width, canvas.height)

//chao
contexto.beginPath()
contexto.fillStyle = "green"
contexto.fillRect(0, 300, canvas.width, 100)

//sol
contexto.beginPath()
contexto.arc(300,100, 40, 0, Math.PI*2)
contexto. fillStyle = "gold"
contexto.fill()

//montanha - linhas retas
contexto.beginPath()
contexto.moveTo(50,300) //onde a linha vai comecar, posicão inicial
contexto.lineTo(150,150) //ate onde ela vai
contexto.lineTo(250,300)
contexto.closePath()
contexto.fillStyle = "gray"
contexto.fill()
//nuvem
function nuvem(x, y) {
    contexto.beginPath()
    contexto.arc(x, y, 20, 0, Math.PI*2)
    contexto.arc(x+25, y, 20, 0, Math.PI*2)
    contexto.arc(x+50, y, 20, 0, Math.PI*2)
    contexto.fillStyle = "white"
    contexto.fill()
}
nuvem(50, 50)
nuvem(200, 80)
