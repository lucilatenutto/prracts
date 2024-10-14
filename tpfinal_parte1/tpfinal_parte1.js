let pantalla = 0; // esto controla la pantalla actual
let imagenes = []; 
let tiempoCambio = 5000; // 5 segundos 
let tiempoUltimoCambio;

function setup() {
createCanvas(640, 480);

 // Inicializar el tiempo del último cambio de pantalla
  tiempoUltimoCambio = millis();
}


function draw() {
background(220);

if (millis() - tiempoUltimoCambio > tiempoCambio) {
    pantalla++; // Avanzar a la siguiente pantalla
    if (pantalla >= imagenes.length) {
      pantalla = 0; // Reiniciar al menú principal después de la última imagen
    }
    tiempoUltimoCambio = millis(); // Actualizar el tiempo del último cambio
  }
   image(imagenes[pantalla], 0, 0, width, height);
}
