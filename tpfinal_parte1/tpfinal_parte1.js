//Tenutto Lucila
//Gonzalez Victoria

let pantalla = 0; 
let imagenes = []; 
let tiempoCambio = 50000; 
let tiempoUltimoCambio;
let fuente1, fuente2;
let botones = [];
let estadoActual = 0;
//let song;
let textos = [];
let colores = []; // Arreglo para los colores de cada pantalla
let tamaños = [];


function setup() {
createCanvas(640, 480);
tiempoUltimoCambio = millis();
//song.setVolume(0.5);
dibujarBotones(estadoActual);

  botones[0] = [[160, 350, 130, 60], [350, 350, 130, 60]];
  textos[0] = ["Comenzar", "Creditos"];

  botones[1] = [[250, 400, 130, 60]];
  textos[1] = ["Volver"];

  botones[2] = [[250, 400, 130, 60]];
   textos[2] = ["Avanzar"];

  botones[3] = [[250, 400, 130, 60]];
  textos[3] = ["Avanzar"];

  botones[4] = [[150, 350, 130, 60], [350, 350, 130, 60]];
  textos[4] = ["Solos", "Pedir ayuda"];

  botones[5] = [[250, 400, 130, 60]];
  textos[5] = ["Avanzar"];

  botones[6] = [[250, 400, 130, 60]];
  textos[6] = ["Avanzar"];

  botones[7] = [[250, 400, 130, 60]];
  textos[7] = ["Reiniciar"];

  botones[8] = [[250, 400, 130, 60]];
  textos[8] = ["Avanzar"];

  botones[9] = [[250, 400, 130, 60]];
  textos[9] = ["Avanzar"];

  botones[10] = [[250, 400, 130, 60]];
  textos[10] = ["Avanzar"];

  botones[11] = [[150, 350, 130, 60], [350, 350, 130, 60]];
  textos[11] = ["Destruirla", "Usarla"];

  botones[12] = [[250, 400, 130, 60]];
  textos[12] = ["Avanzar"];

  botones[13] = [[250, 400, 130, 60]];
  textos[13] = ["Reiniciar"];

  botones[14] = [[250, 400, 130, 60]];
  textos[14] = ["Avanzar"];

  botones[15] = [[250, 400, 130, 60]];
  textos[15] = ["Reiniciar"];
  
if (estadoActual === 0) { 
   textFont(fuente2);
    fill(242, 129, 59);
    textSize(30);
    textAlign(CENTER, CENTER);
  } else if (estadoActual === 1) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }else if (estadoActual === 2) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }else if (estadoActual === 3) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }else if (estadoActual === 4) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }else if (estadoActual === 5) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }else if (estadoActual === 6) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }else if (estadoActual === 7) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }else if (estadoActual === 8) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }else if (estadoActual === 9) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }else if (estadoActual === 10) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }else if (estadoActual === 11) {
    tetxFont(fuente1);
    fill(255);
    textSize(30);
    textAlign(CENTER, CENTER);
  }


}

function draw() {
background(50);
 if (imagenes[estadoActual]) {
    image(imagenes[estadoActual], 0, 0, width, height);
  }
 
  if (textosPantalla[estadoActual]) {
    text(textosPantalla[estadoActual], width / 2, height / 4);
  }
  dibujarBotones(estadoActual);

if (millis() - tiempoUltimoCambio > tiempoCambio) {
    pantalla++;
    if (pantalla >= imagenes.length) {
      pantalla = 0; 
    }
    tiempoUltimoCambio = millis();
    
  }
}

 
function dibujarBotones(indiceEstado) {
    if (botones[estadoActual] && textos[indiceEstado]) {
    for (let i = 0; i < botones[indiceEstado].length; i++) {
      let boton = botones[indiceEstado][i];
      fill(200);
      rect(boton[0], boton[1], boton[2], boton[3]);

      fill(255);
      textAlign(CENTER, CENTER);
      text(textos[indiceEstado][i], boton[0] + boton[2] / 2, boton[1] + boton[3] / 2);
    }
  }
}

//function keyPressed () {
 // if (key === 'm' && song.isPlaying()) {
   //   song.pause();
    //} else {
     // song.play();
