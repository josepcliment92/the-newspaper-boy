class Game {
constructor() {
// propiedades de la clase
this.gameIntervalFrequency = Math.round(1000/60) // esto es para indicar los 60fps. 60 veces por segundo.
this.boyObj = new Boy();
this.housesArr = [];

this.houseEjemplo = new House();

}

// métodos de la clase

gameLoop(){
// aquí incluimos todas las acciones que están dentro del loop del juego, que se activa al iniciar el juego

}

//el bucle del juego. Todo el juego está en un bucle, generado por un intervalo
gameStart() {
setInterval(() => {
    
    this.gameLoop();

}, this.gameIntervalFrequency)
}


//movimiento del repartidor(boy). en realidad él es estático, lo que se mueven son las casas. 
//movimiento de las casas(houses)
//aparición y desaparición de las casas (spawning)
//"disparos" del repartidor a las casas. la acción de repartir el periódico (con un add event listener)


}