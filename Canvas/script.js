let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// context.fillStyle = "black";
// context.fillRect(50, 50, 100, 80);
// contexto.strokeRect(50, 50, 100, 80);

context.beginPath()
context.fillStyle = "papayawhip"
context.arc(200, 200, 80, 0, Math.PI * 2)
context.fill()


//olhos
context.beginPath()
context.arc(170, 180, 10, 0, Math.PI * 2)
context.fillStyle = "black"
context.fill()

context.beginPath()
context.arc(230, 180, 10, 0, Math.PI * 2)
context.fillStyle = "black"
context.fill()

//boca
context.beginPath()
context.arc(200, 220, 40, 0, Math.PI)
context.fillStyle = "black"
context.fill()