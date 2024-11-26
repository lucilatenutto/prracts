class Juego {
  constructor() {
    this.dipper = new Dipper();
    this.bill = new Bill();
    this.objetosRecolectados = 0;
    this.vidas = 3;
   
    //this.juegoTerminado = false;
     this.estado = "jugando";
  }

  actualizar() {
      if (this.estado === "jugando") {
      this.dipper.mover();
      this.bill.lanzarObjetos();
      this.bill.lanzarLaseres();

      for (let obj of this.bill.objetos) {
        if (this.dipper.tocaCirculo(obj)) {
          this.objetosRecolectados++;
          this.bill.removerObjeto(obj);
        }
      }
      for (let laser of this.bill.laseres) {
        if (this.dipper.tocaRectangulo(laser) && !laser.toco) {
          laser.toco = true;
          this.vidas--;
          this.bill.removerLaser(laser);
          if (this.vidas <= 0) {
           this.estado = "derrota";
          }
        }
      }

      if (this.objetosRecolectados >= 15) {
       this.estado = "victoria";
      }
    }
  }

  mostrar() {
    if (this.estado === "jugando") {
    this.dipper.mostrar();
    this.bill.mostrar();
    fill(255);
    textSize(16);
    text(`objetos recolectados: ${this.objetosRecolectados}`, 10, 20);
    text(`vidas: ${this.vidas}`, 10, 40);

     } else if (this.estado === "victoria") {
      this.pantallaVictoria();
    } else if (this.estado === "derrota") {
      this.pantallaDerrota();
    }
  }
   pantallaVictoria() {
    background(0, 255, 0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GANASTE!! :)", width / 2, height / 2);
  }
  pantallaDerrota() {
    background(255, 0, 0);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("PERDISTE!! :(", width / 2, height / 2);
  }
}
