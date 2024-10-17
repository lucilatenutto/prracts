let pantalla = 0; //esto controla la pantalla actual
let imagenes = []; 
let tiempoCambio = 5000; //5 segundos 
let tiempoUltimoCambio;
let listaDeTextos = [];
let fuente1, fuente2;
let posTextoX, posTextoY; // variables para la posición del texto
//let miSonido;
//let sonidoCargado = false;


function setup() {
createCanvas(640, 480);

 //inicializa el tiempo del último cambio de pantalla
  tiempoUltimoCambio = millis();
  generarPosicionTexto();
}


function draw() {
background(220);


if (millis() - tiempoUltimoCambio > tiempoCambio) {
    pantalla++; //avanza a la siguiente pantalla
    if (pantalla >= imagenes.length) {
      pantalla = 0; //reinicia al menú principal después de la última imagen
    }
    tiempoUltimoCambio = millis(); //actualiza el tiempo del último cambio
    generarPosicionTexto();
  }
   image(imagenes[pantalla], 0, 0, width, height);
   
    mostrarTexto(pantalla);
 //    if (sonidoCargado) {
//    miSonido.setVolume(map(mouseX, 0, width, 0, 1));
  //}
}

function generarPosicionTexto() {
  let margen = 50; 
  posTextoX = random(margen, width - margen * 2);
  posTextoY = random(margen, height - margen * 2);
}

function mostrarTexto(pantalla) {
  textSize(24); 
  fill(255);    
  noStroke(); 

 if (pantalla == 0) {
    textFont(fuente1);
  } else {
    textFont(fuente2); 
  }

   if (pantalla < textos.length) {
  text(listaDeTextos[pantalla], posTextoX, posTextoY);
   }
}
