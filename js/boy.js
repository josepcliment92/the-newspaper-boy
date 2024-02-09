class Boy {
  //propiedades
  constructor() {
    this.x = 400; //posición desde eje X (izquierda de la pantalla)
    this.y = 200; //posición desde eje Y (borde superior de la pantalla de juego)
    this.w = 85; //width (anchura del repartidor)
    this.h = 85; //height (altura del repartidor)

    this.node = document.createElement("img");
    this.node.src = "./images/newspaper-boy.png";
    gameBox.append(this.node);

    this.node.style.position = "absolute";
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  }
}
