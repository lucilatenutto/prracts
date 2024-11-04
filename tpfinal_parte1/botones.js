function mousePressed() {

 // Detectar si se hizo clic en algún botón
  for (let i = 0; i < botones[estadoActual].length; i++) {
    let boton = botones[estadoActual][i];
    if (mouseX > boton[0] && mouseX < boton[0] + boton[2] &&
        mouseY > boton[1] && mouseY < boton[1] + boton[3]) {
      // Cambiar estado basado en el botón presionado
      if (estadoActual === 0 && i === 1) {
        estadoActual = 1; 
      } else if (estadoActual === 0 && i === 0) {
        estadoActual = 2; 
      } else if (estadoActual === 1) {
        estadoActual = 0;
      } else if (estadoActual === 2) {
        estadoActual = 3;
      } else if (estadoActual === 3) {
        estadoActual = 4;
      }else if (estadoActual === 4 && i ===0) {
        estadoActual = 5;
      }else if (estadoActual === 4 && i === 1) {
        estadoActual = 8;
      }else if (estadoActual === 5) {
        estadoActual = 6;
      }else if (estadoActual === 6) {
        estadoActual = 7;
      }else if (estadoActual === 7) {
        estadoActual = 0;
      }else if (estadoActual === 8) {
        estadoActual = 9;
      }else if (estadoActual === 9) {
        estadoActual = 10;
      }else if (estadoActual === 10) {
        estadoActual = 11;
      } else if (estadoActual === 11 && i === 0) {
        estadoActual = 12; 
      } else if (estadoActual === 11 && i === 1) {
        estadoActual = 14;
      }else if (estadoActual === 12) {
        estadoActual = 13;     
      }else if (estadoActual === 13) {
        estadoActual = 0;
      }else if (estadoActual === 14) {
        estadoActual = 15;
      }else if (estadoActual === 15) {
        estadoActual = 0; 
        
      
      }
        }
  }
}
