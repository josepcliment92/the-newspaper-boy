class House {
//propiedades
constructor() {
this.x = 840;
this.y = 0; 
this.w = 120;
this.h = 120;

this.node = document.createElement("img");
this.node.src = "./images/house-up.png"
gameBox.append(this.node);

this.node.style.width = `${this.w}px`;
this.node.style.height = `${this.h}px`;
this.node.style.position = "absolute";
this.node.style.top = `${this.y}px`;
this.node.style.left = `${this.x}px`;

}



// métodos

}