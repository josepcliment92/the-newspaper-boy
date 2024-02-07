class Newspaper {
//propiedades
constructor() {
    this.x = 100;
    this.y = 205;
    this.w = 25; 
    this.h = 30;

    this.node = document.createElement("img");
    this.node.src = "./images/newspaper.png"
    gameBox.append(this.node);

    this.node.style.position = "absolute";
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
}



//métodos
newspaperMovementUp() {
for (let i = this.y; i > 0; i--)
    this.y -= 5;
    this.node.style.top = `${this.y}px`;
}

newspaperMovementDown() {
for (let i = this.y; i > gameBox.offsetHeight; i++)
    this.y += 5;
    this.node.style.top = `${this.y}px`;
}

}