class Boy {
  //propiedades (variables que necesitamos para dibujar al repartidor)
  constructor() {
    this.x = 50; //posición desde eje X (izquierda de la pantalla)
    this.y = 250; //posición desde eje Y (borde superior de la pantalla de juego, no de la pantalla total) REVISAR, NO FUNCIONA
    this.w = 75; //width (anchura del repartidor)
    this.y = 75; //height (altura del repartidor)

    this.node = document.createElement("img");
    this.node.src = "./images/newspaper-boy.png";
    gameBox.append(this.node);

    this.node.style.position = "absolute";
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  }

  //métodos del jugador

  //lanzar el periódico (disparar a los elementos para alterarlos, es decir, alterar su imagen)




}
