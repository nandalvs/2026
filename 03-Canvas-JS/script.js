let canvas = document.getElementsByTagName("canvas")[0];
let contexto = canvas.getContext("2d");

// 1 - Desenhando a moldura

function moldura() {
contexto.strokeStyle = "blue";
contexto.lineWidth = 20;
contexto.strokeRect(10, 10, 380, 380);
}

// 2 e 3 - Barra

let progresso = document.getElementById("progresso");

function desenharBarra() {
contexto.clearRect(0, 0, canvas.width, canvas.height);

moldura();

contexto.fillStyle = "blue";
contexto.fillRect(20, 20, 360 * progresso.value / 100, 30);

bandeiras();
casa();

}

progresso.addEventListener("input", desenharBarra);

// 4 - Bandeiras

function bandeiras() {

// Japão
contexto.fillStyle = "white";
contexto.fillRect(20, 80, 60, 60);

contexto.beginPath();
contexto.arc(50, 110, 18, 0, Math.PI * 2);
contexto.fillStyle = "red";
contexto.fill();


// Itália
contexto.fillStyle = "green";
contexto.fillRect(100, 80, 20, 60);

contexto.fillStyle = "white";
contexto.fillRect(120, 80, 20, 60);

contexto.fillStyle = "red";
contexto.fillRect(140, 80, 20, 60);


// Polônia
contexto.fillStyle = "white";
contexto.fillRect(180, 80, 60, 30);

contexto.fillStyle = "red";
contexto.fillRect(180, 110, 60, 30);


// Uruguai
contexto.fillStyle = "white";
contexto.fillRect(260, 80, 60, 60);

contexto.fillStyle = "lightblue";
contexto.fillRect(260, 80, 60, 10);
contexto.fillRect(260, 100, 60, 10);
contexto.fillRect(260, 120, 60, 10);


// Alemanha
contexto.fillStyle = "black";
contexto.fillRect(20, 160, 60, 20);

contexto.fillStyle = "red";
contexto.fillRect(20, 180, 60, 20);

contexto.fillStyle = "yellow";
contexto.fillRect(20, 200, 60, 20);


// França
contexto.fillStyle = "blue";
contexto.fillRect(100, 160, 20, 60);

contexto.fillStyle = "white";
contexto.fillRect(120, 160, 20, 60);

contexto.fillStyle = "red";
contexto.fillRect(140, 160, 20, 60);

}

// 5 - Desenhando a casa

function casa() {

contexto.fillStyle = "lightblue";
contexto.fillRect(200, 250, 120, 100);

contexto.beginPath();
contexto.moveTo(190, 250);
contexto.lineTo(260, 190);
contexto.lineTo(330, 250);
contexto.fillStyle = "darkred";
contexto.fill();

contexto.beginPath();
contexto.arc(230, 290, 15, 0, Math.PI * 2);
contexto.fillStyle = "black";
contexto.fill();

contexto.fillStyle = "brown";
contexto.fillRect(270, 300, 25, 50);

}

// Desenhando tudo

desenharBarra();
