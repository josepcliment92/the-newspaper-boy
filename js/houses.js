class House {
  //propiedades
  constructor(type) {
    let randomNumber = Math.random() * 100;
    if (randomNumber < 20) {
      this.alreadyHasPaper = true;
    } else {
      this.alreadyHasPaper = false;
    }

    this.x = gameBox.offsetWidth;
    if (type === "arriba") {
      this.y = 0;
    }
    if (type === "abajo") {
      this.y = 380;
    }
    this.w = 120;
    this.h = 120;

    this.node = document.createElement("img");
    if (type === "arriba" && this.alreadyHasPaper === false) {
      this.node.src = "./images/house-up.png";
    } else if (type === "arriba" && this.alreadyHasPaper === true) {
      this.node.src = "./images/house-with-newspaper-up.png";
    } else if (type === "abajo" && this.alreadyHasPaper === true) {
      this.node.src = "./images/house-with-newspaper-down.png";
    } else if (type === "abajo" && this.alreadyHasPaper === false) {
      this.node.src = "./images/house-down.png";
    }
    gameBox.append(this.node);

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.houseSpeed = 2;
  }

  // métodos
  houseMovement() {
    this.x -= this.houseSpeed;
    this.node.style.left = `${this.x}px`;
  }
}
