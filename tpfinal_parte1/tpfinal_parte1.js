let pantalla = 0; // esto controla la pantalla actual
let imagenes = []; 


function setup() {
createCnvas(640, 480);
}


function draw() {
image(imagenes, 0, 0, width, height);
}
