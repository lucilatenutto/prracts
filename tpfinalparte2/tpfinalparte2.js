let juego;
let fondo;
let imgDerrota, imgVictoria, imgInicio, imgCreditos, imgInstrucciones;



function preload() {
  fondo = loadImage('data/fondo.jpg');
  imgDerrota = loadImage('data/bill1.jpg');
  imgVictoria = loadImage('data/bill2.jpg');
  imgInicio = loadImage('data/raromagedon.jpg');
  imgCreditos = loadImage('data/creditts.jpg');
  imgInstrucciones = loadImage('data/instrucciones.jpg');
}

function setup() {
  createCanvas(640, 480);
  juego = new Juego();
}

function draw() {
  if (juego.estado === "jugando") {
  image(fondo, 0, 0, width, height); 
  }
  juego.actualizar();
  juego.mostrar();
}

function mousePressed() {
  let botonX = width - 150;
  let botonY = height - 60;
  let botonAncho = 130;
  let botonAlto = 40;
  
   if (juego.estado === "inicial") {
    if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 - 40 && mouseY < height / 2 + 10) {
      juego.estado = "jugando";
    }
    else if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 + 20 && mouseY < height / 2 + 70) {
      juego.estado = "creditos";
    }
    else if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 + 80 && mouseY < height / 2 + 130) {
      juego.estado = "instrucciones";
    }
  } else if (juego.estado === "creditos" || juego.estado === "instrucciones") {
    if (mouseX > width - 150 && mouseX < width - 20 && mouseY > height - 60 && mouseY < height - 20) {
      juego.estado = juego.estado === "creditos" ? "inicial" : "jugando";
    }
  } else if (juego.estado === "victoria" || juego.estado === "derrota") {
    if (mouseX > width - 150 && mouseX < width - 20 && mouseY > height - 60 && mouseY < height - 20) {
      juego = new Juego();
    }
  }
}
  
